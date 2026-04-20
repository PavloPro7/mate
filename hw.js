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
function toAllTypes(num) {
    return `binary: ${num.toString(2)}, 
octal: ${num.toString(8)},
decimal: ${num.toString(10)}, 
hexadecimal: ${num.toString(16)}`
}

console.log(toAllTypes(20));

const inventory = ['sword', 'shield', 'potion'];

for (const item of inventory) {
  console.log("You have a " + item);
}

// 1. Start: let i = 0
// 2. Condition: run as long as i < 5
// 3. Step: increase i by 1 after each loop (i++)
for (let i = 0; i < 5; i++) {
  console.log(i); // Prints 0, 1, 2, 3, 4
}

let count = 0;

while (count < 3) {
  console.log("Count is: " + count);
  count++; // CRITICAL: Always change the condition inside, or it runs forever!
}

