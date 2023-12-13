const obj1 = {
    person : 'Rachapruek' ,
    weight : 70

}

//const obj2 = obj1 ;
const obj2 = Object.assign({} ,obj1) ;

//const obj2 = Object.assign({},obj1);
//const obj2 = {... obj1} ;
obj2.weight = 65 ;
console.log (obj1) ;
console.log (obj2) ;

alert ("Hello world ") ;