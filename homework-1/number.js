// kiểm tra số tăng dần

function isIncreasingNum(input) {
  if (input > 0 && input < 1000000) {
    const arr = Array.from(String(input), Number)
    for (let i = 0; i < arr.length - 1; i++) {
      const temp = arr[i]
      const next = arr[i + 1]
      if (next <= temp) {
        return false
        break
      }
      continue
    }
    return true
  }
}

// kiểm tra số tăng dần theo 1 lượng nhất định

function isIncreasingNumberByDistance(input, num) {
  if (input > 9 && input < 1000000) {
    const arr = Array.from(String(input), Number)
    for (let i = 0; i < arr.length - 1; i++) {
      const temp = arr[i]
      const next = arr[i + 1]
      const distance = Math.abs(temp - next)
      if (next > temp && distance === num) {
        continue
      }
      return false
    }
    return true
  }
}
// kiểm tra số nguyên tố 


// solution 1
// o(n^2) // o(1)
function isPrime(num) {
  if (num < 1) return false
  if (num === 1) return true
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false
    }
  }
  return true
}



function isPrimeRecursive(n, i = 2) {
  if (n == 0 || n == 1) {
    return false;
  }

  // Checking Prime
  if (n == i) return true;

  // base cases
  if (n % i == 0) {
    return false;
  }
  i++;
  return isPrimeRecursive(n, i);
}

// kiểm tra số chính phương 


function isInteger(n) {
  return Number.isInteger(n)
}

function isSquareNum(n) {
  if (n > 0) {
    return isInteger(Math.sqrt(n))
  }
  return false
}

// kiểm tra số hoàn hảo


function isPerfectNum(n) {
  let sum = 0;
  for (let i = 1; i <= n / 2; i++) {
    if (n % i === 0) {
      sum += i
    }
  }

  if (sum === n) {
    return true
  }
  return false
}

// kiểm tra số đối xứng

function isSymetricNum(num) {
  const arr = Array.from(String(num))
  return arr.reverse().join('') === num.toString()
}

// kiểm tra số có tổng chữ số chia hết cho 10

function isDividedBy10(n) {
  const arr = Array.from(String(n), Number)
  const sum = arr.reduce((a, b) => a + b, 0)
  return sum % 10 === 0
}