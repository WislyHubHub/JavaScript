const cat = {
    name : "PiPey" ,
    age : 8 ,
    YearOfBirth : 2002 ,
    whatName() {
        return this.name ;
    } ,

    whatAge () {
        return this.age ;
    } ,

    WhatBirth () {
        return this.YearOfBirth ;

    }

} ;

console.log (cat.whatName()) ;
// output : Pipey
cat.name = "Nezzar" ;
console.log (cat.whatName()) ;

//console.log (cat.whatAge()) ; 

//console.log (cat.WhatBirth()) ;

//cat.age = 13 ;

console.log (cat.whatAge()) ;