function reverseString (value) {
    let reversedValue = "" ;

    value.split("").forEach((char) => {
        reversedValue = char + reversedValue ;

    });

    return reversedValue ;

}

console.log (reverseString ("Reverse Me")) ;

function relative (str) {
    var reversedValue = "" ;

    str.split("").forEach((char) => {
        reversedValue = char + reversedValue ;

    });

    return reversedValue;

}

console.log (reverseString ("RelationShip Me")) ;