let arr = [2, 4, 99,3, 25, 100, 54, 22];
function swap(a, lI, rI) {
  let temp = a[lI];
  a[lI] = a[rI];
  a[rI] = temp;
}
function partition(a, start, end) {
  let pivot = a[end];
  let i = start - 1;
  for(let j = start; j<= end - 1; j++) {
    if(a[j] <= pivot) {
      i++;
      swap(a, i, j);
    }
  }
  swap(a, i+1, end);
  return i+1;
}
function quickSort(a, low, high){
  if(low < high){
      let pivot = partition(a, low, high); 
      quickSort(a, low, pivot - 1);
      quickSort(a, pivot+1, high);
  }
}
function mySort(arr) {
  quickSort(arr, 0, arr.length - 1);
}
mySort(arr);
console.log(arr);


//function quickSort(arr, leftIndex, rightIndex) {
//   // better than merge sort cos it has a space complexity of 0(nlog n) but
//   // not suited for worst case ocs of 0(n^2)
//   let pivot = arr.length -1;
//   const length = arr.length;
//   if(leftIndex < rightIndex) {
//     pivot = rightIndex;
//     const partitionIndex = qsPartition(arr, pivot, leftIndex, rightIndex);
//     quickSort(arr, leftIndex, partitionIndex - 1);
//     quickSort(arr, partitionIndex + 1, rightIndex);
//   }
//   return arr;
// }

// function qsPartition(arr, pivot, leftIndex, rightIndex) {
//   let partitionIndex = leftIndex;
//   for(let i = leftIndex; i< rightIndex; i++) {
//     if(arr[i] < arr[pivot]) {
//       swap(arr, i, partitionIndex);
//       partitionIndex++;
//     }
//   }
//   swap(arr, rightIndex, partitionIndex);
//   return partitionIndex;
// }

// function swap(arr, leftIndex, rightIndex) {
//   const temp = arr[leftIndex];
//   arr[leftIndex] = arr[rightIndex];
//   arr[rightIndex] = temp;
// }
// const qsResult = quickSort(randomNumbers, 0, randomNumbers.length - 1);
// console.log('Result:: ', qsResult)
