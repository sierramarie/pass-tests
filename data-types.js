// //Truly empty data type
// var emptyGlass = null;

// // Truly undefined data type 
// var outspace;

// // Truly true aka booleandata type 
// var truth = true;
// var news = false;

// // Falsy stuff 
// if (!undefined){
//     console.log('Falsy');
// }

// // Truthy stuff 
// if (2) { 
//     console.log('Truthy');
// }

// // Numbers
// 2
// 128394
// .334
// -38849
// // all numbers 
// '23'
// //  not number. string.

// console.log('2' + '2'); //concatenates the strings 

// console.log(2 * '2'); //multiplies the numbers. only multiply/divide

// console.log(Number('2')+ Number('2')); //converts to actual numbers 

//Every input field on a form is actually a string value, so you might need to convert those to Numbers

//Math 
// var cosmos = Math.random();
// console.log(cosmos);

// var ceil = Math.ceil(cosmos); 
// console.log(ceil);

// var round = Math.round(cosmos); 
// console.log(round);

// var floor = Math.floor(cosmos); 
// console.log(floor);

//Strings 
// var doubleQuotedString = "Hello";
// var singleQuotedString = 'World\'s Best';
// var multiLineString = `Hey 
// Everyone`;

//doubleQuotedString + singleQuotedString + multiLineString;
// var iAmWhispering = 'I AM WHISPERING';
// iAmWhispering = iAmWhispering.toLowerCase();

// console.log(iAmWhispering);

// var iAmShouting = 'I AM SHOUTING';
// iAmShouting = iAmShouting.toUpperCase();

// console.log(iAmShouting)
// //lowercase = upper upper = lower 

// var word = 'Hat'; 
// console.log(word.length);

// word = word.slice(1, 2);
// console.log(word);

// console.log(word.length);

// var place = 'The Iron Yard';

// console.log(place.slice(place.length - 4));
// //13 - 4. 13 characters in the iron yard.

// var headline = 'the day was cold';
// var firstLetter = headline.slice(0, 1).toUpperCase();
// headline = firstLetter + headline.slice(1);

// function iCap(headline) { 
//     var firstLetter = headline.slice(0, 1).toUpperCase();
//     headline = firstLetter + headline.slice(1);
//     return headline;
// }

// console.log(iCap('spring is coming soon we hope'));


// var userInput = ''
// console.log(userInput);
// userInput = 

var sayItAgain = 'Hacked.';
sayItAgain = sayItAgain.repeat(500);


'00001';
'1';

console.log(sayItAgain);


var address = '3478374 Main Street';

var hasStreet = address.includes('Street');

console.log(hasStreet);


var phoneNumber = '(888) 123 . 1234';
var isCorrectPhoneNumber = phoneNumber.match(/\d/g).length === 10;

console.log(isCorrectPhoneNumber);



console.log('hey world'.replace('hey', 'hello'));


//dates
date.now()
console.log(date.now())
moment.js
var moment = require('moment');
console.log(moment());


//currency
account.js

//arrays
var listOfThings = ['Cheese', 'Pepperoni', 'Crust', 'sauce'];
console.log(listOfThings[0]);
console.log(listOfThings.length);
console.log(listOfThings.reverse());
console.log('A sentence of characters.'.split('').reverse().join(''));

//objects

var anObject = {
    name: 'Sierra'
};

anObject.name
console.log(anObject.name);

