 function mergeSort(arr) {
   if(arr.length <= 1) return arr;
   let mid = Math.floor(arr.length/2);
   let left =  mergeSort(arr.slice(0,mid));
   let right = mergeSort(arr.slice(mid));
   return merge(left, right)
}
 

 function merge(arr1, arr2) {
     let results = []
     let i = 0;
     let j = 0;
     while(i < arr1.length && j < arr2.length ) {
         if(arr2[j] > arr1[i]) {
             results.push(arr1[i])
             i++
         } else {
             results.push(arr2[j])
             j++
         }
     }

    while(i < arr1.length) {
        results.push(arr1[i])
        i++
    }
        
   while(j < arr2.length) {
        results.push(arr2[j])
        j++
    }     

    return results;
 }

mergeSort([10,24,76,73])

// In merge sort , we split up the arr into sub arrays which are further split until each array contains single item 
// we create left and right arrays , the comppare it and then merge it 
//                          10 24 76 73

//                    10 24              76 73
                 
//                10         24       76        73 

//                            Compared and Merged

//                     10  24           73    76

//                         Compared and Merged


//                         10 24 73 76