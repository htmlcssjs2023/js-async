
// function displayResult(result){
//     console.log(result);
// }

// function addTwonubmer(n1, n2){
//     let add = n1 + n2;
//     displayResult(add);
// }

// addTwonubmer(10, 30);


// function displayResult(result){
//     console.log(result);
// }

// function addTwonubmer(n1, n2){
//     let add = n1 + n2;
//     return add;
// }

// displayResult(addTwonubmer(10, 20));


// function displayResult(result){
//     console.log(result);
// }

// function addTwonubmer(n1, n2, callback){
//     let add = n1 + n2;
//     callback(add);

// }

// addTwonubmer(10, 30, displayResult);

// Call Back function
// function showMyBirthDay(birthday){
//     console.log(birthday)
// }

// function birthDay(myCallBack){
    
//     let love = "I love you so much";
//     let hate = " I don't hate you!";

//     let expressionAboutYou = love + hate;
//     myCallBack(expressionAboutYou);
// }

// birthDay(showMyBirthDay);




// Create an Array
const myNumbers = [4, 1, -20, -7, 5, 9, -6];


// Remove negative numbers
function removeNegativeNumber(numbers, callback){
    const myArray = [];
    for(x of numbers){
        if(callback(x)){
            myArray.push(x);
        }
    }
    return myArray;
}
// call back function
function getPositiveValue(number){
    return number >= 0;
}

let showResult = removeNegativeNumber(myNumbers, getPositiveValue);
console.log(showResult);




