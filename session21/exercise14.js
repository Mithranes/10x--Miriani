// Declare Boolean Variables for Clues
let hasTreasureMap = true;
let foundAncientKey = false;
let solvedRiddleScroll = true;
let hasCompass = true;
let isFullMoon = false;

// Determine if Alex can find the treasure
let canFindTreasure = hasTreasureMap && (foundAncientKey || (solvedRiddleScroll && hasCompass));


if (canFindTreasure) {
    console.log("Success! Alex can find the legendary treasure!");
} else {
    console.log("Alas, Alex is missing crucial clues and cannot find the treasure yet.");
}
