function promiseTimeout (ms) {
    console.log ('Do something') ;
    return new Promise ((resolve , reject) => {
        setTimeout (resolve , ms) ;

    }) ;

}

async function longRunningOperating () {
    console.log ("Start long running operating") ;
    return 42 ;

}

/*async function inthelongRun () {
    console.log ("Rerun no see") ;

}*/

async function run () { // funtion async tong me async kang nha
    //logic
    console.log ("Start!!") ;
    //try take of await and compare
    await promiseTimeout (2000) ;
    const response = await longRunningOperating () ;
    console.log (response) ;
    console.log ("Stop!!!") ;
    //const rerese = await inthelongRun() ;
    //console.log ("Hello world") ;

}

console.log ("Before") ;
run() ;
console.log ("After") ;