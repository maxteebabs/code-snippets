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
