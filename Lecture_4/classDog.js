class Dog {
    constructor(name) {
        this._name = name ;

    }

    introduce() {
        console.log ("The Dog name is " + this._name + " !") ;

    }

    static bark () {
        console.log ("Woof") ;

    }

    static Hungry() {
        console.log ("I'm Hungry ") ;

    }

}
// method use to object not use class !!!!!!!!!

const myDog = new Dog ("Buster") ;
myDog.introduce() ;
// myDog.bark() ;

const myDog2 = new Dog ("Pluto") ;
myDog2.introduce()

Dog.Hungry() ;

Dog.bark() ;