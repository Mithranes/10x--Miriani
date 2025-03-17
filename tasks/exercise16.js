// Declare variables
const ticketPrice = 20;
const ticketsSold = 500;
const concertCosts = 8000;

// Calculate total earnings from ticket sales
let totalEarnings = ticketPrice * ticketsSold;

// Calculate profit or loss
let profit = totalEarnings - concertCosts;

// Check if the band made a profit or not
if (profit > 0) {
    console.log(`Concert Profit: $${profit}. Great success!`);
} else {
    console.log(`Concert did not cover costs. Earnings: $${totalEarnings}, Costs: $${concertCosts}.`);
}