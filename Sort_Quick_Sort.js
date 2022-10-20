function pivotHelper(arr, start=0, end= arr.length - 1) {
      let pivot = arr[start]
      let swapIdx = start;

      for(var i = start + 1; i < arr.length; i++ ) {
          if(pivot > arr[i]) {
              swapIdx++
               swap(arr, swapIdx, i)
          }
      }
      swap(arr, start, swapIdx)
      return swapIdx;
}

function swap(arr, i, j) {
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
}


function quickSort(arr, start = 0, end=arr.length - 1) {
    if(start < end) {
        let pivot = pivotHelper(arr, start, end)

        quickSort(arr, start, pivot -1)
        quickSort(arr, pivot+1, end)
    }
    
    return arr;
}


quickSort([4, 8, 2, 1, 5, 7, 6, 3 ])

