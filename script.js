//// Operaters
//// Basic operators (+, -, *, /)
var a = 5;
var b = 9;

console.log("Result of sum ", a + b);

console.log("Result of substact ", a - b);

console.log("Result of multiply ", a * b);

console.log("Result of dividion ", a + b);

/// Comparison operation ( ===, !=, <, >, <=, >=)


console.log("a is equal to b ", a === b);

console.log("a is not equal to b ", a != b);

console.log("a is greater than to b ", a > b);

console.log("a is lessthan to b ", a < b);

console.log("a is equal to b ", a <= b);

console.log("a is equal to b ", a >= b);


//// Logical Operators


var c = true;
var d = false;

/// AND opereation

console.log("AND result is", c && d);

//// OR operator

console.log("OR result is", c || d);



///// If - else

//// if statement

var age = 20;

if(age > 18){
    console.log("You are Qualified for drived");
};

//// if-else statement

var age1 = 15;

if (age1 >= 18) {
    console.log("You are Qualified for drived");
} else {
    console.log("You are not qualified for driving");
};


///// if and else-if statement

var book = "math";

if(book === history){
    console.log("you select history book");
}

else if (book === "economics") {
    console.log("you select economics book");
}

else{
    console.log("you select math book");
}


///// Switch 

var grade = "A";

switch (grade) {
    case "A":
        console.log("Your grade is excelent");
        break;
        case "B":
            console.log("Your grade is pretty good");
            break;
            case "C":
        console.log("Your grade is good");
        break;
        case "D":
        console.log("Your grade is not good");
        break;

        case "E":
        console.log("Your grade is bad");
        break;
    default:
        console.log("you are failed");
        break;
}


/////// While Loop

var x = 1;
 while (x <= 10) {
    console.log("while loop " , x);
    x++;
 };

 ///// Do Loop

 var y = 0;
 do {
    console.log("do-while ", y);
    y++;
 } while (y = 0);


 ///// for loop

 var z = 5;

 for (let index = 1; index <= 10; index++) {
    console.log(index + " x " + z + " = " + index*z);
    
 }

//// Check if a given year is a leap year using if-else statements.

var years = prompt("Please enter years");

if (years % 4 ===0 || years % 100 === 0 || years % 400 === 0) {
    console.log("This year is leap year");
} else {
    console.log("This year is not leap year");
}
  
///// Convert a given temperature from Celsius to Fahrenheit using math operators

var temp =+ prompt("Please enter temperature");
 var fahrenheit = (temp * 9/5 ) + 32;
 console.log("Fahrenheit is => ", fahrenheit);

 //// Determine the largest number among three given numbers using if-else-if statements.

 var num1 = 56;
 var num2 = 76;
 var num3 = 34;

 if (num1 > num2 && num1 < num3) {
    console.log("Number 1 is greater than other two");
 }
 else if ( num2 > num1 && num2 > num3) {
    console.log("Number 2 is greater than other two");
    
 }
 else if( num3 > num1 && num3 > num2){
    console.log("Number 3 is greater than other two");

 }

 //// Calculate the sum of all even numbers from 1 to 100

 var sum = 0;

for (let index = 2; index <= 100; index+=2) {
    console.log("Sum of even number less than 100 is ", sum += index);
};

//// Calculate the sum of all odd numbers from 1 to 100

var odd = 0;
for (let index = 1; index <= 100; index+=2) {
    console.log("Sum of odd number less than 100 is ", odd += index);
};

//// find factorial of a number by using the while loop.

var factorial = 6;
var result = factorial;
while (factorial >= 1) {
   
    console.log("Factorial of 6 ",result );
     factorial--;
    result*=factorial;
  
};

////Check if a given string is a palindrome using if-else statements.

var palindrome = prompt("enter any things");

var result1 = palindrome.split("").reverse().join("");

if (result1 === palindrome) {
    alert("Word are palindrome");
} else {
    alert("Word are not palindrome");
}

//// find the prime number b/w 1-100..

function checkPrimeNumber() {
    var inputPrime = document.getElementById("result").value;

    var isPrime;

    for (let i = 2; i < inputPrime; i++) {
        isPrime = 1
        for (let j = 2; j < i/2 ; j++) {
            if(i % j === 0){
                isPrime = 0;
                break;
            }
            
        }
        
        if(isPrime=== 1){
            document.write(i + "<br>");
        }
    }
}

/// Create a program that prints the following pattern using nested for loops:

var row = 8;

for (let index = 1; index <= row; index++) {
    var pattern = " ";
    for (let j = 1; j < index ; j++) {
        pattern += " * ";
        
    }
    console.log(pattern);
}

































// function checkPrimeNumber() {
//     var number = document.getElementById("result").value;
//     var prime;
// for (let index = 2; index < number; index++) {
//      prime = 1;
//     for (let j = 2; j < index/2; j++) {
//         if (index % j === 0) {
//             prime = 0;
//             break;
//         }
        
//     }
//     if (prime === 1) {
//         document.write(index + "</br>");
//     }
    
// }


// }