// A.1
const data1 = [2, 3, -5, -2, 4];
const res = [];

for (let i = 0; i < data1.length - 1; i++) {
  res.push(data1[i] * data1[i + 1]);
}

console.log(Math.max(...res));

// A.2
const data2 = [60, 40, 55, 75, 64];

// Truyền vào mảng và vị trí chẵn hoặc lẻ
// even = true là chẵn - even = false là lẻ
const sumArray = (array, even) => {
  return array
    .filter((number, index) => (index % 2 === 0) !== even)
    .reduce((previousValue, currentValue) => previousValue + currentValue);
};

const sumTeamOne = sumArray(data2, false);
const sumTeamTwo = sumArray(data2, true);
console.log([sumTeamOne, sumTeamTwo]);
