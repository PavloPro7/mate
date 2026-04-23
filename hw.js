// function isWerewolf(target){
//     let direct = '';
//     let indirect = '';

//     for (let ch of target) {
//         if (true) {
//             direct += ch;
//             indirect = ch + indirect;
//         }
//     }
//     return direct === indirect;
// } 

// console.log(isWerewolf('level'));
// function toAllTypes(num) {
//     return `binary: ${num.toString(2)}, 
// octal: ${num.toString(8)},
// decimal: ${num.toString(10)}, 
// hexadecimal: ${num.toString(16)}`
// }

// console.log(toAllTypes(20));

// const inventory = ['sword', 'shield', 'potion'];

// for (const item of inventory) {
//   console.log("You have a " + item);
// }

// // 1. Start: let i = 0
// // 2. Condition: run as long as i < 5
// // 3. Step: increase i by 1 after each loop (i++)
// for (let i = 0; i < 5; i++) {
//   console.log(i); // Prints 0, 1, 2, 3, 4
// }

// let count = 0;

// while (count < 3) {
//   console.log("Count is: " + count);
//   count++; // CRITICAL: Always change the condition inside, or it runs forever!
// }

// function getSuccessRate(statistic) {
//   // write code here
//   let sum = statistic.length;
//   let succeed = 0;
//   for (let stat of statistic) {
//     if (stat == 1) {
//       succeed++;
//     } 
//   }
//   return (sum !== 0) ? 100 * succeed / sum : 0;
// }
// console.log(getSuccessRate('110111000001'));

// function makeDecision(fuelRemaining, distance, fuelConsumption) {
//   // write code here
//   if (fuelRemaining < 0 || distance <= 0 || fuelConsumption <= 0) {
//     return 'please, enter the valid data';
//   }

//   let drivingRange = fuelRemaining / fuelConsumption;
//   return ((drivingRange * 100) >= distance) ? 'reach gas station by themselves' : 'ask for help';

// }

// console.log(makeDecision(-1, -5, 1000));


// let num = 3.53796;
// console.log(+num.toFixed(2));
// console.log(num.toPrecision(4));


// console.log(Math.round(num * 100) / 100);\

// function countNetworking(quarantineLength, frequency) {
//   // write code here
//   const monthInYear = 11;
//   let result = 0;
//   for (let i = quarantineLength; i <= monthInYear; i++) {
//     result++;
//   }
//   return Math.ceil(result / frequency);
// }
// console.log(countNetworking(3, 4));

// function convertCurrency(amount, exchangeRate, currencyName) {
//   const x = Math.round((amount * exchangeRate) * 100) / 100;
//   return (amount >= 0 && exchangeRate > 0) ? `Give them ${x} ${currencyName}(s)` : 'Enter valid data';
// }
// console.log(convertCurrency(100, 0, 'euro'));

// function getPlan(startProduction, numberOfMonths, percent) {
//   const goals = [];
//   for (let i = 0; i < numberOfMonths; i++) {
//     startProduction = (startProduction * percent / 100) + startProduction;
//     goals.push(Math.floor(startProduction));

//   }
//   return goals;
// }
// console.log(getPlan(1000, 6, 20));

function getMinAndMax(numbers) {
  let min = numbers[0];
  for (let num of numbers) {
    if (num < min) {
      min = num;
    }
  }
  let max = numbers[0];
  for (let num of numbers) {
    if (num > max) {
      max = num;
    }
  }
  return `min = ${min}; max = ${max}`;
}
console.log(getMinAndMax([3, 54, 0b10, 10]))