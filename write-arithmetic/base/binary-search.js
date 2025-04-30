/**
 * 二分查找
 */
function binarySearch(arr, target) {
  let left = 0, right = arr.length - 1;
  while(left <= right) {
    let midIndex = Math.floor((left + right) / 2);
    if (arr[midIndex] === target){
      return midIndex;
    } else if(arr[midIndex] > target) {
      right = midIndex - 1;
    } else {
      left = midIndex + 1;
    }
    return -1;
  }
}