// Task 0 : (Example) write a function that takes 2 numbers and return the Sum of them

const add = (num1, num2) => {
    return num1 + num2
}

console.log(add(5,10))

// Task1: Create a function that takes the age in years 
// and returns the age in seconds. ex: age = 25 years , Notes: 1 year = 365 days
const age = (agenumber)=> {
    return agenumber*365*24*3600
}
console.log(age(12))

// Task2: Create a function that takes a number and return an array of three numbers: half of the number, quarter of the number and an eighth of the number. ex: halfQuarterEighth(6) ➞ [3, 1.5, 0.75]

const x = (number)=>{
    let array = [number/2 , number/4 , number/8];
    return array;
}
console.log(x(3));

// Task3: Create a function that takes a number as an argument and returns "even" for even numbers and "odd" for odd numbers.

const OddEven = (number)=>{
    if (number % 2 ==0)
    console.log("even")
    else 
    console.log("odd")
}
OddEven(2)

// Task 4 : Create a function which takes two strings (p1 and p2 ⁠— which represent player 1 and 2) as arguments and returns a string stating the winner in a game of Rock, Paper, Scissors.

// Each argument will contain a single string: "Rock", "Paper", or "Scissors". Return the winner according to the following rules:

// Rock beats Scissors
// Scissors beats Paper
// Paper beats Rock

// If p1 wins, return the string "The winner is p1". If p2 wins, return the string "The winner is p2" and if p1 and p2 are the same, return "It's a draw"

// Notes: All inputs will be strings ex: rps("Scissors", "Paper") ➞ "The winner is p1"

const game = (p1 , p2) => {
    if( (p1 == "Rock" && p2 == "Scissors") || (p1 == "Scissors" && p2 =="Paper") || (p1 == "Paper" && p2 == "Rock") ){
        return "The winner is p1"
    }else if( (p2 == "Rock" && p1 == "Scissors") || (p2 == "Scissors" && p1 =="Paper") || (p2 == "Paper" && p1 == "Rock") ){
        return "The winner is p2"
    }else return "It's a draw"
}
console.log(game( "Scissors" , "Rock"))
// Task 5 : Create a function that takes two numbers and a mathematical operator and returns the result. ex: calculate(4, 9, "+") ➞ 13
const calculator = (num1 , num2 , operator) => {
    if( operator == '+'){
        return num1 + num2
    }else if(operator == '-'){
        return num1 - num2
    }else if(operator == '*'){
        return num1 * num2
    }else if(operator == '/' && num2 != 0){
        return num1/num2
    }else return "unvalid opretaor"
}
console.log(calculator(  2, 4 , '*'))

// Task 6 : Let us have the following Array [65, 14 ,32 ,23 ,44, 14 ,27, 66 , 35]
// Create a function that examines the elements of the array
// It multiplies the odd numbers that are greater than 20 by 2 and the rest of the numbers are replaced by the number 100 
// In addition to having a counter that calculates the number of odd digits that are greater than 20 in the array
let array = [65, 14 ,32 ,23 ,44, 14 ,27, 66 , 35]; 
let counter = 0 ;
const arrayOdd = ()=>{
    
for (let index = 0; index < array.length; index++) {
    if((array[index] % 2 !=0) &&(array[index] >20)){
        {
            array[index]*=2;
            counter++;
        }
        }   
        else
        array[index]=100;    
}
console.log(array);
console.log(counter);
}
arrayOdd();
 
//Task 7 : write a function that takes two arguments, name and age Stores the characters of the name passed within an array  
// And if the age that is passed to the function is greater than 18, console 
// "You are Welcome"
// Or console
// "Not Found"
// Call the function and pass him your name and age

function NameAge (name ,age){
    if (age > 18)
    console.log("You are Welcome");
    else
    console.log("Not Found");
}
arrayname = ['b' , 'u' , 's' , 'h' , 'r' , 'a']
NameAge(arrayname,10);

// Task8: For section-1 , Match the class name to the content
const one =  document.getElementsByClassName("one");
const two =  document.getElementsByClassName("two");
const y = one[0].innerText;
one[0].innerText = two[0].innerText;
two[0].innerText = y;

// Task9: For section-2 , Write the function changeText() that toggle the text from "hello" to "yourWelcome" when you press the button.
// and write the function changeColor() which toggle the color of the text between any two colors you choose.
const text = document.getElementById("text");

const changeText = ()=>{
    if (text.innerText == "hello") {
        text.innerText =  "yourWelcome"
    }
    else 
        text.innerText = "hello"
}
const changeColor = () =>{
    if (text.style.color == "black") {
        text.style.color =  "red"
    }
    else 
        text.style.color = "black"
}

// Task10 : in section .container you have 3 buttons, Change container background color like button color on click

const graybutton = document.querySelector(".container .gray")
const goldbutton = document.querySelector(".container .gold")
const orangebutton = document.querySelector(".container .orange")
const container = document.querySelector(".container") ;
graybutton.addEventListener('click' , ()=>{
    container.style.backgroundColor = "gray";
})
orangebutton.addEventListener('click' , ()=>{
    container.style.backgroundColor = "orange";
})
goldbutton.addEventListener('click' , ()=>{
    container.style.backgroundColor = "gold";
})