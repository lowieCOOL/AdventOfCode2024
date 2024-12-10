const fs = require('fs');
const input = fs.readFileSync('./day1/input').toString();
const [left, right] = [[], []];
let similarity = 0;

for (const line of input.split('\n')) {
    if (line.trim() === '') continue;
    const [leftValue, rightValue] = line.trim().split(/\s+/);
    left.push(parseInt(leftValue));
    right.push(parseInt(rightValue));
}
left.sort((a, b) => a - b);
right.sort((a, b) => a - b);

let numberLeft = 0;
let numberRight = 0;
let k = 0;
left: for (let i = 0; i < left.length; i++) {
    if (left[i] == numberLeft) continue;
    numberLeft = left[i];
    if (right[k] > numberLeft) continue;
    occurenceLeft = 1;
    occurenceRight = 0;
    while (i < left.length) {
        i++;
        if (left[i] == numberLeft) occurenceLeft++;
        if (left[i] != numberLeft) {
            i--;
            break;
        }
    }
    while (k < right.length) {
        numberRight = right[k];
        k++;
        if (numberRight == numberLeft) occurenceRight++;
        if (numberRight > numberLeft) {
            k--;
            break;
        }
    }
    similarity += numberLeft * occurenceLeft * occurenceRight;
}

console.log(similarity);
