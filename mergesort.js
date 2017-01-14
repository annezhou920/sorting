function split(wholeArray) {

  var halfLength = Math.floor(wholeArray.length / 2);
  var firstHalf = wholeArray.slice(0, halfLength);
  var secondHalf = wholeArray.slice(halfLength);

  return [firstHalf, secondHalf];
}
// needs to be linear
function merge(left, right){
  var mergedArr = [],
      leftIndex = 0,
      rightIndex = 0;

  while(leftIndex < left.length && rightIndex < right.length){
    if (left.length && right.length){
      if (right[rightIndex] > left[leftIndex]){
        mergedArr.push(left[leftIndex]);
        leftIndex++;
      } else {
        mergedArr.push(right[rightIndex]);
        rightIndex++;
      }
    }
    for (; leftIndex < left.length; leftIndex++) mergedArr.push(left[leftIndex]);
    for (; rightIndex < right.length; rightIndex++) mergedArr.push(right[rightIndex]);
  return mergedArr;
}

function mergeSort(array) {
// base case
  if (array.length < 2) {
    return array;
  }
  // general case: split the array into two halves
  var splits = split(array),
      left   = splits[0],
      right  = splits[1];

  // sort the split arrays, merge the results
  return merge(mergeSort(left), mergeSort(right));
}
