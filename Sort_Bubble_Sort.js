function bubbleSort(arr) {
    var noSwaps;
    for(i= arr.length; i > 0; i-- ) {
        noSwaps = true
        for(j = 0; j< i -1; j++ ) {
            console.log(arr, arr[j], arr[j+1]);
            if(arr[j] > arr[j+1]) {
                var temp = arr[j];
                arr[j] = arr[j+1]
                arr[j+1] = temp 
                noSwaps = false
            }
        }
        console.log("One Pass Complete")
        if(noSwaps) return arr  
    }

    return arr

}

bubbleSort([10,1,2,3,8,9])

// In Buble Sort , we compare the array with two elements next to each other and swap their places. So in First pass , biggest element is at the end of array
// The next pass iteration must not include this last element for sorting