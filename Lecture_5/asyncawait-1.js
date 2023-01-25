function promiseTimeout (ms) {
    console.log ('Do something') ;
    return new Promise ((resolve , reject) => {
        setTimeout (resolve , ms) ;

    }) ;

}

async function run () { // funtion async tong me async kang nha
    //logic
    console.log ("Start!!") ;
    //try take of await and compare
    await promiseTimeout (2000) ;
    console.log ("Stop!!!") ;

}

console.log ("Before") ;
run() ;
console.log ("After") ;