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

console.log(toAllTypes(63));