class Song {
    contructor() {
        this.title = title; 
        this.author ;
        this.artist = this.artist ;

    }

    play () {
        console.log ("Song playing!") ;

    } 
    stop() {
        console.log ("Stopping") ;

    }

}

const mySong = new Song('Bohemian Rhapsody' , 'Queen') ;
mySong.play() ;
console.log (mySong.title) ;
