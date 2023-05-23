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