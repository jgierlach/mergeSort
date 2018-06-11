function split(wholeArray) {
    let firstHalf = []
    let secondHalf = []
    const halfWayPoint = Math.floor(wholeArray.length / 2)

    firstHalf = wholeArray.slice(0, halfWayPoint)
    secondHalf = wholeArray.slice(halfWayPoint, wholeArray.length)
    
      return [firstHalf, secondHalf];
    }

    //console.log(split([1, 2, 3, 4, 5]))

function merge(arr1, arr2) {
    return arr1.concat(arr2)
}

//console.log(merge([1,2,3], [4,5,6]))

function mergeSort(arr) {
    console.log(arr)
    if(arr.length === 1) {

    } 
    else {
        split(arr).forEach((index) => {
            mergeSort(index)
        })
    }
    
}

mergeSort([2, 1])
//output: [[3], [5], [7], [2], [5], [8]]


    