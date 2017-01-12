function split(wholeArray) {

  var halfLength = Math.floor(wholeArray.length / 2);
  var firstHalf = wholeArray.slice(0, halfLength);
  var secondHalf = wholeArray.slice(halfLength);

  return [firstHalf, secondHalf];
}

function merge(left, right){
  var mergedArr = [];

  while(left.length || right.length){
    if (left.length && right.length){
      if (right[0] > left[0]){
        mergedArr.push(left.shift());
      } else {
        mergedArr.push(right.shift());
      }
    }
    else if (left.length){
      mergedArr.push(left.shift());
    } else {
      mergedArr.push(right.shift());
    }
  }
  return mergedArr;
}

function mergeSort(array) {

  /* your code here */

}
