'use strict';
const t = true;

while (t){
    let min = 0;
    let max = 8;
    let att = 3;
    let count = 0;
    let maxPrize = 100;

    let want = confirm('Do you want to play a game?');

    if (!want) {
        alert('You did not become a billionaire, but can.');
        break
    } else {
        let prize = maxPrize;

        let res = Math.floor(Math.random() * (max - min + 1)) + min;

        while (att !== 0) {
            let num = +prompt(`Choose a roulette pocket number from ${min} to ${max}
Attempts left: ${att}
Total prize: ${count}$
Possible prize on current attempt: ${prize}$`);

            if(num === res) {
                count += prize;

                let cont = confirm(`Congratulation, you won! Your prize is: ${count}$. Do you want to continue?`)
                if(!cont) {
                    alert(`Thank you for your participation. Your prize is: ${count}$`);
                    break;
                } else {
                    max += 4;
                    maxPrize *= 2;
                    att = 3;

                    prize = maxPrize;

                    res = Math.floor(Math.random() * (max - min + 1)) + min;
                }
            } else {
                att--;
                prize /= 2;
            }
        }
        if(att === 0) {
            alert(`Thank you for your participation. Your prize is: ${count}$`);
        }
    }
}