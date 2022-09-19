

//findIndex 

function findIndex(arr, num) {
  if (arr.length > 0) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === num) {
        return i
      }
      return -1
    }
  }
  return undefined
}

// map 
function mapArray(arr, callback) {
  if (arr.length > 0) {
    let result = []
    for (let i = 0; i < arr.length; i++) {
      result[i] = callback(arr[i])
    }
    return result
  }
  return undefined
}

function mutiply(n) {
  return n * 100
}


//every
function everyArray(arr, callback) {
  for (let item of arr) {
    if (!callback(item)) return false
  }
  return true
}

function biggerthanNum(item) {
  return item >= 100
}

//flat 

function flatten(arr) {
  let newArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      newArray = newArray.concat(flatten(arr[i]))
    } else {
      newArray.push(arr[i])
    }
  }
  return newArray
}

function flatArray(arr, depth = 1) {
  if (!Array.isArray(arr)) return arr

  if (depth > 0) {
    return arr.reduce((prev, current) => prev.concat(flatArray(current, depth - 1)), [])
  }
  return arr.slice
}

// reduce 
function reduceArray(arr, callback, initValue) {
  let result = initValue
  for (let i = 0; i < arr.length; i++) {
    result = callback(result, arr[i])
  }
  return result
}

function multiply(result, current) {
  return result *= current
}

// sỏrt 
function sortArray(array, callback) {
  return callback(array)
}
function selectionSort(array) {
  for (let i = 0; i < array.length - 1; i++) {
    let minIndx = i
    for (let j = i + 1; j < array.length; j++) {
      if (array[minIndx] > array[j]) {
        minIndx = j
      }
    }
    swap(array, i, minIndx)
  }
  return array
}

function swap(array, i, j) {
  let temp = array[i]
  array[i] = array[j]
  array[j] = temp
}

function merge(arr1, arr2) {
  let combined = []
  let i = 0
  let j = 0
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] > arr2[j]) {
      combined.push(arr2[j])
      j++
    } else {
      combined.push(arr1[i])
      i++
    }
  }
  while (i < arr1.length) {
    combined.push(arr1[i])
    i++
  }
  while (j < arr2.length) {
    combined.push(arr2[j])
    j++
  }
  return combined
}

function mergeSort(arr) {
  if (arr.length === 1) return arr
  let mid = Math.floor(arr.length / 2)
  let left = arr.slice(0, mid)
  let right = arr.slice(mid)
  return merge(mergeSort(left), mergeSort(right))
}

function insertionSort(arr) {
  let temp, j;
  for (let i = 1; i < arr.length; i++) {
    j = i - 1
    temp = arr[i]
    while (j >= 0 && arr[j] > temp) {
      console.log(i, j)

      arr[j + 1] = arr[j]
      j--
    }
    arr[j + 1] = temp
  }
  return arr
}
