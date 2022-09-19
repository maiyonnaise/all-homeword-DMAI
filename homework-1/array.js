// kiếm tra mảng tăng dần
//mai
function isIncreasingNumList(arr) {
  if (arr.length > 1) {
    for (let i = 0; i < arr.length - 1; i++) {
      const temp = arr[i]
      const next = arr[i + 1]
      if (next - temp <= 0) {
        return false
      }
    }
    return true
  }
}

// mảng đối xứng
//mai
function isSymmetric(arr) {
  if (arr.length > 0) {
    return arr.join(' ') === arr.reverse().join(' ')
  }
  return false
}

// kiểm tra sô fibonacci
//mai
function generateFibonacciList(n) {
  let arr = [0, 1]
  let third, second, first;
  let i = 2
  while (i < n) {
    second = arr[i - 1];
    first = arr[i - 2];
    third = second + first;
    if (third < n) {
      arr[i] = third
      i++
    } else {
      break
    }
  }
  return arr
}

function isFibonaci(arr) {
  // generate fobonacci nho hon 100
  const fibonacciArr = generateFibonacciList(100)
  for (let item of arr) {
    if (fibonacciArr.includes(item)) {
      return true
    }
    return false
  }
}

// so lon thu hai trong mang
//mai
function findSecondLargest(arr) {
  return arr.sort((a, b) => b - a)[1]
}


// so chinh phuong cuoi cung trong mang
//mai

function findLastSquareNum(arr) {
  let squareArr = []
  for (let item of arr) {
    if (Number.isInteger(Math.sqrt(item))) {
      squareArr.push(item)
    }
  }
  return squareArr[squareArr.length - 1]
}
// cac so khong co trong mang
//mai
function countNumberNotInB(a, b) {
  let obj = {}
  for (let item of a) {
    obj[item] = true
  }
  for (let item of b) {
    if (item in obj) {
      obj[item] = false
    }
  }
  console.log(Object.keys(obj)
    .filter(key => obj[key] === true)
    .length)
}

countNumberNotInB([1, 2, 5], [1, 2, 5, 3])
