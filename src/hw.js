const isWerewolfWrap = () => {
  function isWerewolf(target) {
    let direct = "";
    let indirect = "";

    for (let ch of target) {
      if (true) {
        direct += ch;
        indirect = ch + indirect;
      }
    }
    return direct === indirect;
  }

  console.log(isWerewolf("level"));
};

const toAllTypesOfNumberWrap = () => {
  function toAllTypes(num) {
    return `binary: ${num.toString(2)},
            octal: ${num.toString(8)},
            decimal: ${num.toString(10)},
            hexadecimal: ${num.toString(16)}`;
  }

  console.log(toAllTypes(20));
};

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

// function countNextSmaller(numbers) {
//   // write code here
//   let counts = [];

//   for (let i = 0; i < numbers.length; i++) {
//     let count = 0;
//     for (let n = i; n < numbers.length; n++) {
//       if (numbers[i] > numbers[n]) {
//       count++;
//       }
//     }
//     counts.push(count);
//   }
//   return counts;
// }

// console.log(countNextSmaller([5, 4, 3, 2, 1]));

// function getProductId(url) {
//   let infoWithoutUrl = url.split('-p-').at(-1);
//   const choppedPart = 14;
//   let id = infoWithoutUrl.slice(0, -choppedPart);
//   return id;
// }

// console.log('http://www.exampleshop.com/letter-p-book-stand-p-192837-11112011.html'.lastIndexOf('-p-'));

// function getLeaders(numbers) {
//   let result = [];

//   for (let i = 0; i < numbers.length; i++) {
//     let sum = 0;

//     for (let j = i; j < numbers.length; j++) {
//       if (j === i) continue;

//       sum += numbers[j];
//     }

//     if (numbers[i] > sum) {
//       result.push(numbers[i]);
//     }
//   }

//   return result;
// }

// console.log(getLeaders([26, 5, 3, 4, 9, 3]))

// function getArrayProduct(numbers) {
//   let result = [];

//   for (let i = 0; i < numbers.length; i++) {
//     let product = 1;

//     for (let j = 0; j < numbers.length; j++) {
//       if (j === i) continue;

//       product *= numbers[j];
//     }

//     result.push(product);
//   }

//   return result;
// }

// function getRowWeights(people) {
//   let result = [];
//   let oddAmount = 0;
//   let evenAmount = 0;
//   for (let i = 0; i < people.length; i++) {
//     if (i === 1 || i % 2 === 1) {
//       evenAmount += people[i];
//     }

//     if (i % 2 === 0) {
//       oddAmount += people[i];
//     }
//   }
//   result.push(oddAmount);
//   result.push(evenAmount);

//   return result;
// }

// console.log(getRowWeights([10, 5, 15, 5]));

// console.log(0 % 2)

// function getRowWeights(people) {
//   let result = [0, 0];

//   for (let i = 0; i < people.length; i++) {

//     result[i % 2] += people[i];

//   }

//   return result;
// }

// function getKiller(suspects, dead) {

//   let mostlySuspects = [];
//   let coincidences = [];

//   for (const entrie of Object.entries(suspects)) {
//     mostlySuspects.push(entrie[0]);
//     let sum = 0;
//     for (let i = 0; i < entrie[1].length; i++) {
//       for (let j = 0; j < dead.length; j++) {
//         if (entrie[1][i] === dead[j]) {
//           sum++;
//         }
//       }
//     }
//     coincidences.push(sum);
//   }

//   let comparison = 0;
//   let resultNum = 0;
//   for (let l = 0; l < coincidences.length; l++) {
//     if (coincidences[l] > comparison) {
//       comparison = coincidences[l];
//       resultNum = l;
//     }

//   }

//   return (comparison > 0) ? mostlySuspects[resultNum] : undefined;
//   // return mostlySuspects[resultNum]
// }
// const perpetrators = {
//   Johnny: ["David", "Kyle", "Lucas"],
//   Peter: ["Keel", "Jan"],
//   James: ["Jacob", "Bill", "Lucas"],
// };
// console.log(getKiller(perpetrators, ["Paul", "Peel"]));

// const myName = 'Misha';
// let myAge = 39;

// let me = {
//   name: 'Misha',
//   age: 39,
// }

// let guest = me;

// guest.age = 12;

// console.log(
//   me.age,
//   guest.age,
// );

// const myFriend = {
//   name: 'John',
//   age: 25,
// };

// let guest = myFriend;

// guest.age++;
// // guest.age += 1;
// // guest.age = guest.age + 1;
// // guest.age = #1.age + 1;
// // guest.age = 25 + 1;
// // guest.age = 26;
// // #1.age = 26;

// quest = null;

// console.log(myFriend.age);
// // console.log(#1)

const makeRobotPairWrap = () => {
  const charlie = { name: "Charlie" };
  const joy = { name: "Joy" };
  const lordy = { name: "Lordy" };

  const robotJay = { serial: "8f7a4be4-e8ee-4870-a40a-caa53e3e5860" };
  const robotRoby = { serial: "241f9700-6e15-4122-a88a-5380686d0faf" };

  function makeRobotsPair(robot1, robot2) {
    const partner = null;

    robot1.partner = robot2 || null;
  }

  makeRobotsPair(robotJay, robotRoby);

  console.log(robotJay.partner === robotRoby);

  makeRobotsPair(charlie);

  console.log(charlie.partner);

  const a = { age: 1 }; // #1
  const b = { age: 1 }; // #2

  const c = a; // #1

  console.log(a === b); //false, coz this is 2 different objects with same value
  console.log(a === c); //true, coz this is link on the same object #1
};

const objectAsReferenceInOtherObject = () => {
  const bob = {
    name: "Bob",
    surname: "Smith",
    partner: null,
  };

  const alice = {
    name: "Alice",
    surname: "Black",
    partner: null,
  };

  function marry(person1, person2) {
    if (person1.partner) {
      person1.partner.partner = null;
    }
    if (person2.partner) {
      person2.partner.partner = null;
    }

    person1.partner = person2;
    person2.partner = person1;
  }

  marry(bob, alice);
  bob.partner.surname = bob.surname;

  marry(bob, {});

  bob.partner.surname = bob.surname;

  console.log(bob.partner.name, bob.partner.surname);
  console.log(alice.partner);
};

const cloningExamples = () => {
  const bob = {
    name: "Bob",
    surname: "Smith",
    partner: null,
  };

  function clone(source) {
    // const copy = {};

    // for (const key in source) {
    //   copy[key] = source[key];
    // }

    // return copy;
    return Object.assign({}, source, { x: 123 });
    return { ...source }; //the most favourite
  }

  const bobCopy = clone(bob);

  console.log(bobCopy === bob);
  console.log(bobCopy);
};

const upgrateRobotWrap = () => {
  const kobi = {
    chipVer: 9,
    serialNo: 413,
    wheels: 2,
  };

  const parts = [{ wheels: 6 }, { chipVer: 16 }, { displays: 2 }];

  function upgradeRobot(robot, parts) {
    for (const part of parts) {
      Object.assign(robot, part);
    }
  }

  upgradeRobot(kobi, parts);

  console.log(kobi);
};

const inverseRobotWrap = () => {
  const kolli = { Kolli: "name", 123: "chipVer", 3: "wheels" };
  const robert = { Robert: "name", 123: "chipVer", 113: "chipVer" };

  const copy = {};

  function inverseRobot(robot) {
    for (const [value, key] of Object.entries(robot)) {
      return Object.assign(copy, { [key]: value });
    }
  }

  inverseRobot(kolli);

  console.log(copy);
};

const objValuesDemonstration = () => {
  const myObj = { a: 10, b: 20, c: 30 };

  const array = [10, 20, 30];

  console.log(Object.values(myObj), array); // Output: [10, 20, 30]
};

function generateChartWrap() {
  function generateChart(statistics) {
    // write code here
    const WHOLE_PIE_DEGREES = 360;

    let totalAmount = 0;

    // for (value of Object.values(statistics)) {g
    //   totalAmount += value;
    // }
    totalAmount = Object.values(statistics).reduce((sum, num) => sum + num, 0);

    for (const key in statistics) {
      statistics[key] = Math.round(
        (WHOLE_PIE_DEGREES * statistics[key]) / totalAmount,
      );
    }

    return statistics;
  }

  console.log(generateChart({ cleaner: 2, driver: 8 }));
}

function objectDestructuring() {
  const bob = {
    name: "Bob",
    surname: "Smith",
    partner: null,
  };
  // const { name } = bob;
  // console.log(name);

  const bobCopy = clone(bob);

  // function clone(source) {
  //   const { name: firstName = '', surname, age = 18 } = source;
  function clone({ name: firstName = "", age = 18, ...rest }) {
    console.log(rest);
    return {
      // ...source,
      // name: source.name,
      // surname: source.surname,
      // name: name,
      name: firstName,
      age,
      x: 123,
      // ...{ partner: 1, b: 2 },
    };
  }

  console.log(bobCopy);
}

const functionIsAnObject = () => {
  const user = () => {
    console.log("called an object 'user'");
  };

  user.firstName = "Bob";
  user["lastName"] = "Smyth";
  user.age = 39;

  printInfo(user);

  function printInfo({ firstName, lastName, age = 0 }) {
    const message = `!!!${firstName} ${lastName} is ${age}!!!`;

    console.log(message);
  }

  user();
  const array = [];

  array[0] = 1;
  array[1] = 1;

  console.log(array);
};

const statefulObject = () => {
  const exState = { foo: "bar", bar: "foo" };
  const exActions = [
    {
      type: "addProperties",
      extraData: {
        name: "Jim",
        hello: "world",
      },
    },
    {
      type: "removeProperties",
      keysToRemove: ["bar", "hello"],
    },
    {
      type: "addProperties",
      extraData: { another: "one" },
    },
    {
      type: "clear", // the state should become empty after performing this action
    },
  ];

  function transformState(state, actions) {
    for (const action of actions) {
      if (action.type === "addProperties") {
        for (const key in action.extraData) {
          state[key] = action.extraData[key];
        }
      }

      if (action.type === "removeProperties") {
        for (const key of action.keysToRemove) {
          delete state[key];
        }
      }

      if (action.type === "clear") {
        for (const key in state) {
          delete state[key];
        }
      }
    }
  }

  transformState(exState, exActions);

  console.log(exState);
};

const transformStateWithClonesWrap = () => {
  function transformStateWithClones(state, actions) {
    const stateHistory = [];

    for (const action of actions) {
      switch (action.type) {
        case "addProperties":
          addProperties(state, action.extraData);
          break;

        case "removeProperties":
          removeProperties(state, action.keysToRemove);
          break;

        default:
          clearProperties(state);
          break;
      }
      stateHistory.push({ ...state });
    }

    return stateHistory;
  }

  function addProperties(state, extraData) {
    Object.assign(state, extraData);
  }

  function removeProperties(state, keysToRemove) {
    for (const key of keysToRemove) {
      delete state[key];
    }
  }

  function clearProperties(state) {
    for (const key in state) {
      delete state[key];
    }
  }

  const state = {
    foo: "bar",
    bar: "foo",
  };

  const stateHistory = transformStateWithClones(state, [
    {
      type: "addProperties",
      extraData: { name: "Jim", hello: "world" },
    },
    {
      type: "removeProperties",
      keysToRemove: ["bar", "hello"],
    },
    {
      type: "addProperties",
      extraData: { another: "one" },
    },
  ]);

  console.log(stateHistory);
};

const objectMethods = () => {
  const bob = {
    firstName: "Bob",
    lastName: "Smyth",
    age: 39,

    // print2: function() { ... }
    print2() {
      const { firstName, lastName, age = 0 } = this;
      const message = `!!!!${firstName} ${lastName} is ${age}!!!`;

      console.log(message);
    },
  };

  // const bob2 = {
  //   firstName: 'Bob2',
  //   lastName: 'Smyth',
  //   age: 39,

  //   print: printInfo,
  // };

  // printInfo(123);
  // bob.print = printInfo;
  bob.print2();
  // bob2.print();

  // function printInfo() {
  //   const { firstName, lastName, age = 0 } = this;
  //   const message = `!!!!${firstName} ${lastName} is ${age}!!!`;

  //   console.log(message);
  // }
};

const computedProperties = () => {
  const admin = {
    get fullName() {
      //never to be some parameters
      return `${this.firstName} ${this.lastName}`;
    },

    set fullName(value) {
      const parts = value.split(" ");

      if (parts.length < 2) {
        return;
      }

      this.firstName = parts[0];
      this.lastName = parts[1];
    },

    firstName: "Bob",
    lastName: "Smith",

    getFullName() {
      return `${this.firstName} ${this.lastName}`;
    },
  };

  congratulate(admin);
  admin.fullName = "Alice Black";
  // admin.firstName = 'Alice';
  // admin.lastName = 'Black';
  congratulate(admin);

  function congratulate(user) {
    console.log(`Hi, ${user.fullName}`);
  }

  console.log(admin.firstName);
};

const makeRobotWrap = () => {
  function makeRobot(name, wheels, version) {
    const robot = {
      name,
      version,
      wheels,

      get info() {
        return `name: ${this.name}, chip version: ${this.version}, wheels: ${this.wheels}`;
      },

      coords: {
        x: 0,
        y: 0,
      },

      get location() {
        return `${this.name}: x=${this.coords.x}, y=${this.coords.y}`;
      },

      goForward(step = 1) {
        if (step < 0) {
          return;
        }

        this.coords.y += step;

        return this;
      },

      goBack(step = 1) {
        if (step < 0) {
          return;
        }

        this.coords.y -= step;

        return this;
      },

      goRight(step = 1) {
        if (step < 0) {
          return;
        }

        this.coords.x += step;

        return this;
      },

      goLeft(step = 1) {
        if (step < 0) {
          return;
        }

        this.coords.x += step;

        return this;
      },

      evacuate() {
        this.coords.x = 1400;
        this.coords.y = 500;

        return this;
      },
    };

    return robot;
  }

  const mike = makeRobot("Mike", 3, 1.54);
  mike.goForward(2).goLeft().evacuate();
  console.log(mike.info, mike.location);
};

const arrayCreating = () => {
  const words = ["one", "two", "three"];
  const numbers = [1, 3, 1, 5, 2, 1, 4];

  console.log(words, numbers);
  console.log([]);
  console.log(["Misha", 38, true]); //tuple - rare

  const numbers2 = new Array(1, 3, 1, 5, 2, 1, 4);
  const numbers3 = Array(1, 3, 5);

  console.log(numbers2, numbers3);

  const userName = "Misha";

  console.log(
    userName.split(""),
    [...userName], ///userName can be also the array
    Array.from(userName),
  );

  for (let i = 0; i < words.length; i++) {
    console.log(words[i]);
  }

  for (const n of numbers) {
    console.log(n);
  }
};

const calculateCostWrap = () => {
  const bucket = {
    display: 20,
    wheel: 100,
    cpu: 40,
  };

  const products = {
    amazobot: {
      wheel: 12.5,
    },
    robozetka: {
      display: 56.2,
      cpu: 150,
    },
  };

  function calculateCost(bucket, products) {
    let totalAmount = 0;

    for (const shop in products) {
      const productsShop = products[shop];
      for (const unit in products[shop]) {
        if (bucket[unit] !== undefined) {
          const productsCost = productsShop[unit];
          const productsCalc = productsCost * bucket[unit];
          totalAmount += productsCalc;
        }
      }
    }

    return totalAmount;
  }
  console.log(calculateCost(bucket, products));
};

const modifyingArray = () => {
  const numbers = [0, 1, 2, 3, 4];

  console.log(numbers);
  numbers[2] = 99;
  numbers[numbers.length] = 99;
  numbers.push(100, 101, 102);
  numbers.unshift(100, 101, 102);
  const n = numbers.pop();
  const x = numbers.shift();
  console.log(x);
  numbers.length = numbers.length - 1;
  console.log(numbers);
  console.log(n);
  console.log([1, 23, ...numbers]);
  console.log([].pop());
};

modifyingArray();
