// Given is the string: 'a1b2c3d'
// Write a program which will replace each digit in string with '-'. I.e. the resulting string should be 'a-b-c-d'

let string = 'a1b2c3d';

const re = /\d/g;

let newString = string.replace(re, '-');
console.log(`New string is: ${newString}`); 