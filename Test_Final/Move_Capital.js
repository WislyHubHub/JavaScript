function capToFront (str) {
    let fontlow = "" ;
    let fontup = "" ;

    for (let i = 0 ; i < str.length ; i++ ) {
        if (str[i] == str[i].toLowerCase()) {
            let fontlow = String.charAt(i) ;
            fontlow = str ;
            return fontlow[i] ;

        }

    }
    
 
}

console.log (capToFront("hApPy")) ;
console.log (capToFront("moveMENT")) ;
console.log (capToFront("shOrtCAKE")) ;