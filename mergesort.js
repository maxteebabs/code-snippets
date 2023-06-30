let arr = [2, 4, 99,3, 25, 100, 54, 22];

function merge(leftArr, rightArr) {
  let sorted = [];
  while(leftArr.length && rightArr.length) {
    if(leftArr[0]< rightArr[0]) {
      sorted.push(leftArr.shift());
    }else{
      sorted.push(rightArr.shift());
    }
  }
  return sorted.concat(leftArr.concat(rightArr));  
}
function mergeSort(a){
  if(a.length <= 1) {
    return a;
  }
  let mid = Math.floor(a.length / 2);
  let left = mergeSort(a.slice(0, mid));
  let right = mergeSort(a.slice(mid));
  return merge(left, right)
}
const newArr = mergeSort(arr);
console.log(newArr);

// function mergeSort(arr) {
//   // https://brilliant.org/wiki/heap-sort/
//   // for worst case scenarios, use merge sort but has space complexity of 0(n)
//   if(arr.length === 1) {
//     return arr;
//   }

//   const mid = Math.floor(arr.length/2);
//   const left = arr.slice(0, mid);
//   const right = arr.slice(mid);
  
//   console.log('split::', left, right);
//   return merge(
//     mergeSort(left),
//     mergeSort(right)
//   )
// }


// function merge(arr1, arr2) {
//   let leftIndex = 0;
//   let rightIndex = 0;
//   let result = [];
//   while(leftIndex < arr1.length && rightIndex < arr2.length) {
//     if(arr1[leftIndex] < arr2[rightIndex]) {
//       result.push(arr1[leftIndex]);
//       leftIndex++;
//     }else {
//       result.push(arr2[rightIndex]);
//       rightIndex++;
//     }
//   }
//   return result.concat(arr1.slice(leftIndex)).concat(arr2.slice(rightIndex));
// }
