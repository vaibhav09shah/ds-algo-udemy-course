function productOfArrayRecursive(arr) {
    if(arr.length === 0 ) return 1
   return arr[0] * productOfArrayRecursive(arr.splice(1))
}

productOfArrayRecursive([1,2,3,10])