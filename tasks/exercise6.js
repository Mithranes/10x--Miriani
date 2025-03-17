let spaceCapacity = 5000
let spaceFuel = 3500

let fuelPercentage = (spaceCapacity / spaceFuel) * 100;

if (fuelPercentage > 80) {
    console.log(`Fuel level at ${fuelPercentage.toFixed(2)} Launch Approved to mars ELON!`)
} else {
    console.log(`Fuel level at ${fuelPercentage.toFixed(2)} Launch disapproved, We'll get them next time elon`)
}