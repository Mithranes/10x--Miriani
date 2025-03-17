let healthPotion = 10
let manaPotion = 15


let totalCost = (3 * healthPotion) + (2 * manaPotion);

if (totalCost > 50) {
    let discount = totalCost * 0.1 // 10%
    totalCost -= discount;
    console.log(`A discount of ${discount} gold coins was applied.`)
}

console.log(`Total cost after discount (if any): ${totalCost} gold coins`)