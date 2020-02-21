// ### Exercise 1:
// - Use a for loop to print numbers -3 through 8

//variable set to -3 inside for loop/condition(as long as number is less than or equal to 8 continue loop)/keep adding to number 
for(let numbers=-3;numbers<=8;numbers++){
    console.log(numbers)
}
// ***************************************************
// ### Exercise A:
// - Print -10 through 5 using a counter and while loop.

let kount=-10
while(kount<=5){
    console.log(kount)
    kount++
}
// *****************************************************
// ### Exercise 2:
// - Use a for loop to count from -5 to 5 three times in a row

// for(let kount=-5;kount<=5;kount++{ // !! : missing your closing paren
//     console.log(kount)
    
// }
// *****not finished
// *****************************************************
// ### Exercise B:
// - Write a While loop that counts backwards from 10 to 0
// - Log the current count at the end of each iteration EXCEPT if the current count is ```5```

let count=10
while(count>=0){
    // !! : 5 should not print
    console.log(count)
    count--
}
// *****not finished
// ****************************************************
// ### Exercise 3:
// - Use a for loop to print only even numbers from -50 to 50

for(let numbers=-50;numbers<=50;numbers=numbers+2)
{
    console.log(numbers)
}
// ****************************************************
// ### Exercise C:
// - Create an empty `name_array`
let name_array=[""] // !! : an empty array can be initialized with the value []; no need for the empty quotes in the array
// - Ask the user ```Enter a word. Enter 'q' to quit.``` Add each word they enter to the array
let userName=prompt("Please enter a word. Enter 'q' to quit.")
 while(userName!=q){
    name_array.push(userName)
 } 
 console.log(name_array)
// - Create a while loop that will keep asking for words to add to the array until they enter 'q'
// - When the user enters 'q' use a **for** loop to print each word from the array

// *********not finished
// ******************************************************
