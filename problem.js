// Suppose that you have a array that's contained positive and negative value 
// like numbers = [-10,20, 30, -40, 60, -2, 8,3, 7 , 2];
// You have to find the positive value and store in an another array.


const numbers = [-10,20, 30, -40, 60, -2, 8,3, 7 , 2];

// Find positive value
function findPositiveValue(number){
    if(number >= 0)
    return number;
}

// Make an another array and store value;
function positveNumber(numbers,callBack){
    const myArray = [];
    console.log('showing positive result: ');
    for(n of numbers){
        if(callBack(n)){
            myArray.push(n);
        }
    }
    return myArray;

}

let showNewArray = positveNumber(numbers,findPositiveValue);

console.log(showNewArray);