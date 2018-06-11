describe('Split Array function', function() {
    let testArr;    
    beforeEach(() => {
        testArr = [5, 3, 8, 9, 2, 7, 10];
    });

    it('is able to split an array into two halves', function() {
      // your code here
      expect(split(testArr)).toEqual([[5, 3, 8],[9, 2, 7, 10]])
    });
    
  });

  describe('Merge function', function() {
 
      it('is able to merge to sorted arrays into one sorted array', function() {
          expect(merge([1,2,3], [4,5,6])).toEqual([1,2,3,4,5,6])
      })
  })

  describe('Merge sort', function(){
      let arr;
      beforeEach(() => {
        arr = [5, 3, 2, 7, 8, 11, 55, -7]
      });

      it('check to see if the merge sort function is called', function() {
        expect(split(arr)).toHaveBeenCalled()
      })
  })
