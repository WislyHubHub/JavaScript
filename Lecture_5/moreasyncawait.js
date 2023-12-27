function who () {
    return new Promise ((resolve) => {
        setTimeout (() => {
            resolve ("")

        } , 200) ;

    }) ;

}

function what () {
    return new Promise ((resolve) => {
        setTimeout (() => {
            resolve ("Lurks") ;

        } , 300) ;

    }) ;

}

function where () {
    return new Promise ((resolve) => {
        setTimeout (() => {
            resolve ("In the shadows") ;

        } , 500) ;

    }) ;

}

async function Message() {
    const a = await who() ;
    const b = what () ;
    const c = await where () ;
    console.log (`${a} ${b} ${c}`) ;

}

console.log ('We are looking for : ') ;

Message() ; // <--- after 1 second

console.log ('Hello') ;