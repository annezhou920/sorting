function split(wholeArray) {

  var halfLength = Math.floor(wholeArray.length / 2);
  var firstHalf = wholeArray.slice(0, halfLength);
  var secondHalf = wholeArray.slice(halfLength);

  return [firstHalf, secondHalf];
}
