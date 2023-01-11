function cirticalCode () {
    throw "Throwing an exception" ;

}

function logError (theException) {
    console.log (theException) ;

}

console.log ("\n************ try.Catch***************\n") ;

try {
    cirticalCode() ;

} catch (ex) {
    console.log ("Got an error") ;
    logError (ex) ;

}

console.log ("\n************ Throwing in try..Catch***************\n") ;

try {
    throw "An Exception that is thrown every time" 

} catch (ex) {
    console.log ("Got an error ") ;
    logError (ex) ;

}

console.log ("\n************ Try..Catch..Finally***************\n") ;

try {
    cirticalCode() ;

}catch(ex) {
    console.log ("Got an error") ;
    logError(ex) ;

} finally {
    console.log ("Code that always will run") ;

}

function hello() {
    console.log ("\n************ Throwing in Exceptions***************\n")

}