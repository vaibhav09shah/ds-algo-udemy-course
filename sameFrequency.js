function sameFrequency(n1, n2) {

    // convert n1 to string 
    var n1str = n1.toString()
    var n2str = n2.toString()
    
    if(n1str.length !== n2str.length) return false;

    let lookUp = {}
    console.log(n1str);
    for(var i = 0; i< n1str.length; i++) {
        lookUp[n1str[i]] = ++lookUp[n1str[i]] || 1
    }
    
    for (var j =0; j< n2str.length; j++) {
        if(!lookUp[n2str[j]]) {
           return false  
        } else {
            lookUp[n2str[j]] = lookUp[n2str[j]] - 1;
        }
    }
    
    return true;
}

sameFrequency(22,222)
