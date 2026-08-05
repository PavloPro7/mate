'use strict';

const div = document.querySelector('div');

console.log(div.previousElementSibling);
console.log(div.prevElementSibling);

const user = {
  age: 0,
  name: '',
  passport: null,
  friends: [],
};

console.log(user.passport) //null
console.log(user.pasaport) //undefined
