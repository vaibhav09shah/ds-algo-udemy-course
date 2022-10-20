function insertionSort(inputArr) {
    let n = inputArr.length;
        for (let i = 1; i < n; i++) {
            // Choosing the first element in our unsorted subarray
            let current = inputArr[i];
            // The last element of our sorted subarray
            let j = i-1; 
            while ((j > -1) && (current < inputArr[j])) {
                inputArr[j+1] = inputArr[j];
                j--;
            }
            inputArr[j+1] = current;
        }
    return inputArr;
}


insertionSort([15,23,5,2,7])

// In Insertion sort , we start with element at index 1, this divides array into a sorted and unsorted array . we compare item from unsorted array with items in sorted array and 'insert ' them accordingly
 