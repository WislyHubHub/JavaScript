function sumTwoSmallestNums (numbers) {

    let lowest = Math.min (numbers) 

    for (let i = 0 ; i < numbers.length ; i++ ) {
        if (numbers[i] < lowest) {
            return Math.min.numbers + lowest ;

        }
    

    }

}

console.log (sumTwoSmallestNums (19 , 5 ,42 ,2, 77)) ;
console.log (sumTwoSmallestNums (10 ,343445353 , 3453445 , 3453545353453)) ;
console.log (sumTwoSmallestNums (2 ,9 ,6  , -1)) ;
console.log (sumTwoSmallestNums (879 , 953 ,694 ,-847 ,342 ,221 ,-91 ,-723 ,791 ,-587)) ;
console.log (sumTwoSmallestNums (3683 ,2902 ,3951 ,-475 , 1617 ,-2385)) ;