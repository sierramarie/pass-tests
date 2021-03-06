var avow = require('avow');
var moment = require('moment');

// Booleans
function isTrue(value) {
    return value;
}

avow('isTrue returns true', isTrue(1 + 1 === 2) === true);
// ------------

// Null & Undefined

function isNull(value) {
    if (value === null) {
        return true;
    }
}

var emptyGlass = null;
avow('isNull returns true', isNull(emptyGlass) === true);
// -----------

function isUndefined(value) {
    if (value === undefined) {
        return true;
    }
}

var blockOfClay;
avow('isUndefined returns true', isUndefined(blockOfClay) === true);
// ----------

// Strings

function convertCaseLower(value) {
    var value = value.toLowerCase();
    return value;
}

avow('convertCaseLower returns a lowercase string', convertCaseLower('I AM WHISPERING.') === 'i am whispering.');
// ------------

function convertCaseUpper(value) {
    var value = value.toUpperCase();
    return value;
}

avow('convertCaseUpper returns an uppercase string', convertCaseUpper('i am shouting!') === 'I AM SHOUTING!');
// --------------

function repeatWord(value, times) {
    return value.repeat(times)
}

avow('repeatWord returns a repeated word', repeatWord('Knock.', 2) === 'Knock.Knock.');
console.log(repeatWord('I want french fries.', 5))
// ------------

function sliceWord(value, n1, n2) {
    return value.slice(n1, n2)
}

avow('sliceWord returns a slice of a word', sliceWord('I love pizza!', 7, 12) === 'pizza');
// -----------

function splitWord(value, howToSplit) {
    // var value = 'US,CA,MX,JP,UK'
    // return value.split(',', 5);
    return value.split(howToSplit)

}

avow('splitWord returns an array', splitWord('US,CA,MX,JP,UK', ',').length === 5);
// -----------

function whereIsCarmen(value, name) {
    return value.indexOf(name)
}

avow('whereIsCarmen returns Carmen\'s position', whereIsCarmen('In the rainy Panama Canal, Carmen Sandiego silently slipped aboard a rusty shipping container bound for New Zealand.', 'Carmen') === 27);
// ----------------

function doesItContain(value, match) {
    return value.includes(match)
}

avow('doesItContain returns true if it finds a match', doesItContain('The Children\'s Museum Of Indianapolis', 'Museum') === true);
// ------------

// Regular Expressions

function extractZipCode(value) {
    return value.match(/\d/g).join('')
    
}

avow('extractZipCode returns a zip code', extractZipCode('My zip code was 46240.') === '46240');
// -----------

function extractPhoneNumber(value) {
    return value.match(/\d/g).join('')
}

avow('extractPhoneNumber returns a string of numbers', extractPhoneNumber('(888) 123.1234') === '8881231234');
// ---------

// Numbers

function stringToNumber(value) {
    return Number(value);
}

avow('stringToNumber returns a proper Number', stringToNumber('1999') === 1999);
// ------------

function incrementByOne(value) {
    value++;

    return value;
}

avow('incrementByOne returns a number one higher', incrementByOne(0) === 1);
// ---------

function isDivisibleByThree(value) {
    if (value % 3 === 0) {
        return true;
    }
    else {
        return false;
    }
}

avow('isDivisibleByThree returns true if number is divisible by 3', isDivisibleByThree(9) === true);

// ------------------

function makeRandomNumber(value) {
    return Math.round(Math.random() * value);
}
avow('makeRandomNumber returns a random number between 0 and 10', makeRandomNumber(10) >= 0 && makeRandomNumber(10) <= 10);

// i had it hard coded so the only numbers it could return were between 0 - 10 but if for some reason the data needed to change it wouldnt be able to because i had a min & a max set. using (value) * 10 returns a number between 1 and 10 randomly every time. 
// -------------
function roundNumber(value) {
     return Math.round(value);
}

avow('roundNumber returns a number rounded up', roundNumber(5.51) === 6);
// ----------------

// Dates
function justAMoment() {
    // Look at moment.js docs to find how to return the day name, like Wednesday
    var value = moment().format('dddd');
    return value;
}

avow('justAMoment returns true if the function returns a day name', justAMoment().includes('day') === true);
// --------------

// Objects

function myNameIs(value) {
    return value.name
}

avow('myNameIs returns your name from an object with a name property', myNameIs({name:'Your Name Here'}) === 'Your Name Here');
// -----------

// Arrays

function getFirstItem(dog) {
    return dog[0];
}

avow('getFirstItem returns the first item in the array', getFirstItem(['Dog','Cat','Pig','Bird','Fish']) === 'Dog')
