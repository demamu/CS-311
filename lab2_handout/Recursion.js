"use strict";
/* 
Write a Recursive Version Write a recursive version of the 
following function that sum all the elements in an array:
function sum(array) {
    let sum = 0;
    for (const num of array) { sum += num; }
    return sum;
} 
*/
/**
 * @param  {array} array the array element to be added
 * @return {number} the sum total of the input 
 */
function sum(array){
    if(array.length==0){
        return 0;
    }
    else return array.pop() + sum(array);
}
let sampleArray =[1,2,3,4,5];
console.log(sum(sampleArray));


/**
 * Undo Recursion Write a non-recursive version of the following function 
    which returns the min element in an array:
    function min(array) {
    if (array.length > 1) {
        let other = min(array.splice(1));
        if (other < array[0]) {
            return other;
        }
    }
    return array[0];
}
 */
/**
 * @param  {array} array the input array to be checked
 * @returns {number} the minimum element from the array
 */
function min(array) {
    let minElement = array[0];
    for (let i = 1; i < array.length; i++) {
        if (minElement > array[i]) {
            minElement = array[i];

        }

    }
    return minElement;
};

let sampleArray2=[1,5,6,7,-3,9];
console.log(min(sampleArray2) );




