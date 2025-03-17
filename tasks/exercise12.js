let speedLimit = 50;  // Speed limit is 50
let carSpeed = 30;    // Car starts at 30 speed

// Increase car's speed
carSpeed += 25;  // The car speeds up by 25

// Check if carSpeed exceeds the speedLimit
if (carSpeed > speedLimit) {
    console.log("Speed Warning: You are going too fast!");
} else {
    console.log("Speed is okay.");
}

// Print the final car speed
console.log(`Current Speed: ${carSpeed} km/ph`);
