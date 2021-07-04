'use strict';

let amount = +prompt('Initial amount:');
let years = +prompt('Number of years:');
let percent = +prompt('Percentage of year:');

if (isNaN(amount) || isNaN(years) || isNaN(percent) ||
    amount < 1000 || years < 1 || percent > 100 ||
    (years ^ 0) !== years) {
    alert('Invalid input data');

} else {
    let totalAmount = amount;
    for(let i = 0; i < years; i++) {
        totalAmount += totalAmount / 100 * percent;
    }
    alert(
`Initial amount: ${amount}
Number of years: ${years}
Percentage of year: ${percent}
    
Total profit: ${(totalAmount - amount).toFixed(2)}
Total amount: ${totalAmount.toFixed(2)}`)
}