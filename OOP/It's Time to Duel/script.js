class Unit {  
    constructor(name, cost, power, resilience) {  
        this.name = name;  
        this.cost = cost;  
        this.power = power;  
        this.resilience = resilience;  
    }  

    // Method to attack another unit  
    attack(target) {  
        console.log(`${this.name} attacks ${target.name} for ${this.power} power!`);  
        target.takeDamage(this.power);  
    }  

    // Method to take damage  
    takeDamage(amount) {  
        this.resilience -= amount;  
        console.log(`${this.name} takes ${amount} damage! New resilience: ${this.resilience}`);  
    }  

    // Show stats  
    showStats() {  
        console.log(`Name: ${this.name}, Cost: ${this.cost}, Power: ${this.power}, Resilience: ${this.resilience}`);  
    }  
}  

class Effect {  
    constructor(name, cost, text, stat, magnitude) {  
        this.name = name;  
        this.cost = cost;  
        this.text = text;  
        this.stat = stat;  
        this.magnitude = magnitude;  
    }  

    // Apply the effect to a unit  
    applyEffect(target) {  
        if (this.stat === "resilience") {  
            target.resilience += this.magnitude;  
            console.log(`${this.name} applied to ${target.name}: ${this.text}. New resilience: ${target.resilience}`);  
        } else if (this.stat === "power") {  
            target.power += this.magnitude;  
            console.log(`${this.name} applied to ${target.name}: ${this.text}. New power: ${target.power}`);  
        }  
    }  
}  

// Scenario Simulation  
console.log("Turn 1:");  
const redBeltNinja = new Unit("Red Belt Ninja", 3, 3, 4);  
redBeltNinja.showStats();  

const hardAlgorithm = new Effect("Hard Algorithm", 2, "increase target's resilience by 3", "resilience", 3);  
hardAlgorithm.applyEffect(redBeltNinja);  

console.log("\nTurn 2:");  
const blackBeltNinja = new Unit("Black Belt Ninja", 4, 5, 4);  
blackBeltNinja.showStats();  

const unhandledPromiseRejection = new Effect("Unhandled Promise Rejection", 1, "reduce target's resilience by 2", "resilience", -2);  
unhandledPromiseRejection.applyEffect(redBeltNinja);  

console.log("\nTurn 3:");  
const pairProgramming = new Effect("Pair Programming", 3, "increase target's power by 2", "power", 2);  
pairProgramming.applyEffect(redBeltNinja);  

// Final attack  
redBeltNinja.attack(blackBeltNinja);