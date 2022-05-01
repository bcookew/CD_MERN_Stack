Number.prototype.isPrime = function(){ //took 39.035s to run
    for (let i = 2; i < this; i++) {
        if (this % i === 0) {
            return false;
        }
    }
    return true;
}
Number.prototype.isPrimeVer2 = function(){ //took 39.035s to run
    for (let i = 2; i <= Math.sqrt(this); i++) {
        if (this % i === 0) {
            return false;
        }
    }
    return true;
}

const { performance } = require('perf_hooks');
let start = performance.now();
let primeCount = 0;
let num = 2; // for math reasons, 1 is considered prime
while (primeCount < 1e6) {
    if (num.isPrimeVer2()) {
        primeCount++;
    }
    num++;
}
console.log(`The 10,000th prime number is ${num - 1}`);
console.log(`This took ${performance.now() - start} milliseconds to run`);
// 4.7 mins to calc 1e6 prime


// recursive
function rFib( n ) {
    start = performance.now();
    if ( n < 2 ) {
        return n;
    }
        return rFib( n-1 ) + rFib( n-2 );
    }
// console.log(rFib(20), performance.now() - start);

// iterative
function iFib( n ) {
    start = performance.now();
    const vals = [ 0, 1 ];
    while(vals.length-1 < n) {
    let len = vals.length;
    vals.push( vals[len-1] + vals[len-2] );
    }
    return vals[n];
}
// console.log(iFib(20), performance.now() - start);
    
const story = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident culpa nihil repellat nulla laboriosam maxime, quia aliquam ipsam reprehenderit delectus reiciendis molestias assumenda aut fugit tempore laudantium tempora aspernatur? Repellendus consequatur expedita doloribus soluta cupiditate quae fugit! Aliquid, repellat animi, illum molestias maiores, laboriosam vero impedit iusto mollitia optio labore asperiores!";
const reversed1 = (story) => {
    start = performance.now();
    story.split("").reverse().join("");
    console.log(performance.now() - start);
}
const reversed2 = (story) => {
    start = performance.now();
    let newString;
    for(let i = 0; i < story.length; i++) {
        newString += story[story.length-1-i]
    }
    console.log(performance.now() - start);
    return newString;
}

// reversed1(story)
// reversed2(story)