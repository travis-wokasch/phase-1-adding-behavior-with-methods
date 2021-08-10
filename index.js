class Cat{
    constructor(name){
        this.name = name
    }
    speak() {
        return `${this.name} says meow!`
    }
}

class Dog {
    constructor(name){
        this.name = name
    }
    speak() {
        return `${this.name} says woof!`
    }
}

class Bird {
    constructor(name, gender){
        this.name = name
        this.gender = gender
    }

    speak() {
       const birdCall = {
           male: `It's me! ${this.name}, the parrot!`,
           female: `${this.name} says squawk!`
       }
       const gender = this.gender
       return birdCall.gender
       
        // return this.gender === 'male' 
        // ? `It's me! ${this.name}, the parrot!`
        // : `${this.name} says squawk!`
    }
}