const fs = require('fs');
const input = fs.readFileSync('./day1/input').toString();
const [left, right] = [[], []];
let distance = 0;

for (const line of input.split('\n')) {
    if (line.trim() === '') continue;
    const [leftValue, rightValue] = line.trim().split(/\s+/);
    left.push(parseInt(leftValue));
    right.push(parseInt(rightValue));
}
left.sort((a, b) => a - b);
right.sort((a, b) => a - b);
for (const i in left) {
    distance += Math.abs(left[i] - right[i]);
}
console.log(distance);
