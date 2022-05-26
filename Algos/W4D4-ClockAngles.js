//clock angles!!!!

//given a number of minutes past midnight, determine
//the angle between the hour and minute hands at that point in time
//keep in mind that on an analog clock, the hour hand is
//not perfectly aligned with the number hour
//e.g. at 4:45, the hour hand is 3/4 the way between 4 and 5
//you can assume the minute hand moves perfectly from one minute
//to the next.
//BONUS: the parameter accepts the number of SECONDS after midnight

const clockAngles = (input) => {
    // degrees per measure
    const degPerMin = 360 / 60;
    const degperHour = 360 / 12;
    const degHourPerMin = 360 / 12 / 60;
    // console.log(degPerMin, degperHour, degHourPerMin);

    // useful mins and hours
    const minutes = input % 60;
    const hours = ((input - minutes) / 60) % 12;
    // console.log(hours,minutes);

    // calc positions
    const minHand = minutes * degPerMin;
    const hourHand = (hours * degperHour) + minutes * degHourPerMin; 
    console.log(hourHand, minHand);
    
    return hourHand-minHand < 180 ? hourHand-minHand : 360 - minHand - hourHand;
}

console.log(clockAngles(420));
console.log(clockAngles(180));
console.log(clockAngles(210));
console.log(clockAngles(588));
console.log(clockAngles(980));
console.log(clockAngles(361));