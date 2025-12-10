// Chapter No 1

// alert("Welcome to Javascript")

// var user = prompt("What is your user name")
// alert(user)

// var color = prompt("Ask your favorutie color")
// alert(color)

// Chapter No 2

// var firstName = "Muhammad"
// var lastName = "Hammad"
// alert(firstName + lastName)

// var city = "Karachi"
// alert("You live in " + city)

// var hobby = "Cricket"
// alert(hobby)

// Chapter No 3

// var num1 = 4
// var num2 = 6
// alert(num1 + num2)

// var marks = prompt("Enter your marks:");

// if (marks >= 50) {
//     alert("Pass");
// } else {
//     alert("Fail");
// }

// var age = prompt("Enter your age:");

// if (age > 18) {
//     alert("You are above 18");
// }

// Chapter No 4

// var userName = "Hammad";
// var totalMarks = 500;
// var isActive = true;

// alert("Variables created successfully!");

// Illegal variable names (these will cause errors if used):
// var 123name = "Ali";
// var my-name = "Test";
// var var = 10;     // "var" is a reserved keyword

// var variables = ["userName", "totalMarks", "isActive"];

// alert(variables);

// Chapter No 5

// var num1 = 10;
// var num2 = 5;

// var sum = num1 + num2;
// var diff = num1 - num2;

// alert("Sum = " + sum + "\n Sum =   " + diff);

// var num1 = 12;
// var num2 = 4;

// var product = num1 * num2;
// var quotient = num1 / num2;
// var remainder = num1 % num2;

// alert(
//     "Product = " + product +
//     "\nQuotient = " + quotient +
//     "\nRemainder = " + remainder
// );


// Chapter No 6

// var num = 10;

// num++;   // increment
// num--;   // decrement

// alert("Result: " + num);

// var a = 5;

// a += 3;  // a = a + 3
// a -= 2;  // a = a - 2

// alert("Updated value: " + a);

// var x = 6;

// x *= 2;  // x = x * 2
// x /= 3;  // x = x / 3

// alert("Final value: " + x);

// Chapter No 7

// var a = 10;
// var b = 5;
// var c = 2;

// var result = (a + b) * c;

// alert("Result: " + result);

// var x = 8;
// var y = 3;
// var z = 2;

// var result = x + y * z - 4;

// alert("Final result: " + result);

// var num1 = 12;
// var num2 = 4;
// var num3 = 2;

// var result = (num1 - (num2 + num3)) * 2;

// alert("Calculated result: " + result);

//  Chapter No 8

// var firstName = "Hammad";
// var lastName = "Memon";

// var fullName = firstName + " " + lastName;

// alert("Full Name: " + fullName);

// var city = "Karachi";
// var greeting = "Welcome to ";

// alert(greeting + city + "!");

// var part1 = "Hello";
// var part2 = "there,";
// var part3 = "have a nice day!";

// var message = part1 + " " + part2 + " " + part3;

// alert(message);

// Chapter No 9

// var color = prompt("Enter your favorite color:");
// alert("Your favorite color is " + color);

// var age = prompt("Enter your age:");
// alert("You are " + age + " years old");

// var fruit = prompt("Enter your favorite fruit:");
// alert("Your favorite fruit is " + fruit);

// Chapter No 10

// var num = 15;

// if (num > 10) {
//     alert("Number is greater than 10");
// }


// var marks = 65;

// if (marks >= 50) {
//     alert("Pass");
// }


// var age = 16;

// if (age < 18) {
//     alert("Minor");
// }

// Chapter No 11

// var num1 = 10;
// var num2 = 5;

// alert(num1 > num2); 

// var a = 7;
// var b = 7;

// if (a == b) {
//     alert("Numbers are equal");
// } else {
//     alert("Numbers are not equal");
// }


// var x = 4;
// var y = 9;

// alert(x <= y); 

// Chapter No 12

// var marks = 85;

// if (marks >= 90) {
//     alert("A");
// } else if (marks >= 70) {
//     alert("B");
// } else {
//     alert("C");
// }

// var age = 15;

// if (age < 12) {
//     alert("Child");
// } else if (age < 18) {
//     alert("Teen");
// } else {
//     alert("Adult");
// }


// var temp = 30;

// if (temp > 35) {
//     alert("Hot");
// } else if (temp >= 25) {
//     alert("Warm");
// } else {
//     alert("Cold");
// }

// Chapter No 13

// var num = 8;

// if (num > 0 && num % 2 == 0) {
//     alert("Number is positive and even");
// }

// var marks = 75;

// if (marks >= 50 && marks <= 100) {
//     alert("Valid Marks");
// }


// var num = 15;

// if (num % 3 == 0 && num % 5 == 0) {
//     alert("Number is divisible by 3 and 5");
// }


// Chapter No 14

// var age = 20;
// var hasID = true;

// if (age >= 18) {
//     if (hasID) {
//         alert("Allowed");
//     } else {
//         alert("Not Allowed");
//     }
// } else {
//     alert("Not Allowed");
// }


// var num = 8;

// if (num > 0) {
//     if (num % 2 == 0) {
//         alert("Number is positive and even");
//     } else {
//         alert("Number is positive but odd");
//     }
// } else {
//     alert("Number is not positive");
// }


// var marks = 55;
// var extraCredit = true;

// if (marks >= 50) {
//     if (extraCredit) {
//         alert("Pass with extra credit");
//     } else {
//         alert("Pass");
//     }
// } else {
//     alert("Fail");
// }

// Chapter No 15

// var fruits = ["Apple", "Banana", "Mango", "Orange", "Grapes"];
// alert(fruits);

// var numbers = [10, 20, 30, 40, 50];
// alert("First: " + numbers[0] + ", Last: " + numbers[numbers.length - 1]);

// var numbers = [10, 20, 30, 40, 50];
// alert("First: " + numbers[0] + ", Last: " + numbers[numbers.length - 1]);

// Chapter No 16

// var fruits = ["Apple", "Banana", "Mango"];
// fruits.push("Orange");
// alert(fruits);

// var fruits = ["Apple", "Banana", "Mango", "Orange"];
// fruits.pop();
// alert(fruits);


// var fruits = ["Banana", "Mango", "Orange"];
// fruits.unshift("Apple"); // add at beginning
// fruits.shift();          // remove first element
// alert(fruits);


// Chapter No 17

// var fruits = ["Apple", "Mango", "Banana"];
// fruits.splice(1, 0, "Orange"); // insert "Orange" at index 1
// alert(fruits);


// var fruits = ["Apple", "Orange", "Mango", "Banana"];
// fruits.splice(2, 1); // remove element at index 2
// alert(fruits);


// var fruits = ["Apple", "Orange", "Mango", "Banana"];
// var part = fruits.slice(1, 3); // extract from index 1 to 2
// alert(part);


// Chapter No 18

// for (var i = 1; i <= 5; i++) {
//     alert(i);
// }

// var fruits = ["Apple", "Banana", "Mango"];
// for (var i = 0; i < fruits.length; i++) {
//     alert(fruits[i]);
// }


// for (var i = 1; i <= 10; i++) {
//     if (i % 2 !== 0) {
//         alert(i);
//     }
// }


// Chapter No 19

// var numbers = [2, 5, 8, -3, 7];

// for (var i = 0; i < numbers.length; i++) {
//     if (numbers[i] < 0) {
//         break;
//     }
//     alert(numbers[i]);
// }


// var numbers = [1, 3, 4, 7];
// var flag = false;

// for (var i = 0; i < numbers.length; i++) {
//     if (numbers[i] % 2 === 0) {
//         flag = true;
//         break;
//     }
// }

// alert(flag); // true if any even number exists


// var numbers = [10, 30, 55, 40];

// for (var i = 0; i < numbers.length; i++) {
//     if (numbers[i] > 50) {
//         alert("Found number greater than 50: " + numbers[i]);
//         break;
//     }
// }


// Chapter No 20

// for (var i = 1; i <= 3; i++) {
//     for (var j = 1; j <= 10; j++) {
//         alert(i + " x " + j + " = " + (i * j));
//     }
// }


// var arr = [
//     [1, 2],
//     [3, 4],
//     [5, 6]
// ];

// for (var i = 0; i < arr.length; i++) {
//     for (var j = 0; j < arr[i].length; j++) {
//         alert(arr[i][j]);
//     }
// }

// var arr1 = [1, 2];
// var arr2 = [3, 4];

// for (var i = 0; i < arr1.length; i++) {
//     for (var j = 0; j < arr2.length; j++) {
//         alert(arr1[i] + " + " + arr2[j] + " = " + (arr1[i] + arr2[j]));
//     }
// }

// Chapter No 21

// var str = "hello world";
// alert(str.toUpperCase());

// var str = "HELLO WORLD";
// alert(str.toLowerCase());

// var str = "hello world";
// var capitalized = str.charAt(0).toUpperCase() + str.slice(1);
// alert(capitalized);

// Chapter No 22

// var str = "Hello World";
// alert("Length: " + str.length);

// var str = "Hello World";
// alert(str.slice(0, 3)); // "Hel"


// var str = "Hello World";
// alert(str.slice(-3)); // "rld"


// Chapter No 23

// var str = "The quick brown fox";
// var post = str.indexOf("brown");
// alert("Position of 'brown': " + pos);

// var str = "Hello World";
// var lastIndex = str.lastIndexOf("o");
// alert("Last index of 'o': " + lastIndex);


// var str = "JavaScript is fun";
// var exists = str.includes("Script");
// alert("Substring exists: " + exists);

// Chapter No 24

// var str = "Hello";
// alert("Character at index 2: " + str.charAt(2)); // "l"


// var str = "Hello";
// alert("Last character: " + str.charAt(str.length - 1)); // "o"


// var str = "Hello";
// var middleIndex = Math.floor(str.length / 2);
// alert("Middle character: " + str.charAt(middleIndex)); // "l"


// Chapter No 25

// var str = "I love JavaScript";
// var newStr = str.replace("JavaScript", "Python");
// alert(newStr);

// var str = "banana";
// alert(newStr); // "bonono"


// var str = "Hello Hello World";
// var newStr = str.replace("Hello", "Hi");
// alert(newStr); 
