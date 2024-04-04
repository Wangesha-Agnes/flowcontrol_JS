//Write a program that takes in an array of numbers and consoles the first four items multiplied by itself  and the last two added by 10. Return the array with the new values
function changedArray(arr){
    const firstFour = arr.slice(0,4).map(item => item*2);
    const lastTwo = arr.slice(-2).map(item =>item+10);
    const newArr = firstFour.concat(lastTwo);
    console.log(newArr);
 }
 changedArray([5,6,7,8,8,9,3,6,])
 
 
 
 
 //Write a program that takes in the following array and use a while loop to iterate and break when the item is equal to the fourth index :let arrNum = [1,2,3,4,5,6,7,8,9];
 
 
 const numbers = (arrNum)=>{
    let i = 0;
    while(i<arrNum.length){
        if(i===4){
            break;
        }
        console.log(arrNum[i]);
        i++;
    }
 };
 let arrNum=[1,2,3,4,5,6,7,8,9];
 numbers(arrNum);
 
 
 //Write a function that takes in a an array of strings and use a continue statement when the item is at the second index:  let fruits= ['apple','plum','banana','strawberries','kiwi']
 
 
 const fruitsContinue = (arr)=> {
    for(let i =0; i<arr.length;i++){
     if(i===2){
        continue;
     }
     console.log(arr[i]);
    }
 };
 
 
 let fruits = ['apple','plum','banana','strawberries','kiwi']
 fruitsContinue(fruits);
 
 
 //Write a function that accepts an array of strings and console.logs each element using a for loop.
 const arrayOfStrings=(arrStr)=>{
    for (i=0; i<arrStr.length;i++){
        console.log(arrStr[i])
    }
 }
 arrayOfStrings(["Agnes","Dodohe","Wangesha"])
 
 //Write a JavaScript function that takes a string as input and reverses it using a while loop. The function should return the reversed string.

 function reverseString(str){
    let i = str.length
    while (i--){
        console.log(str[i])
    }
 }
 reverseString("Agnes")
 
 
 