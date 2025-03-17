let fireballPower = 80;
let frostPower = 70;
let lightningBoltPower = 85;


if (fireballPower > lightningBoltPower && fireballPower > frostPower) {
    console.log(`🔥Fireball is the strongest spell with a power of ${fireballPower}.`);
} else if (lightningBoltPower > fireballPower && lightningBoltPower > frostPower) {
    console.log(`⚡Lightning Bolt is the strongest spell with a power of ${lightningBoltPower}.`);
} else if (frostPower > fireballPower && frostPower > lightningBoltPower) {
    console.log(`❄️Frost Nova is the strongest spell with a power of ${frostPower}.`);
} else {
    console.log(`Some spells have equal power. There is no single strongest spell.`);
}

// Checking if they are equal
if (fireballPower === lightningBoltPower) {
    console.log(`🔥 ⚡Fireball and Lightning Bolt have the same power: ${fireballPower}.`);
} 
if (fireballPower === frostPower) {
    console.log(`🔥 ❄️Fireball and Frost Nova have the same power: ${fireballPower}.`);
} 
if (lightningBoltPower === frostPower) {
    console.log(`⚡ ❄️Lightning Bolt and Frost Nova have the same power: ${lightningBoltPower}.`);
}

