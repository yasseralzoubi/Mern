class Ninja{
    constructor(name , health){
        this.name = name;
        this.health = 100;
        this.speed = 3 ;
        this.strength = 3 ;
    }

    // Method
    sayName(){
        console.log(`Name : ${this.name}`);
    }

    showStats(){
        console.log(`Name:${this.name} strength: ${this.strength} speed: ${this.speed} health:${this.health} `)
    }

    drinkSake(){
        this.health += 10;
    }
}
const ninja1 = new Ninja("Yasser");  
ninja1.sayName();  
ninja1.showStats();
ninja1.drinkSake();
ninja1.showStats();

