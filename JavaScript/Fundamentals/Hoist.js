// Practice reading JavaScript the same way as the interpreter reads it.
// Rewrite the code the way it would be seen by the interpreter and predict the output. An example is shown here:

// GIVEN
console.log(example);
var example = "I'm the example!";
// AFTER HOISTING BY THE INTERPRETER
var example;
console.log(example); // logs undefined
example = "I'm the example!";

// ====================== #1
console.log("\n---------- #1 ----------");
// GIVEN
// console.log(hello); // logs undefined
// var hello = 'world';

// AFTER HOISTING BY THE INTERPRETER
var hello;
console.log(hello);
hello = 'world';

// ====================== #2
console.log("\n---------- #2 ----------");
// GIVEN
var needle = 'haystack'; // declares global variable
test(); // Will run normally
function test(){
    var needle = 'magnet'; // declares new local variable
    console.log(needle); //logs magnet
}

// AFTER HOISTING BY THE INTERPRETER
var needle;
needle = 'haystack';
function test() {
    var needle;
    needle = 'magnet';
    console.log(needle);
}
test();


// ====================== #3
console.log("\n---------- #3 ----------");
// GIVEN
var brendan = 'super cool';
function print() {
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan); // logs 'super cool'. print was never called so the global wasn't updated.
// AFTER HOISTING BY THE INTERPRETER
// this one is the same

// ====================== #4
console.log("\n---------- #4 ----------");
// GIVEN
var food = 'chicken'; // global food assigned chicken
console.log(food); // logs chicken
eat();
function eat() {
    food = 'half-chicken'
    console.log(food); // logs 'half-chicken'
    var food = 'gone'
}
// AFTER HOISTING BY THE INTERPRETER
var food = 'chicken';
function eat() {
    var food;
    food = 'half-chicken';
    console.log(food);
    food = 'gone'
}
console.log(food);
eat();

// ====================== #5
console.log("\n---------- #5 ----------");
// GIVEN
// mean(); // ref before assignment | actually a TypeError
// console.log(food); // ref before assignment
// var mean = function() {
//     food = "chicken";
//     console.log(food);
//     var food = "fish";
//     console.log(food);
// }
// console.log(food);

// AFTER HOISTING BY THE INTERPRETER
// var mean;
// mean();
// console.log(food);
// mean = function () {
//     var food;
//     food = 'chicken';
//     console.log(food);
//     food = 'fish';
//     console.log(food);
// }
// console.log(food);

// ====================== #6
console.log("\n---------- #6 ----------");
// GIVEN
console.log(genre); //undefined
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre); // log rock
    var genre = "r&b";
    console.log(genre); // log r&b
}
console.log(genre); // disco

// AFTER HOISTING BY THE INTERPRETER
var genre;
console.log(genre);
function rewind() {
    var genre;
    genre = 'rock';
    console.log(genre);
    genre = 'r&b';
    console.log(genre);
}
console.log(genre);

// ====================== #7
console.log("\n---------- #7 ----------");
// GIVEN
dojo = "san jose";
console.log(dojo); // log san jose
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo); // log seattle
    var dojo = "burbank";
    console.log(dojo); // log burbank
}
console.log(dojo); // log san jose

// AFTER HOISTING BY THE INTERPRETER
var dojo;
dojo = 'san jose';
function learn() {
    var dojo;
    dojo = 'seattle';
    console.log(dojo);
    dojo = 'burbank';
    console.log(dojo);
}
console.log(dojo);
learn();
console.log(dojo);

// ====================== #8
console.log("\n---------- #8 ----------");
// GIVEN
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now"; // cant reassign a declared const
    }
    return dojo;
}

// AFTER HOISTING BY THE INTERPRETER
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now"; // cant reassign a declared const
    }
    return dojo;
}
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));

// This one is interesting. A variable can be assigned as an object with const and the variable itself can't be reassigned but that doesn't mean properties can't be modified.