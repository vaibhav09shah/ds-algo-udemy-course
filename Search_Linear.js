function linearSearch(arr,search){
  // add whatever parameters you deem necessary - good luck!
    if(arr.length < 1) return -1;
    for(i=0; i< arr.length; i++) {
        if(arr[i] === search) return i
    }
    return -1
}



linearSearch([1,2,3,4,5,6,7], 1)