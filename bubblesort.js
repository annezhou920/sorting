function swap(num){
  num++;
  return num;
}

// function comparisonCount(num){
//   totalSwap += num;
//   return totalSwap;
// }

function bubbleSort(arr) {
  var swapCount = 0;
  var totalSwap = 0;

  if (arr.length === 1) {
    return arr;
  }

  for (var i = 0; i < arr.length - 1; i++){
    if (arr[i] > arr[i+1]){
      var temp = arr[i];
      arr[i] = arr[i+1];
      arr[i+1] = temp;

      swapCount = swap(swapCount);

    }
  }
  // totalSwap = comparisonCount(swapCount);

  if (swapCount === 0) {
    return arr
  } else {
    return bubbleSort(arr)
  }
}


// function BubbleSort(arr){
//  var swap = true;
//  while (swap === true){
//    swap = false;
//    for (var i = 0; i < arr.length - 1; i++){
//     if (arr[i] > arr[i+1]){
//         var temp = arr[i];
//         arr[i] = arr[i+1];
//         arr[i+1] = temp;
//         swap = true;
//     }
//    }
// }
//   return arr;
// }
