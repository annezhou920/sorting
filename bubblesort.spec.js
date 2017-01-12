describe("swap", function(){
  it('takes a number as an argument and returns that number plus one', function () {
    var randomNum = 3;
    expect(swap(randomNum)).toEqual(4);
  });
});

// describe("comparisonCount", function(){
//   it('takes a number as an argument and returns the total swap count', function () {
//     var partialSwapCount= 3;
//     expect(comparisonCount(partialSwapCount)).toEqual(4);
//   });
// });


describe('Bubble Sort', function(){
  beforeEach(function () {
    spyOn(window, "swap").and.callThrough();
  });

  it('handles an empty array', function(){
    expect( bubbleSort([]) ).toEqual( [] );
  });

  it('handles an array with one element', function(){
    expect( bubbleSort( [1]) ).toEqual( [1] );
  });

  it('handles an array with multiple elements', function(){
    expect( bubbleSort( [5,2,1,4,3]) ).toEqual( [1,2,3,4,5] );
  });

  it('calls on swap', function(){
    var randomArr = [5,2,1,4,3];
    bubbleSort(randomArr);
    expect(window.swap).toHaveBeenCalled();
  });

  it('counts total swaps', function(){
    var randomArr = [5,2,1,4,3];
    bubbleSort(randomArr);
    expect(window.swap.calls.count()).toEqual(6);
  });

});
