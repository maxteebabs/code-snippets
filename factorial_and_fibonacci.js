function findFactorialRecursive(number) {
  if(number === 0) {
    return 1;
  }
  return number * findFactorialIterative(number - 1);
}

function findFactorialIterative(number) {
  let result = 1;
  while(number > 0) {
    result *= number;
    number--;
  }
  return result;
}
const result = findFactorialRecursive(2);
console.log('result::', result)


const result1 = findFactorialIterative(2);
console.log('result::', result1)

// Given a number N return the index value of the Fibonacci 
// Sequence, where sequence is:

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 59, 89, 144 ...

// the pattern of the sequence is that each value is the sum of 
// the 2 previous values, that means for N = 5 -> 2+3

function fibonacciRecursive(index) { //0(n)
  if(index < 2) {
    return index;
  }
  return fibonacciRecursive(index - 1) + fibonacciRecursive(index - 2);
}

function fibonacciIterative(index) { //0(2^n)
  const arr = [0, 1];
  for(let i = 2; i < index +1; i++) {
    arr.push(arr[i - 1] + arr[i-2]);
  }
  return arr[index];
}

console.log('fibonacci:: ',fibonacciRecursive(5));
console.log('fibonacci iterative:: ',fibonacciIterative(5));
