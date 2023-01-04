let num1 = '150' ;
let flot = '1.50' ;

console.log("****************** Converting string to integers ******************") ;
console.log(parseInt('100')) ;
console.log(parseInt(num1)) ;
console.log(parseInt('ABC')) ;
console.log(parseInt('0xF')) ; // Hexdecinal number

console.log ("******************** Conveting string to float ******************") ;

console.log(parseFloat('1.25abc')) ;
console.log(parseFloat(flot)) ;
console.log(parseFloat('ABC')) ;

console.log("************** More Conversion Example ********************") ;

console.log(parseInt('1.5')) ;
console.log(parseInt('1 + 1')) ;

console.log(parseInt(`${1 + 1} `)) ;

console.log("***************** Converting number2 to string **************") ;
console.log(num1 .toString()) ;
console.log(flot.toString()) ;
console.log((100).toString()) ;