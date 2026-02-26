function isWerewolf(target){
    let direct = '';
    let indirect = '';

    for (let ch of target) {
        if (true) {
            direct += ch;
            indirect = ch + indirect;
        }
    }
    return direct === indirect;
} 

console.log(isWerewolf('wolf'));