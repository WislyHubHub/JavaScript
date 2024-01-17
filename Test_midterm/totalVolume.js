function totalVolume(arr) {
    return arr.reduce((total, box) => total + box.reduce((acc, val) => acc * val, 1), 0);
    
}
    
console.log(totalVolume([[4, 2, 4], [3, 3, 3], [1, 1, 2], [2, 1, 1]])); // --> 63
console.log(totalVolume([[2, 2, 2], [2, 1, 1]])); // --> 10
console.log(totalVolume([[1, 1, 1]])); // --> 1
    