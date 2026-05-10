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
// console.log(+4);
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

// function makeAbbr(words) {
//   // write code here
//   let abbr = words[0].toUpperCase();

//   for (let i = 1; i < words.length; i++) {
//     if (words[i - 1] === ' ') {
//       abbr += words[i].toUpperCase();
//     }
//   }
  
//   return abbr;
// }

// console.log('\x20/'); // ' ' - spacing

// let label = 'Mate academy'
// console.log(label.toLowerCase().includes('mate')); //true
// console.log(label.startsWith('mate')); //false
// console.log(label.endsWith('emy')); //true
// console.log(label.indexOf('e', 2)); //3
// console.log(label.indexOf('a', 4)); //5
// console.log(label.lastIndexOf('academy')); //5
// console.log('word'.slice(-3, -1));

// let number = 'My number is 2565930';
// console.log(`Your number is ${number.slice(13)}`);
// console.log('robot'.slice(3), 'robot'.slice(0, 3));

// function scrollingText(word) {
//   let wordUpperCase = word.toUpperCase();
//   let result = [];

//   for (let i = 0; i < wordUpperCase.length; i++) {
//     result.push(wordUpperCase);
//     wordUpperCase = wordUpperCase.slice(1) + wordUpperCase.slice(0, 1);
    
//   }
//   return result;
// }

// function scrollingText(word) {
//   const result = [];

//   for (let i = 0; i < word.length; i++) {
//     const part = word.slice(i) + word.slice(0, i);

//     result.push(part.toUpperCase());
//   }

//   return result;
// }


// console.log(scrollingText('fork'));

// const string = 'banana';

// for (let ch of string) {
//   console.log(ch);
// }





// //////              Functions               ///////

// function sum(a, b = 2) {
//   console.log(a, b);
// }
// sum(2);


// //first way of asignment function to variable.
// let operation = function(a = 0, b = 0, ...args) {
//   console.log(args);
//   return a + b;
// }

// //second way of asignment function to variable.
// let operation2 = (a = 0, b = 0, ...args) => {
//   console.log(args);
//   return a + b;
// }

// //third way of asignment function to variable.
// let operation3 = (a = 0, b = 0, ...args) => a + b;

// let operation4 = a => a + 10;

// console.log(
//   operation(1, 2),
//   operation2(1, 2),
//   operation3(1, 2),
//   operation4(1),
// );

// let square = function(a) {
//   return a * a;
// };
// let square2 = a => a * a;

// let getString = () => {
//   const jobTitle = 'I am a programmer';
//   return jobTitle;
// }
// console.log(getString())



///         Switch Case           ///




// if (count === 1) {
//   console.log('One');
// } else if (count === 2) {
//   console.log('Two');
// } else {
//   console.log('Many');
// }

// function getName(count) {
//   switch (count) {
//   case 10:
//   case 20:
//     return 'One or Two';
//   default:
//     return 'Many';
// }
// }
// console.log(getName(30));

// function findCalculationType(a, b, res) {
//   switch (res) {
//     case a + b:
//       return 'addition';
//     case a - b:
//       return 'subtraction';
//     case a / b:
//       return 'division';
//     case a * b:
//       return 'multiplication';
//   }

// }

// function getName(count) {

//   switch (true) {
//     case count < 2:
//       return 'One';
    
//     default:
//       return 'Many';
//   }

// }
// console.log(getName(1))

// console.log(5 === 5 > 4)


///       Type Conversion      ///

//false, '', 0, NaN, 0n, 4, undefined
// [], () => {}, {} - true

// const value = 0;

// if (value) {
//   console.log(
//     +Boolean(value), +!!value
//   )
// }

///       AND    //    OR      ///

// const or = (a, b) => a ? a : b;

// console.log(
//   or(3, 3),
//   or(3, 4),
//   or(4, 3),
//   or(4, 4),
// );

// const and = (a, b) => !a ? a : b;

// console.log(
//   and(3, 3),
//   and(3, 4),
//   and(4, 3),
//   and(4, 4),
// )

// console.log(
//   0 || (null && 13) || false,
// );

// const name = '' || 'No name';

// name && console.log(name);

// function canTheyBook(adultsCount = 0, childrenCount = 0, babiesCount = 0) {

//   const withoutBabiesCapability = !babiesCount && (adultsCount + childrenCount <= 8);
//   const withBabiesCapability = (babiesCount > 0) && (babiesCount <= adultsCount) && (adultsCount + childrenCount + babiesCount <= 9);
//   const hasEnoughAdults = (childrenCount + babiesCount <= 2 * adultsCount) && adultsCount > 0;


// return (withoutBabiesCapability || withBabiesCapability) && hasEnoughAdults;
//   // return (((!babiesCount && adultsCount + childrenCount <= 8) || (babiesCount > 0 && (adultsCount + childrenCount + babiesCount <= 9))) && childrenCount + babiesCount <= 2 * adultsCount && adultsCount > 0 && babiesCount <= adultsCount)
// }

// function recommendRoom(adultsCount = 0, childrenCount = 0, babiesCount = 0) {

//   const guestsQuantity = adultsCount + childrenCount + babiesCount;

//   switch (true) {
//     case guestsQuantity <= 4:
//       return 'small room';
    
//     case babiesCount && guestsQuantity === 5:
//       return 'small room + extra bed';

//     case guestsQuantity <= 8:
//       return 'big room';

//     default:
//       return 'big room + extra bed';

//   }
// }


///         Objects         ///

// const firstName1 = 'Misha';
// const lastName1 = 'Markus';
// const age1 = 39;

// const firstName2 = 'Masha';
// const lastName2 = 'Kushner';
// const age2 = 45;

// printInfo(firstName1, lastName1, age1);
// printInfo(firstName1, lastName2, age2);

// function printInfo(firstName, lastName, age) {
//   console.log(`User ${firstName} ${lastName} is ${age}`);
// }


// const user1 = {
//   firstName: 'Misha',
//   lastName: 'Hrynko',
//   age: 39,
// };

// const user2 = {
//   firstName: 'Masha',
//   lastName: 'Kushner',
//   age: 45,
// };

// printUserInfo(user1);
// printUserInfo(user2);

// function printUserInfo(u) {
//   console.log(`User ${u.firstName} ${u.lastName} is ${u.age}`);
// }

// //some Instance of shortened value

// const age = 30;
// const user = {
//   // age: 25,
//   // age: age,
//   age,
// };
// console.log(user)  // {age: 30}

// const namePrefix = 'first';
// const surnamePrefix = 'last';
// const user3 = {
//   [namePrefix + 'Name']: 'Liana',
//   [surnamePrefix + 'Name']: 'Nicklson',
// };

// user3[namePrefix + 'Name'] = 'Iliana'
// console.log(`Hi ${user3[namePrefix + 'Name']} ${user3[surnamePrefix + 'Na' + 'me']}`);

// delete user3[namePrefix + 'Name'];

// console.log(user3);

// /// Considering of some example ///

// const user4 = {
//   firstName: 'John',
//   lastName: 'Smith',
//   age: 20,
// };

// //editing
// user4.age = 21;
// user4['firstName'] = 'Michael';

// console.log(
//   user4.firstName, //Michael
//   user4.age, //21
// );

// //adding
// user4.isMarried = false;
// user4['hasJob'] = true;

// console.log(user4)
// /*
// {
// age: 21
// firstName: "Michael"
// hasJob: true
// isMarried: false
// lastName: "Smith"
// }
// */

// delete user4.age;
// delete user4['hasJob'];

// console.log(user4);




// function addFullName(user) {
//   user.fullName = `${user.firstName} ${user.lastName}`;
// };
// addFullName(user1);

// console.log(user1);


// const robots = [
//   { coreVersion: 9 },
//   { coreVersion: 13 },
//   { coreVersion: 16 },
//   { coreVersion: 9 },
//   { coreVersion: 14 },
// ];

// function getOutdated(robots, newVersion) {
//   let outdated = [];
//   for (let i = 0; i < robots.length; i++) {
//     robots[i].coreVersion < newVersion && outdated.push(i);
//   }
//   return outdated;
// }

// const user = {
//   firstName: 'Misha',
//   lastName: 'Hrynko',
//   age: 39,
//   isMarried: undefined,
// };

// const key = 'toString';

// // if (user[key] !== undefined) {
// //   console.log('Property exists');
// // }

// if (key in user) {
//   console.log('Property exists'); //Property exists
// }

// if (Object.hasOwn(user, key)) {
//   console.log('Property exists'); // nothing, coz it checks your own keys.
// }


// const someValue = 'Paul Walker';
// const parts = someValue.split(' ');
// console.log(parts);

// const user = {
//   firstName: 'Misha',
//   lastName: 'Hrynko',
//   age: 39,
//   isMarried: true,
// };

// user.x = 1;


// for (const key in user) {
//   console.log(key, user[key]);
// }

// console.log(Object.keys(user));

// for (const key of Object.keys(user)) {
//   console.log(key, user[key]);
// }

// for (const value of Object.values(user)) {
//   console.log(value);
// }

// for (const entry of Object.entries(user)) {
//   console.log(entry[0], entry[1]);
// }
// console.log(Object.entries(user));
// function countBoxes(boxes) {
  
//   let check = {};
//   for (let box of boxes) {
//     check[box] = 0;
//   }
//   let i = 0;
//   for (const key of Object.keys(check)) {
    
//     for (let box of boxes) {
//       if (box === key) {
//         check[key]++;
//       }
      
//     }



//   }

// return check;
// }
// console.log(countBoxes('basdffd'));

// const compareRobots = (robot1, robot2) => {
//   results = [];
//   for (const key of Object.keys(robot1)) {
//     if (key === 'serialNo') continue;
//     if (robot1[key] === robot2[key]) {
//       results.push(true);
//     } else {
//       results.push(false);
//     }
//   };
//   for (const key of Object.keys(robot2)) {
//     if (key === 'serialNo') continue;
//     if (robot2[key] === robot1[key]) {
//       results.push(true);
//     } else {
//       results.push(false);
//     }
//   }
//   let final;
//   for (let result of results) {
//     if (result) { final = true;
//     } else {
//       final = false;
//     }
    
//   }
//   return final;
// }

// const charlie = { serialNo: 1, chipVer: 12 };

// const lordy = { serialNo: 2, chipVer: 12 };
// compareRobots(charlie, lordy); // true

// const paul = { serialNo: 3, chipVer: 15 };
// compareRobots(paul, charlie); // false

// const mike = { serialNo: 4, chipVer: 12, wheels: 1 };
// compareRobots(mike, charlie); // false

// const max = { serialNo: 5, engineVer: 12 };
// compareRobots(max, charlie); // false

// const steve = { serialNo: 6 };
// compareRobots(steve, charlie); // false
// console.log(compareRobots(steve, charlie));
// console.log(Object.keys(charlie));

// console.log(charlie);

// function getTriathlonDistance(distance) {
//   let triathlon = {}
//   const entireWay = 226.31;
//   let kmLeft = `${(entireWay - distance).toFixed(2)} to go!`;
//   if (distance === 0) return 'Starting Line... Good Luck!';

//   switch (true) {
//     case (distance === 0):
//       return 'Starting Line... Good Luck!';

//     case (distance < 3.86):
//       triathlon.swim = kmLeft;
//       return triathlon;
    
//     case (distance < 184.11):
//       triathlon.bike = kmLeft;
//       return triathlon;
    
//     case (distance < entireWay):
//       triathlon.run = kmLeft;
//       return triathlon;
//     default:
//       return 'You\'re done! Stop running!';
//   }

// }
// console.log(getTriathlonDistance(226.3))


// console.log(Object.is(4, NaN));
// console.log(isFinite(),)

// const randomNumber = (min, max) => {
//   const result = (max - min) * Math.random() + min;
//   return Math.trunc(result);
// }

// console.log(
//   randomNumber(3, 5),
//   randomNumber(4, 5),
//   randomNumber(5, 9),
//   randomNumber(1, 8),
//   randomNumber(2, 6),
// );
// let word = 'word';
// console.log(
//   word.includes('o', 0),
//   word.slice(),
//   word.indexOf('ke')
// );

// const funcCheck = (param) => param;
// console.log(funcCheck())

// function colorStones(stones) {
//   // write code here
//   let count = 0;
//   for (let i = 0; i < stones.length; i++) {
//     if (stones[i - 1] === stones[i]) {
//       count++;
//     }
//   }
//   return count;
// }

function countNextSmaller(numbers) {
  // write code here
  let counts = [];

  for (let i = 0; i < numbers.length; i++) {
    let count = 0;
    for (let n = i; n < numbers.length; n++) {
      if (numbers[i] > numbers[n]) {
      count++;
      }
    }
    counts.push(count);
  }
  return counts;
}

console.log(countNextSmaller([5, 4, 3, 2, 1]));
