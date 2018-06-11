function split(wholeArray) {
    let firstHalf = []
    let secondHalf = []
    const halfWayPoint = Math.floor(wholeArray.length / 2)

    firstHalf = wholeArray.slice(0, halfWayPoint)
    secondHalf = wholeArray.slice(halfWayPoint, wholeArray.length)
    
      return [firstHalf, secondHalf];
    }

    console.log(split([1, 2, 3, 4, 5]))

    

    