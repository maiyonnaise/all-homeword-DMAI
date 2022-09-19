// đếm từ 

function countWords(str) {
  if (str === '') return 0
  return str.trim().split(' ').length
}

// số lần 1 từ xuât hiện trong câu 

function statisticWord(str) {
  const strArr = str.trim().toLowerCase().split(' ')
  let obj = {}
  for (let item of strArr) {
    if (!(item in obj)) {
      obj[item] = 1
    } else {
      obj[item] += 1
    }
  }
  return obj
}
// sô lần 1 chữ xuất hiện trong str


function numOfLetters(str) {
  const letterArr = str.toLowerCase().split('')
  let obj = {
    space: 0
  }
  for (let letter of letterArr) {
    if (letter === " ") {
      obj.space += 1
    } else {
      if (letter in obj) {
        obj[letter] += 1
      } else {
        obj[letter] = 1
      }
    }
  }
  return obj
}

// kiếm tra mảng tăng dần

