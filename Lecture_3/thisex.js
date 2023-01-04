const cat = {
    name : "PiPey" ,
    age : 8 ,
    whatName() {
        return this.name ;
    } ,

    whatAge () {
        return this.age ;
    }

} ;

console.log (cat.whatName()) ;
// output : Pipey
cat.name = "Nezzar" ;
console.log (cat.whatName()) ;

console.log (cat.whatAge()) ; 