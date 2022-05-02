class Card {
    constructor(name, cost) {
        this.name = name;
        this.cost = cost;
    }
}
class Unit extends Card {
    constructor(name, cost, power, resilience) {
        super(name, cost);
        this.power = power;
        this.resilience = resilience;
    }
    attack(target) {
        target.resilience -= this.power;
        console.log(target.name, target.resilience);
    }
}
class Effect extends Card {
    constructor(name, cost, text, stat, magnitude) {
        super(name, cost);
        this.text = text;
        this.stat = stat;
        this.magnitude = magnitude;
    }
    play(target) {
        target[this.stat] += this.magnitude;
        console.log(this.text);
        console.log(target[this.stat]);
    }
}

let rbn = new Unit("Red Belt Ninja", 3, 3, 4);
let ha = new Effect("Hard Algorithm", 2, "increase target resilience by 3", "resilience", 3);
ha.play(rbn);
let bbn = new Unit("Black Belt Ninja", 4, 5, 4);
let upr = new Effect("Unhandled Promise Rejection", 1, "reduce target resilience by 2", "resilience", -2);
upr.play(rbn);
let pp = new Effect("Pair Programming", 3, "increase target power by 2", "power", 2);
pp.play(rbn);
rbn.attack(bbn);
