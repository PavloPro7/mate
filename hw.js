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

// function getMinAndMax(numbers) {
//   let min = numbers[0];
//   for (let num of numbers) {
//     if (num < min) {
//       min = num;
//     }
//   }
//   let max = numbers[0];
//   for (let num of numbers) {
//     if (num > max) {
//       max = num;
//     }
//   }
//   return `min = ${min}; max = ${max}`;
// }
// console.log(getMinAndMax([3, 54, 0b10, 10]))

// console.log(+true);
// console.log(+null);
// num = 53;
// console.log(num.toString(16)); //converting into hexadecimal count system.
// console.log(Number.MAX_VALUE); //1.7976931348623157e+308
// console.log(Number.MAX_SAFE_INTEGER); //9007199254740991
// console.log(typeof 342345234523452345234n) //bigint
// console.log(isFinite(Number.MAX_SAFE_INTEGER)) //true
// console.log(NaN === NaN); //false
// console.log(isNaN(NaN))

// function getGuestsCount(guestInput) {
//   const correctNumber = parseInt(guestInput);
//   if (isNaN(correctNumber)) {
//     return 'not a number';
//   }

//   return correctNumber;
// }

//console.log(Number(Math.random().toFixed(2)))



// function getRandomNumber(min, max) {
//   const result = [];
//   for (let i = 0; i < 10; i++) {
//     result.push(Math.floor(min + Math.random() * (max + 1 - min)));
// }
//   return result;
// }
// console.log(getRandomNumber(5, 9))


// const n = 7;
// let sum = 0;

// for (let i = 1; i <= n; i++) {
//   sum += i;
// }

// console.log(sum);

// const DAYS_IN_YEAR = 365;
// const MONTH_IN_YEAR = 12;

// for (let yearsAgo = 0; yearsAgo < 2026; yearsAgo++) {
//   let daysAgo = yearsAgo * DAYS_IN_YEAR;
//   let monthAgo = yearsAgo * MONTH_IN_YEAR;

//   console.log(`${yearsAgo} ${monthAgo} ${daysAgo}`);
// }
// let sum = 0;
// for (i = 0; i < 15; i++) {
//   sum = sum + i;
//   console.log(sum);
// }


// function calculateProfit(amount, percent, period) {
//   let expectedReturn = amount;
//   for (let i = 0; i < period; i++) {
//     expectedReturn = expectedReturn + expectedReturn * (percent / 100);
//   }
//   return +(expectedReturn - amount).toFixed(2);
// }


// console.log(calculateProfit(1000, 5.5, 7))

// function splitString(str) {
//    if (str.length === 0) {
//     return [];
//   }
//   let evenStrings = [];

//   for (let i = 0; i < str.length; i += 2) {
//     evenStrings.push(str.slice(i, i + 2));
//   }
//   if (evenStrings[evenStrings.length - 1].length < 2) {
//     evenStrings[evenStrings.length - 1] += '_'
//   }
//   return evenStrings;
// }
// console.log(splitString('auto '));



// function splitString(str) {

//     if (str.length % 2 !== 0) {
//     str += '_';
//   }

//   let evenStrings = [];
//   for (let i = 1; i < str.length; i += 2) {
//     evenStrings.push(str[i - 1] + str[i]);
//   }
//   return evenStrings;
// }
// console.log(splitString('work '))


// let i = 0;
// let j = 1;

// for (;;) {
//   if (!(j > -2)) {
//     break;
//   }

//   console.log(j, i);

//   i++;
//   j--;
// }
// console.log(i);

// for (let i = 0; i < 10; i++) {
//   if (i % 2 === 0) {
//     continue;
//   }
//   console.log(i);
// }

// let n = 4096;
// let numbersList = [];

// for (; n > 0; n = n / 2) {
//   if (n < 2) {
//     break;
//   }
//   if (!Number.isInteger(n)) {
//     break;
//   }
//   numbersList.push(n);
// }
// console.log(numbersList.length);

// let n = 2;
// let count = 0;
// for (; Number.isInteger(n);) {
//   n /= 2;
//   count++;
// }

// console.log(count - 1);

// let n = 2.1;
// let count = 0;
// // while (Number.isInteger(n)) {
// //   n /= 2;
// //   count++;
// // }
// do {
//   n /= 2;
//   count++;
// } while (Number.isInteger(n))
// console.log(count - 1);

let n = 256;
let count = 0;

while (true) {
  n /= 2;

  if (!Number.isInteger(n)) {
    break;
  }

  count++;
}

console.log(count);