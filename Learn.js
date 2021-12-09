// Using and assigning variables
var a;
var a = 5;
var b = 10;
var c = "My name is "
var myName = "Femi Laizer";

b = b + a
b++;
c = c + " " + myName;

console.log(myName);
console.log(c);

//Word Blank... calling of function
function makeSentence(noun, verb, pronoun, adverb) {
    var result = "";

    result = noun + " " + verb + " " + pronoun + " " + adverb;

    return result;
 }
 console.log(makeSentence("Femi", "digged", "it", "already"));

 //Using Array
var myArray = ["Femi", 34];
var moreArray = [[50, 90, "Femi"], ["Get", 45, "Goal"], [12, 3, 40]];

myArrayNo = myArray[1];
moreArrayNo = moreArray[0][1];

console.log(myArrayNo);
console.log(moreArrayNo);

//Modify Array
myArray[0] = "Laizer";
console.log(myArray);

//Using multiple Array
var mArray = [[1, 2, 3,], [4, 5, 6], [7, 8, 9], [[10, 11, 12], 13, 14]];
 //select 13 in the array
 var mData = mArray[3][1];
console.log(mData);

//Pushing elements or another array into an array using .push or unshift
moreArray.push(["Goal", 23, "Take"]);
console.log(moreArray);

//Remove from array using .pop or .shift
var removeArray = mArray.pop();
console.log(removeArray);


//Resuable function
function reuseFunction() {
    console.log("Welcome Femi!");
}
reuseFunction();

//Try use this code for a login form in HTML above
/*function firstName() {
    var firstName = document.getElementById("firstName");

    theName = "Welcome" + firstName;
    return theName;
    document.getElementById("firstName").innerHTML = "Welcome" + firstName;
    console.log(theName);
}
firstName(); */

//function with argument
function useArgument(a, b) {
    console.log(a - b);
    console.log(a + b);
    console.log(a * b);
}
useArgument(50, 35);

function seeName(x, y) {
    console.log(x + " " + y);
}
seeName("Femi", "Laizer");

//Global variable are variable that are outside the function can be see anywhere in the code
var myGlobal = 10;

function fun1() {
oopsGlobal = 5;
}

function fun2() {
    var output = "";

    if (typeof myGlobal != "undefined") {
        output += "myGlobal: " + myGlobal;
    }

    if ( typeof oopsGlobal != "undefined") {
        output += " oopGlobal: " + oopsGlobal;        
    }
    console.log(output);
}
fun1();
fun2();

//Local Scope and function... Using console.log inside and outside the function
//You must console.log inside the function for (local Scope) var inside the function
// Console.log outside for var outside as shown below
var numa = 25;

function varNum() {
    var numb = 87;
    console.log(numb);
}
varNum(); //this call function for var inside the function

console.log(numa); // this call var outside the function, we did npot call the function here

// Local and Global var ... if they have the same name the local will take the name first when calling the function
//local var is the var inside the function, global var is outside the function
var myAge = 30;

function myOld() {
    var myAge = 34;

    return myAge;
}
console.log(myOld());

console.log(myAge);

//Return value from function
function minusNum(numba) {
    return numba + 7;
}
console.log(minusNum(100));

//Undefined value from function.. if you dont you "return" the output will not return anything
var sum = 0;

function addSum() {
    sum += 3;
}
console.log(addSum()); //Undefined because no "return" was created in the function

//This will return the output because "return" is used
var sum = 0;

function addHum() {
    sum += 3;

    return sum;
}
console.log(addHum());

//Assignment with returned value
var changed = 0;

function change(num) {
    
    return (num + 5) / 3;
}

changed = change(10);
console.log(changed);

//Stand in Line function ...remove item from an array and return it, then add next item to the array
function nextInLine(arr, item) {

    arr.push(item);
    return arr.shift();
}

var testArr = [1, 2, 3, 4, 5];

console.log("Before: " + JSON.stringify(testArr));

console.log(nextInLine(testArr, 6));

console.log("After: " + JSON.stringify(testArr));

//Boolean Value.... true or false
function boolean() {
    return true;
}

function boolen() {
    return false;
}

//Using IF STATEMENT to make decision
//OurTrue statement,... because ourTrue("isTrue") is the same with console.log
function ourTrue(isThisTrue) {

    if (isThisTrue) {
        return "Yes, is is true";
    }
    return "No, it is false";
}
console.log(ourTrue("Femi")); // it will return "Yes, it is true"

function ourFalse(isThisTrue) {

if (isThisTrue) {
    return "Yes, is is true";
}
return "No, it is false";
}
console.log(ourFalse()); //It will return "No, it is false".. because  there is nothing in the bracket

//Comparison with the Equality Operator
function testEqual(val) {

    if (val == 12) {
        return "Equal";
    }
        return "Not Equal";
}
console.log(testEqual(90)); //90 is not equal to 12, it will return "not equal"

//Comparism with the strict Equality Opeartor
function testStrict(num) {

    if (num === 7) {
        return "Equal to num";
    }
    return "Not Equal to num";
}
console.log(testStrict(7)); //Strictly equal
console.log(testStrict(10)); // Not strictly equal
console.log(testStrict("7")); //Not strictly equal (it is a string)

//Practice with comparing different values.. string like "10" will be converted to number when yo use ==
//but when you use === it will not be equal, it is strictly considered as string due to ""
function compare(a, b) {

    if (a == b) {          //NOTE: == was used here, so "10" will equal 10
        return "Matched";
        }
        return "Not Matched";
}
console.log(compare(10, "10")); //Matched

function compareNum(a, b) {

if (a === b) {          //NOTE: === was used here, so that "10" will not equal 10
    return "Matched";
    }
    return "Not Matched";
}
console.log(compareNum(10, "10")); //Not Matched

//Compare with the Inequality Operator
function compareNotEqual(value) {

if (value != 99) {         //The value is set here
    return "Value Matched";
    }
    return "Value Not Matched";
}
console.log(compareNotEqual(19)); //The vaule is checled here if it is equal to 99
console.log(compareNotEqual(99));

//Strict Inequality Operator
function compareStrict(number) {

    if (number !== 77) {
        return "Number not equal to 77";
    }
    return "Number equal to 77";
}
console.log(compareStrict(3));

//Compare Logic Operator
function funValue(value) {

    if (value > 1000) {
        return "More than 1000";
    }

    if (value > 100) {
        return "More than 100 less 1000";
    }

    if (value > 10) {
        return "More than 10 less 100";
    }
    return "Less than 10";
}
console.log(funValue(200)); //More than 100 less 1000
console.log(funValue(2000)); //More than 1000
console.log(funValue(2));    //Less than 10
console.log(funValue(20));     //More than 10 less 100

//Compare with "greater" than or "equal to"
function fineValue(value) {

if (value >= 1000) {
    return "Number More than or equal 1000";
}

if (value >= 100) {
    return "Number More than or equal 100";
}

if (value >= 10) {
    return "Number More than or equal 10";
}
return "Number Less than 10";
}
console.log(fineValue(87)); //"Number More than or equal 10"
console.log(fineValue(2705)); //"Number More than or equal 1000"
console.log(fineValue(9));    //"Number Less than 10"
console.log(fineValue(100));    //"Number More than or equal 100"

//Less than operator
function lessValue(value) {

if (value < 10) {
    return "Less than 10";
}

if (value < 100) {
    return "Less than 100 more than 10";
}

if (value < 1000) {
    return "Less than 1000 more than 100";
}
return "More than 1000";
}
console.log(lessValue(0)); //return
console.log(lessValue(80)); //Second if statement
console.log(lessValue(872));    //first if statement
console.log(lessValue(7000));     //third if statement

//Compare with "Less" than or "equal to"
function numValue(value) {

if (value <= 10) {
return "Number Less than 10 or equal 10";
}

if (value <= 100) {
return "Number Less than 100 or equal 100";
}

if (value <= 1000) {
return "Number Less than 1000 or equal 1000";
}
return "Number too big!";
}
console.log(numValue(9000)); 
console.log(numValue(90)); 
console.log(numValue(9));    
console.log(numValue(1000));    

// Checking a number at the same time, if statement can be inside another if statement
function checkNumber(val) {

    if (val <= 50) {
        if (val >= 30 ) {
            return "Between 30 and 50";
        }
    } return "Number is out of range!";
}

console.log(checkNumber(45)); //Between
console.log(checkNumber(25));  //Out of range

//Use && inside one if statement to aviod two if statement (example below)
function checkNum(num) {

    if (num <= 50 && num >= 30 ) {
        return "Between range!";
    } 
    return "Out of range!";
}

console.log(checkNum(45));
console.log(checkNum(25));


// Using && (and) can be compared with using || (Or)

function checkSum(sum) {

if (sum >= 50 || sum <= 30 ) {
    return "Matured!";
} 
return "Younger!";
}

console.log(checkSum(45));
console.log(checkSum(75));


//Below is the longer way to do the code above
function checkMum(mum) {

if (mum >= 50) {
    
} 
if (mum <= 30) {
    return "Outside"
}
return "You!";
}

console.log(checkMum(45));
console.log(checkMum(25));

//Using "Else Statement"
function funtArr(fun) {

if (fun < 5) {
    return "less than 5";
    } else {
    return "bigger than 5";
    }
}
console.log(funtArr(19)); // bigger than 5


//Else if
function fanAct(fan) {

    if (fan === 10) {
        return "The number";

    } else if (fan < 10) {
        return "Lesser Number";

    } else {
        return "Number not suitable";
    }
}

console.log(fanAct(25)); //Number not suitable
console.log(fanAct(8)); //Lesser number
console.log(fanAct(10)); // The number

//When you use "else if statement" order is very important
//You cannot check for less than 100 before checking for less than 10
//It will pick the first return because 2 is less than 100
//But you want to check for less than 10 so "fn < 10" then check if "fn < 100"

function fanAc(fn) {

if (fn < 100) {
    return "Less than 100";

} else if (fn < 10) {
    return "Less than 10";

} else {
    return "Number not suitable";
}
}
console.log(fanAc(2)); //What you want to see is if 2 is less than 10

//So check for the lesser number first in you if statement when dealing with <


//Chaining if Else statement. It means having multiple "else if statement"
function fA(fine) {

if (fine < 5) {
    return "Tiny";

} else if (fine < 10) {
    return "Small";

} else if (fine < 15) {
    return "Small";

}   else if (fine < 20) {
    return "Small";

    }   else {
    return "Huge";
}
}
console.log(fA(2));

//Golf Code. Using elements in an Array 

var names = ["Femi", "Gbemi", "Doyin", "Peter", "Adura", "Not Our Family"];

function omoIya(placeBirth, timeBirth) {

    if (placeBirth == 'bayeku' || timeBirth == 1999) {
              return names[4];

    } else if (placeBirth == 'Ebute Meta' || timeBirth == 1986) {
                 return names[0];

    } else if (placeBirth == 'Ebute Meta' || timeBirth == 1988) {
                 return names[1];

    } else if (placeBirth == 'Ebute Meta' || timeBirth == 1990) {
                return names[2];

    } else if (placeBirth == 'Ebute Meta' || timeBirth == 1995) {
                return names[3];

    } else {
          return names[5];
    }
}
console.log(omoIya('bayeku', 30));
console.log(omoIya('agege', 1987));
console.log(omoIya('Ebute Meta', 1967));

//Switch Statement. A switch statement can be used instead of using chain if statement (multiple if statement)
//You can use "switch" to replace "if else statement" as shown below. remember to use break; at the end of each case.
function switchSt(val) {
    var answer = "Your answer is wrong!";

    switch (val) {
        case 1:
            answer = "The number is one";
            break;

        case 2:
            answer = "The number is two";
            break;

        case 3:
            answer = "The number is three";
            break;

    } 
        return answer;
}
 
 console.log(switchSt(4));
 console.log(switchSt(1));

//Default option in "Switch Statements". The "default" use as "else statement" in "switch"
function switchAnimals(alph) {
    var answer = "Enter single alphabet";

    switch (alph) {
        case "a":
            answer = "Apple";
            break;

        case "b":
            answer = "Bird";
            break;

        case "c":
            answer = "Cat";
            break;

            default:
           answer = "Wrong Entry";
            break;
                    //this default here is like the last return, the return below it will not run
    } 
        return answer;
}
 
 console.log(switchAnimals("jk"));

//Multiple Identical options in "Switch statements"
function checkLow(mini) {
    var answer = "The number is out of range and it is equal to 10 or above";

    switch (mini) {
        case 1:
        case 2:
        case 3:
            answer = "Small";
            break;

        case 4:
        case 5:
        case 6:
            answer = "Medium";
            break;

        case 7:
        case 8:
        case 9:
            answer = "Large";
            break;

    }
        return answer;
}

console.log(checkLow(2));
console.log(checkLow(8));
console.log(checkLow(5));
console.log(checkLow(79)); 

// Replacing "If Else statement" chain with "Switch"
function switchName(name) {
    var answer = "Enter single alphabet";

    switch (name) {
        case "Femi":
            answer = "34";
            break;

        case "Gbemi":
            answer = "25";
            break;

        case "Kemi":
            answer = "37";
            break;
  } 
        return answer;
}
 
 console.log(switchName("Kemi"));

 // Returning Boolean Values form functions (Shortb form of IF STATEMENT)
 function isLess(a, b) {
    return a < b;
 }
 console.log(isLess(56, 8));

// Returning Early pattern from functions
function abTest(a, b) {

    if (a < 0 || b < 0) {
        return undefined;
    }
    return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}

console.log(abTest(2, 2));
console.log(abTest(-2, 6));

//count card (runing a function to count card for us and bet when the count is > 0, or hold when it is not)
var count = 0;

function cc(card) {

    switch (card) {
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            count++;
            break;

        case 10:
        case "K":
        case "K":
        case "Q":
        case "A":
            count--;
            break;
    }

    var holdbet = "Hold"

    if (count > 0)
        holdbet = 'Bet'

    return count + " " + holdbet;
}

cc(2); cc(7); cc('K'); cc('A'); cc(3);
console.log(cc(4));


// Build Javascript Objects... you can have array in an object as shown below in "friends"

var ourObject = {
    name: "Femi",
    Age: 34,
    color: "darkSkin",
    wife: "Ronke",
    friends: ["Tomi", "Tayo", 25]
};


//Accessing Object properties with Dot Notation

var ageFile = {
    femi: 34,
    tomi: 25,
    ronke: 26,
};

var femiAge = ageFile.femi;

var ronkeAge = ageFile.ronke;

// Accessing Object properties with bracket Notation

var typeOfDrink = {
    "coke": "black",
    "fanta": "yellow",
    "pepsi": "dark"
};

var cokeColor = typeOfDrink["coke"];

var fantaColor = typeOfDrink["fanta"];

//Accessing Obect properties with Variables

var testObj = {
    12: "nana",
    16: "polo",
    19: "ete"
};

var playerNumber = 16;

var player = testObj[playerNumber];

//Updating Object properties

var person = {
    name: "Laizer",
    age: 34,
    skin: "dark"
};

person.name = "Femi Laizer"

console.log(person);

// Add New Properties to an object
var son = {
    name: "Femi",
    age: 34,
    skin: "dark"
};

son.school = "Eksu";
son["state"] = "Ondo";

console.log(son);

// Delete Properties from an object
var son = {
    name: "Femi",
    age: 34,
    skin: "dark"
};

delete son.age;

console.log(son);

//Using Objects for Lookups
function phoneticLookup (val) {

    var result = "";

    var lookup = {
        "name": "Femi",
        "skin": "dark",
        "state": "lagos",
        "school": "eksu"
    };

    result = lookup[val];

    return result;
}

console.log(phoneticLookup("state"));


//Testing Objects for Properties
var nice = {
    "name": "Femi",
    "skin": "dark",
    "state": "lagos",
    "school": "eksu"
};

function checkN(checky) {

    if(nice.hasOwnProperty(checky)) {
        return nice[checky];
    } else {
        return "Not Found";
    }
}

console.log(checkN("age"));
console.log(checkN("state"));

// Manipulating complax objects ...This is an array that has object and array in it
var myMusic = [
    {
        "artist": "Femi Laizer",
        "title": "love make sense",
        "release_year": 2020,
        "formats": ["mp3", "mp4", "wma"],
        "gold": true
    },

    {
        "artist": "Patrick Lavil",
        "title": "love lives here",
        "release_year": 2023,
        "formats": ["mp3", "mp4", "wma"],
        "gold": true
    }
];

// Accessing Nested Objects.. (getting an element inside-of-inside and object)

var myStorage = {
    "car": { 
        "inside": {"glove box": "maps", "passsenger seat": "cumbs"},
        "outside": {"trunk": "jack", "wheel": "tire"}
    }
};

var contentInGloveBox = myStorage.car.inside["glove box"];

console.log(contentInGloveBox);

//Accessing Nested Array
var myPlants = [
    {
       "type": "flowers",
       "list": ["rose", "tulip", "dandelion"]
    },

    {
        "type": "trees",
        "list": ["fir", "pine", "birch"]
    }
];

var checkTree = myPlants[1].list[2];

console.log(checkTree);

// Record collection
var collection = {
    "2548": {"album": "why me", "artist": "Dbanj", "tracks": ["Let it roll", "bad name"]},

    "2468": {"album": "1999", "artist": "buhari", "tracks": ["1999", "lekki toll gate"]},

    "1245": {"artist": "Sanwo Olu", "tracks": []},

    "5439": {"album": "brid fly"},
};

var copyCollection = JSON.parse(JSON.stringify(collection)); //this will make copy of the collection

function updateRecords(id, prop, value) {

    if (value === "") {
        delete collection[id][prop];

    } else if (prop === "tracks") {
        collection[id][prop] = collection[id][prop] || [];
        collection[id][prop].push(value);
    } else {
        collection[id][prop] = value;
    }
        return collection;
}

console.log(updateRecords(5439, "artist", "Bowoade"));

console.log(updateRecords(2468, "tracks", "ikeja electric"));

// iterate with "While Loops" ,,loops allow you to run same code several times
var nArray = [];

var i = 0;
while (i < 50) {
    nArray.push(i);
    i++;
}
console.log(nArray);

// iterate with "For Loops"..most comman type of loop in Js
var vArray = [];

for (var i = 0; i < 10; i++) {
    vArray.push(i);
}
console.log(vArray);

// iterate odd numbers with a For Loop

var oddArray = [];

for (var i = 1; i < 10; i+=2) {
    oddArray.push(i);
}
console.log(oddArray);

// even number
var evenArray = [];

for (var i = 0; i < 10; i+=2) {
    evenArray.push(i);
}
console.log(evenArray);

//Count backwards with a For loop
var backCount = [];

for (var i = 10; i > 0; i--) {
    backCount.push(i);
}
console.log(backCount);

// iterate through an Array with a For Loop
var mArr = [1, 4, 5, 6];
var total = 0;

for (var i = 0; i < mArr.length; i++) {
    total += mArr[i];
}
console.log(total);

//Nesting for loop...(using multiply function to multiply Arrays inside array)
function multAll(Arr) {

    var product = 1;

    for (var i = 0; i < Arr.length; i++) {

        for (var j = 0; j < Arr[i].length; j++) {

            product *= Arr[i][j];
        }
    }
    return product;
}

var product = multAll([[1, 2], [3, 4], [5, 6, 7, 8]]);

console.log(product);

// iterate with Do...while Loops
var mAr = [];
var i = 10;

 do {
    mAr.push(i);
    i++;
} while (i < 5)

console.log(i, mAr);

// Profile Lookup
var contacts = [
    {
        "firsName": "Femi",
        "lastName": "Laizer",
        "number": "08164577260",
        "likes": ["games", "coding", "painting"]
    },
    {
        "firsName": "ronke",
        "lastName": "omotosho",
        "number": "08164984550",
        "likes": ["table", "cake", "chair"]
    },
    {
        "firsName": "kemi",
        "lastName": "Palace",
        "number": "08024602264",
        "likes": ["rice", "cooking", "dance"]
    },
    {
        "firsName": "koko",
        "lastName": "kuku",
        "number": "07082686889",
        "likes": ["phones", "movies", "card"]
    },
];

function lookProfile(name, prop) {

    for (var i = 0; i < contacts.length; i++) {

        if (contacts[i].firstName === name) {
            return contacts[i][prop] || "No such property";
        }
    }
        return "No such contact";
}

var data = lookProfile("kemi", "likes");

console.log(data);

// Generate Random Fractions
function randomFraction() {

    return Math.random();
}

console.log(randomFraction());

//Generate random Whole Numbers
var randNum0and19 = Math.floor(Math.random() * 20);

function randomWhole() {

    return Math.floor(Math.random());
}

console.log(randomWhole());

//Genrate Random Whole Numbers Within a Range
function randRange(minNum, maxNum) {

    return Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
}

var rangeRandom = randRange(5, 15);

console.log(rangeRandom);

// Use the parseInt Function
function convertToInt(str) {

    return parseInt(str);
}
console.log(convertToInt("56"));

//Use the parseInt Function with a Radix (Radis specify the base of the number e.g base 2)

function convertInt(str) {

    return parseInt(str, 2);
}
console.log(convertInt("10011"));

//Use the Conditional (Ternary) Operator ? : ;......short form of if else statement
//condition? statement-if-true: statement-if-false;

function checkEqual(a, b) {

 return a === b ? true : false;
}

console.log(checkEqual(1, 2));

//Use multiple Conditional (Ternary) Operators
function checkSign(num) {

    return num > 0 ? "positive" : num < 0 ? "negative" : "zero";
}

console.log(checkSign(87));

// Differences Between the var and let Keywords (let does not allow you to declare a variable twice)
function checkScope() {

    if (true) {
        let i = "Black girls";
        console.log("i here is: ", i);
    }
    let i = "moms";
    console.log("i here is: ", i); //because "let was used at the same point, i changed"
    return i;                      //if you use let in the same {} you will get error
}

checkScope();

//Declare a Read-Only variable with the cont keyword
//You cannot reassign a const

function printTimes(str) {

    const sentence = str + " is cool!";

    //sentence = str + " is amazing!"; //sentence is a const, ,you will get error by reassining it

    for (var i = 0; i < str.length; i+=2) {
        console.log(sentence);
    }
}
//printTimes("Femi Laizer");

//Mutate and Array Declared with const
const s = [5, 7, 2];

function editPlace() {

   // "use strict";
    //s = [2, 5, 7]; (s cannot be reassigned, but we can use the index to change the array as shown below)

    s[0] = 2;
    s[1] = 5;
    s[2] = 7;
}

editPlace();
console.log(s);

//Prevent Object Mutation
function freezeObj() {
    "use strict";

    const MATH_CONSTANTS = {
        PI: 3.14
    };

    //This object.freeze will make sure that PI did not change
    Object.freeze(MATH_CONSTANTS);

    try {
        MATH_CONSTANTS.PI = 99;
    }   catch ( ex ) {
        console.log(ex);
    }
        return MATH_CONSTANTS.PI;
}
const PI = freezeObj();

console.log(PI);


//Use Arrow Functions to Write Concise Anonymous Functions
var magic = function () {
    return new Date();
};
//we can rewrite the above code as shown below
const maggi = () => new Date();

//Write Arrow Functions with Parameters
var myConcat = function(arr1, arr2) {
    return arr1.concat(arr2);
};
console.log(myConcat([1, 2], [3, 4, 5]));
//We can rewirte the above as shown below
const myConc = (ar1, ar2) => ar1.concat(ar2);

console.log(myConc([1, 2], [3, 4, 5]));

//Write Higher Order Arrow Functions
const realArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];

            //the filter was used to do the calculation
const squareList = (arr) => {
        const squaredInt = arr.filter(num => Number.isInteger(num) && num > 0).map(x => x * x);
        return squaredInt;
};

const squaredInt = squareList(realArray);
console.log(squaredInt);

//Write higher Order Arrow Functions
const increment = (function() {
    return function increment(number, value = 1) {
        return number + value;
        };
})();
console.log(increment(5, 2)); //2 is the value here added to 5
console.log(increment(5))// value is not added here so it will be 1 added to 5 as set above

//Use the Reset Operator with Function Parameters (reset is "...")
//The codes below should give the same answer
const sm = (function() {
    return function sm(x, y, z) {
        const args = [x, y, z];
        return args.reduce((a, b) => a + b, 0);
    };
})();
console.log(sm(1, 2, 3));
//This should also work
const smile = (function() {
    return function smile(...args) { //the ... is the reset operator
       
        return args.reduce((a, b) => a + b, 0);
    };
})();
console.log(smile(1, 2, 3, 4));//If you keep adding numbers here it will continue to sum them all


//Use the Spread Operator to Evaluate Array In-Place
const arr1 = ['Jan', 'Feb', 'Mar', 'Apr', 'May'];

let arr2;
(function() {
    arr2 = [...arr1];
    arr1[0] = 'potato'
})();

console.log(arr2);

//Use destructuring Assignment to Assign Variable from Objects
var voxel = {x: 3.6, y: 7.4, z: 6.54};

/*var x = voxel.x; //This is the old style of reassigning value of object to another variable
var y = voxel.y;
var z = voxel.z; 

const { x : a, y : b, z : c } = voxel; //This is the new style (called destructuring)
*/


const AVG_TEMPERATURES = {
    today: 77.5,
    tomorrow: 79
};

function getTomorrowTem(avgTemp) {
    //"use strict";

    const { tomorrow : tempOfTomorrow } = avgTemp;

    return tempOfTomorrow;
}

console.log(getTomorrowTem(AVG_TEMPERATURES));


//Destructuring Assignment with Nested Objects
const LOCAL_FORECAST = {
    today: { min: 72, max: 83 },
    tomorrow: { min: 73.3, max: 84.6 }
};

function getMax(forecast) {
    "use strict";

    const { tomorrow : { max : maxTom }} = forecast;

    return maxTom;
}

console.log(getMax(LOCAL_FORECAST));

//Use Destructuring Assignment to Assign VAriables from Arrays
const [z, x, , y] = [1, 2, 3, 4, 5, 6]; //The empty , means the number is skipped
console.log(z, x, y);

let a1 = 8, a2 = 6;
(() => {
    "use strict";
    [a1, a2] = [a2, a1] //We have reversed the numbers of a and b
})();
console.log(a1);
console.log(a2);

//Use Destructuring Assignment with the Reset Operator
const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function removeFirstTwo(list) {

    const [ , , ...arr] =  list;

    return arr;
}
const arr = removeFirstTwo(source);
console.log(arr);
console.log(source);


//Use Destructuring Assignment to Pass an Object as a Function's Parameters
const stats = {
    max: 56.78,
    standard_deviation: 4.34,
    median: 34.54,
    mode: 23.87,
    min: -0.75,
    average: 35.85
};

const half = (function() {

    return function half({ max, min }) {
        return (max + min) / 2.0;
    };
})();
console.log(stats);
console.log(half(stats));


//Create Strings Using Template Literals
 const persons = {
     name: "Femi Laizer",
     age: 56
 }

 const greeting = `Hello, my name is ${persons.name}!
 I am ${persons.age} years old.`;

 console.log(greeting);

const result = {
    success: ["max-length", "no-amd", "prefer-arrow-functions"],
    failure: ["no-var", "var-on-top", "linebreak"],
    skipped: ["id-blacklist", "no-dup-keys"]
};
function makeList(arrs) {
    const resultDisplayArray = [];

    for (let i = 0; i < arrs.length; i++) {
        resultDisplayArray.push(`<li class="text-warning">${arrs[i]}</li>`)
    }
    return resultDisplayArray;
}

const resultDisplayArray = makeList(result.failure);
console.log(resultDisplayArray);

//Write Concise Object Literal Declaration Using Simple Fields
const createPerson = (name, age, gender) => {

    return {
        name: name,
        age: age,
        gender: gender
    };
};

console.log(createPerson("Shola Adekoya", 56, "male"));

//This is shorter version
const createName = (name, age, gender) => ( {name, age, gender} );

console.log(createName("Shola Adekoya", 56, "male"));

//Write Concise Declarative Functions
const bicycle = {
    gear: 2,
    setGear: function(newGear) {
        "use strict";
        this.gear = newGear;
    }
};

bicycle.setGear(3);
console.log(bicycle.gear);
//This is a short form
const bicycles = {
    gear: 2,
    setGears(newGears) {
        "use strict";
        this.gear = newGears;
    }
};

bicycles.setGears(3);
console.log(bicycles.gear);

//Use class Syntacx to Define a Constructor Function
var SpaceShuttle = function(targetPlanet) {
    this.targetPlanet = targetPlanet;
}

var zeus = new SpaceShuttle('Jupiter');

console.log(zeus.targetPlanet);
//This is another way of doing it
class Space_Shuttle {
    constructor(targetPlanets){
        this.targetPlanets = targetPlanets;
    }
}
var zeuss = new Space_Shuttle('Jupiter');

console.log(zeuss.targetPlanets);

//Using Class and Constructor in a Function
function makeClass() {
    class Vegetable {
        constructor(name){
            this.name = name;
        }
    }
    return Vegetable;
}
const Vegetable = makeClass();
const carrot = new Vegetable('carrot');
console.log(carrot.name);

//Use getters and setters to Control Access to an Object
/*class Book {
    constructor(author)  {
        this.author = author;
    }

    get writer(){
        return this._author;
    }

    set writer(updatedAuthor){
        this._author = updatedAuthor;
    }
}*/

function makeClass() {
    class Thermostat {
        constructor(temp) {
            this._temp = 5/9 * (temp - 32);
        }

        get temperature(){
            return this._temp;
        }

        set temperature(updatedTemp){
            this._temp = updatedTemp;
        }
    }

    return Thermostat;
}
const Thermostat = makeClass();
const thermos = new Thermostat(76);
let temp = thermos.temperature;
thermos.temperature = 26;
temp = thermos.temperature;
console.log(temp);

//Understand the Differences Between Import and Require
//Use this code to import from another Js file
/*import { capitalizeString } from "./stateOle";
const cap = capitalizeString("femi");

console.log(cap);*/

//Use export to Reuse a Code Block
/*const capitalizeString = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

export { capitalizeString };

export const foo = "bar";
export const bar = "foo"; */

//Use * to Import Everything from  a File
/* import * as capitalist from "capitalString";

//Create an Export Fallback with export default
export default function subtract(x, y) { return x - y;}

//Import a Default Export
import subtract from "math_functions";

subtract(7, 4);




















































































