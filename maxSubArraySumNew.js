function maxSubarraySum(arr, num) {
    let maxSum = 0;
    let tempSum = 0;
    for(var i=0; i< num; i++) {
        maxSum += arr[i]
    }
    console.log(maxSum);
    tempSum = maxSum
    for(var j = num; j < arr.length - num +1; j++ ) {
        tempSum = tempSum - arr[j-num] + arr[j]
        if(tempSum > maxSum) maxSum = tempSum 
    }

    return maxSum;
}


maxSubarraySum([1,4,2,10,23,3,1,0,20],4)
