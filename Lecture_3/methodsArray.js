let arr1 = ["A" ,true ,2] ;

console.log ("\n ***************** Push and pop ****************** \n") ;
console.log (arr1.push("new value")) ;
console.log (arr1) ;
console.log (arr1.pop()) ;
console.log (arr1) ;


console.log ("\n ***************** Shift and unshift *************** \n") ;
console.log (arr1.unshift("new value")) ;
console.log (arr1) ;
console.log (arr1.shift()) ;
console.log (arr1) ;

console.log ("\n ******************* concat ********************* \n") ;
let arr2 = ["B" ,false , 3] ;
let newArr = arr1.concat (arr2) ;
let newArr2 = arr2.concat (1,2,3) ;
console.log (newArr) ;
console.log (newArr2) ;


// push = come in last length
// pop = pickup last length
// unshift = come in fisrt length
// shift = pickup first length

// concat tor array Ex ['1' ,'2' ,'3'] and ['4' ,'5','6'] = 

//concat === ['1','2','3','4','5','6'] 