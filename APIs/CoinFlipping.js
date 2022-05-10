function fiveHeads() {
    return new Promise((resolve, reject) => {
        let headsCount = 0;
        let flipCount = 0;
        while(flipCount<101){
            flipCount++
            if(Math.random() > 0.5) {
                headsCount++
                if(headsCount === 5){
                    resolve(`Just hit 5! Only had to flip ${flipCount} times!`);
                }
            }
        }
        reject("Flipped 100 times without 5 Heads! Wowee Zowie!");
    });
}
fiveHeads()
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
console.log("When does this run now?");
