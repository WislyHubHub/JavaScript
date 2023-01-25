function yayOrNay () {
    return new Promise ((resolve , reject) => {
        const val = Math.round (Math.random() * 1) ;
        // 0 or 1 , at random
        val ? resolve ("Lucky!!") : reject ("Nope5") ;

    }) ;

}

async function Message() {
    try {
        const Message = await yayOrNay () ;
        console.log (Message) ;

    }catch (error) {
        console.log (error) ;

    }

}

Message() ;
Message() ;
Message() ;
Message() ;
Message() ;
Message() ;
Message() ;
Message() ;
Message() ;
Message() ;
Message() ;
Message() ;
Message() ;
Message() ;
Message() ;