const sum = (firstParam , secondParam) => {
    return firstParam + secondParam ;

} ;

console.log (sum(2 ,5)) ;

const printHello = () => {
    console.log("Hello") ;

} ;
printHello() ;

const checkWeight = (weight) => {
    console.log(`Baggage weight : ${weight} kilograms.`) ;

} ;
checkWeight(25) ;

//Concise arrow function
const multiplay = (a ,b) => a * b ;
console.log(multiplay(2 ,30)) ; // Print : 60 