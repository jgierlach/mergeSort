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
