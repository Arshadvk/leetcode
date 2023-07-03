// 2. Add Two Numbers
// Medium
// 26.7K
// 5.2K
// Companies
// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

const l1 = [2,4,3];
const l2 = [5,6,4];
var addTwoNumbers = function(l1, l2) {
   
    const num1 = parseInt(l1.join(''));
    const num2 = parseInt(l2.join(''));
    
    const sum = num1+num2

    const stringArray = String(sum).split('');

    const numberArray = stringArray.map(char => parseInt(char)) 

    const result = numberArray.reverse();
    return result
};
const array = addTwoNumbers(l1,l2)
console.log(array)