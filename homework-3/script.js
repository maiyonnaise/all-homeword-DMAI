// class Queue {
//   constructor(delay = 1000) {
//     this.delay = delay;
//     this.callbackQueue = [];
//   }

//   add(callback) {
//     if (this.callbackQueue.length === 0) {
//       this.callbackQueue.push(callback);
//       this.runcallback();
//     } else {
//       this.callbackQueue.push(callback);
//     }
//   }

//   runcallback() {
//     const callback = this.callbackQueue[0];
//     setTimeout(() => {
//       this.callbackQueue.shift();
//       if (this.callbackQueue.length > 0) {
//         this.runcallback();
//       }
//     }, this.delay);

//     callback();
//   }
// }

// const cb1 = () => console.log('111111111111111111111111111111111111111111111111111111111111');
// const cb2 = () => console.log('222222222222222222222222222222222222222222222222222222222222');
// const cb3 = () => console.log('333333333333333333333333333333333333333333333333333333333333');
// const cb4 = () => console.log('444444444444444444444444444444444444444444444444444444444444');

// const queue1 = new Queue(1500);
// queue1.add(cb1);
// queue1.add(cb2);

// setTimeout(() => queue1.add(cb3), 6000);
// setTimeout(() => queue1.add(cb4), 6500);



const keywords = ['swift', 'css', 'javascript', 'react', 'rx', 'ruby', 'rails', 'php', 'objective-c', 'html', 'css', 'rust']
const url = 'https://api.github.com/search/repositories'

function requestData() {
  const fiveWords = keywords.splice(0, 5)
  if (fiveWords.length <= 0) {
    return;
  }
  const promiseList = fiveWords.map(item => fetch(`https://api.github.com/search/repositories?q=${item}`))
  const fulfilled = []
  Promise.allSettled(promiseList)
    .then(res => {
      res.forEach((each, index) => {
        if (each.status === 'rejected') {
          keywords.push(res[index])
        } else {
          fulfilled.push(each.value.json())
        }
      })
      return Promise.all(fulfilled)
    })
    .then((json) => console.log('JSON', json))
    .then(() => requestData())
    .catch(err => console.log(err))
}
// requestData()




