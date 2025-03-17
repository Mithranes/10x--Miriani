let kitchenHasGhost = true;  // There's a ghost in the kitchen
let livingRoomHasGhost = false; // The living room is clear

// Check if the house is safe (both rooms must be clear)
let isHouseSafe = !kitchenHasGhost && !livingRoomHasGhost;

// Print message based on safety status
if (isHouseSafe) {
    console.log("The house is safe No ghosts in the Kitchen or Living Room.");
} else {
    console.log("Danger! The house is NOT safe. Ghosts detected!");
}
