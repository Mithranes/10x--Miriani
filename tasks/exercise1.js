// Variables
let gandalfPower = 85;
let dumbledorePower = 90;

// Boosting gandalf's power
gandalfPower += 10;
dumbledorePower -= 5;

console.log(`Gamdalf's magic power: ${gandalfPower}`);
console.log(`Dumbledore's magic power: ${dumbledorePower}`);

if ( gandalfPower > dumbledorePower) {
    console.log(`Gandalf is stronger!`);
} else if ( gandalfPower < dumbledorePower) {
    console.log(`Dumbledore is stronger!`);
} else {
    console.log(`They are equally powerful!`)
}