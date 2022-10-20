function selectionSort(arr) {
    for(var i = 0; i< arr.length; i++) {
        let min = arr[i]
        let minIndex = i
        for(var j = i+1; j< arr.length; j++) {
            if(arr[j] < min) {
                min = arr[j]
                minIndex = j
            }
        }

        if(i !== minIndex) {
            let temp = arr[i]
            arr[i] = arr[minIndex]
            arr[minIndex] = temp
        }
    }
    return arr;
}

selectionSort([25,7,3,10,6,5,8])

// In Selection sort , we place the first element as min , and compare that with all the elements in arr . If any element is lower than the min then we swap the position of low element at tbe start 
