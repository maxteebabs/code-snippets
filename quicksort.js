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
