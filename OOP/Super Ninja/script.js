class Ninja{
    constructor(name , health){
        this.name = name;
        this.health = 100;
        this.speed = 10;
        this.strength = 10;
    }

    // Method
    sayName(){
        console.log(`Name : ${this.name}`);
    }

    showStats(){
        console.log(`Name:${this.name} strength: ${this.strength} speed: ${this.speed} health:${this.health} `)
    }

    drinkShake(){
        this.health += 10;
    }
}
const ninja1 = new Ninja("Yasser");  
ninja1.sayName();  
ninja1.showStats();
ninja1.drinkShake();
ninja1.showStats();

class Sensei extends Ninja{
    constructor(name){
        super(name);
        this.health = 200 ;
        this.wisdom = 10 ;
    }

    speakWisdom(){
        this.drinkShake();
        console.log("What one programmer can do in one month, two programmers can do in two months.")
    }
// override
    showStats(){
        console.log(`Name: ${this.name} Health : ${this.health} speed:${this.speed} strength:${this.strength} Wisdom: ${this.wisdom}`)
    }
}
const sensei1 = new Sensei ("Master Splinter");
sensei1.speakWisdom();
sensei1.showStats();

