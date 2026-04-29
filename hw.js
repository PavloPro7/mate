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

// let n = 256;
// let count = 0;

// while (true) {
//   n /= 2;

//   if (!Number.isInteger(n)) {
//     break;
//   }

//   count++;
// }

// console.log(count);

// let n = Math.random();

// while (n <= 0.9) {
//   console.log(n);
//   n = Math.random();
// }

// const title = 'Some thing - \'\x53\x6f\x6d\x65\x20\x74\x68\x69\x6e\x67\'';
// console.log(title.codePointAt(10));
// console.log(title[title.length - 1]); //g
// console.log(title.at(-1)); //g
// console.log(title.charAt(title.length - 1)); //g
// console.log(title)


// let str = '';
// for (let i = 1; i < 256; i++) {
//   str += String.fromCodePoint(i);
// }

// console.log(str);

// const name1 = 'їжак';
// const name2 = 'яблуко';
// console.log (
//   name1.localeCompare(name2) > 0
// )

// console.log('Ö' > 'Z'); //true
// //but
// console.log('Ö'.localeCompare('Z')); // -1

// let x = 3452345;
// // let count = 0;

// // do {
// //   x /= 10;
// //   count++;
// // } while (x >= 1)
// // console.log(count);

// console.log(
//   x.toString(),
//   '' + x, //concatenation
//   `${x}`, //interpolation
//   String(x).length.toString(),
// )

// function isSpecialNumber(n) {
//   const specialNumber = '012345';
//   const numberString = String(n);
//   let string = '';

//   for (let i = 0; i < numberString.length;) {

//     string += numberString[i];
//     if (!specialNumber.includes(numberString[i])) {
//       string += ' ';
//       break;
//     }
//     i++;
//   }
//   if (string == numberString) {
//     return 'Special!!'
//   }
//   return 'NOT!!'
// }
// console.log(isSpecialNumber(126));

// function isTidy(n) {
//   // write code here
//   const numberString = String(n);
//   let numberCheck = '';

//   for (let i = 1; i <= numberString.length; i++) {
//     if (numberString[i - 1] <= numberString[i] || numberString[i] === undefined) {
//       numberCheck += numberString[i - 1]
//     }
    
//   }
  
//     if (numberString == numberCheck) {
//       return true;
//     }
//     return false;
// }

// console.log(isTidy(124444456));



// function isJumping(n) {

//   if (String(n).length === 1) {
//     return 'JUMPING';
//   }
//   // write code here
//   let previous = 0;
//   for (let digit of String(n)) {
//     if ((previous - digit) !== 1 && (previous - digit) !== -1 && typeof previous !== 'number'){
//       return 'NOT JUMPING';
//     }
//     previous = digit;
//   }
//   return 'JUMPING';
// }

// function isJumping(n) {
//   const str = String(n);

//   for (let i = 1; i < str.length; i++) {
//     const diff = str[i] - str[i - 1];

//     if (diff !== 1 && diff !== -1) {
//       return 'NOT JUMPING';
//     }
//   }

//   return 'JUMPING';
// }
// console.log(isJumping(3))
// console.log(typeof digit) //'number'

// let string = '4 30 8 ';
// let digit = 0;

// console.log(
//   string.repeat(4), '\n', 
//   string.padStart(20), '\n', //              4 30 8
//   string.padEnd(20, '**** '), '\n',
//   string.trim(), '\n', //trimStart, trimEnd 
//   string.replaceAll(' ', ''), '\n' //.replace(' ', '') - substitute only one

// );

// function isLetter(char) {
//   return char.toLowerCase() !== char.toUpperCase(); //check is there inputed char as letter
// }

function makeAbbr(words) {
  // write code here
  let abbr = words[0].toUpperCase();

  for (let i = 1; i < words.length; i++) {
    if (words[i - 1] === ' ') {
      abbr += words[i].toUpperCase();
    }
  }
  
  return abbr;
}