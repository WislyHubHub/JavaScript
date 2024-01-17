function simplePair(arr , num) {
    
    let res = [];
    for(let i = 0; i < arr.length; i++){    
        if(arr[i] * arr[i + 1] == num || arr[i] * arr[i + 2] == num) {
            res.push(arr[i]);
        }else if(arr[i - 1] * arr[i] == num || arr[i - 2] * arr[i] == num) {
            res.push(arr[i]);
        }else if(!res.length) {
            return null;
        }   
    }
    return res;
 
}

console.log(simplePair([1,2,3] ,3));// --> [1,3]
console.log(simplePair([1,2,3] ,6));// --> [2,3]
console.log(simplePair([1,2,3] ,9));// --> null