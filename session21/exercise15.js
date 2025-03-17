// Defining Prices
const conePrice = 4.00;
const sundaePrice = 8.00;

// Store Daily Sales Data
let conesSoldToday = 250;
let sundaesSoldToday = 120;

// Calculate Total Earnings Before Discount
let coneEarnings = conePrice * conesSoldToday;
let sundaeEarnings = sundaePrice * sundaesSoldToday;
let totalEarningsBeforeDiscount = coneEarnings + sundaeEarnings;

// Implement Volume Discount
let discountAmount = 0;
let finalTotalEarnings = totalEarningsBeforeDiscount;

// Check if discount applies
if (totalEarningsBeforeDiscount >= 1000) {
    discountAmount = totalEarningsBeforeDiscount * 0.05; // 5% discount
    finalTotalEarnings = totalEarningsBeforeDiscount * 0.95; // Apply discount
}

// Log the Results
console.log(`Total Earnings Before Discount: $${totalEarningsBeforeDiscount.toFixed(2)}`);
console.log(`Discount Applied: $${discountAmount.toFixed(2)}`);
console.log(`Final Total Daily Earnings: $${finalTotalEarnings.toFixed(2)}`);
console.log(`Volume Discount Applied: ${discountAmount > 0 ? "Yes" : "No"}`);
