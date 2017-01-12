describe('Split Array function', function() {
  // it('given one array, returns two arrays', function () {
  //   expect(split([])).toEqual([[], []]);
  // });
  //
  // it('splits array of even length', function () {
  //   expect(split([5, 10])).toEqual([[5], [10]]);
  // });
  //
  // it('splits array of odd length', function () {
  //   expect(split([4, 10, 20])).toEqual([[4], [10, 20]]);
  // });
  it('is able to split an array into two halves', function() {
    expect( split([1,2,3,4,5]) ).toEqual([ [1,2], [3,4,5] ]);
  });
});

describe('Merge Sort', function(){
  it('is able to merge two sorted arrays into one sorted array', function(){
    // test the merging algorithm
  });
});
