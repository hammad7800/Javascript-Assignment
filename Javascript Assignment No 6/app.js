// Q1

// var firstName = prompt("Enter your first name:");
// var lastName = prompt("Enter your last name:");

// var fullName = firstName  +  lastName;

// alert("Hello, " + fullName );

// Q2

// var mobile = prompt("Enter your favorite mobile phone name");

// document.write("My favorite mobile phone is: " + mobile + "<br>");

// Q3

// var word = "Pakistani";
// var index = word.indexOf("n");

// document.write("String: " + word + "<br>");
// document.write("Index of 'n': " + index);

// Q4

// var word = "Hello World";
// var lastIndex = word.lastIndexOf("r");

// document.write("String: " + word + "<br>");
// document.write("Last index of 'r': " + lastIndex);

// Q5

// var word = "Pakistani";
// var character = word.indexOf("t");

// document.write("String: " + word + "<br>");
// document.write("Index of t: " + character);

// Q6

// var firstName = prompt("Enter your first name:");
// var lastName = prompt("Enter your last name:");

// var fullName = firstName  +  lastName;

// alert("Hello, " + fullName );

// Q7

// var city = "Hyderabad";
// var newCity = city.replace("Hyder", "Islam");

// document.write("City: " + city + "<br>");
// document.write("After replacement: " + newCity);

// Q9

// var str = "472";           
// var num = Number(str);     

// document.write("Value: " + str + "<br>");
// document.write("Type: " + typeof str + "<br><br>");

// document.write("Value: " + num + "<br>");
// document.write("Type: " + typeof num);

// Q10

// var userInput = prompt("Enter any text:");
// var upperCase = userInput.toUpperCase();

// document.write("User Input: " + userInput + "<br>");
// document.write("Upper Case: " + upperCase);

// Q11

// var userInput = prompt("Enter any text:");

// var firstChar = userInput.slice(0,1).toUpperCase();
// var remainingChars = userInput.slice(1).toLowerCase();
// var titleCase = firstChar + remainingChars;

// document.write("User Input: " + userInput + "<br>");
// document.write("Title Case: " + titleCase);

// Q12

// var num = 35.36;

// // Convert number to string and remove the dot
// var str = num.toString().replace(".", "");

// document.write("Number: " + num + "<br>");
// document.write("String without dot: " + str);

// Q13

// var username = prompt("Enter your username:");

// var invalid = false;

// for (var i = 0; i < username.length; i++) {
//     var charCode = username.charCodeAt(i);

//     if (charCode === 64 || charCode === 46 || charCode === 44 || charCode === 33) {
//         invalid = true;
//         break;
//     }
// }

// if (invalid) {
//     alert("Please enter a valid username without [@ . , !]");
// } else {
//     document.write("Your username is: " + username);
// }

// Q14

// var A = ["cake", "apple pie", "cookie", "chips", "patties"];

// var userInput = prompt("Welcome to ABC Bakery! What do you want to order?")
// .toLowerCase(); 

// var itemFound = false;

// for (var i = 0; i < A.length; i++) {
//     if (A[i].toLowerCase() === userInput) {
//         itemFound = true;
//         break;
//     }
// }

// if (itemFound) {
//     alert(userInput + " is available at index " + i + " in our bakery.");
// } else {
//     alert("We are sorry, " + userInput + " is not available in our bakery.");
// }

// Q15

// var password = prompt("Enter your password:");
// var hasLetter = false;
// var hasNumber = false;

// for (var i = 0; i < password.length; i++) {
//     var code = password.charCodeAt(i);

//     if ((code >= 65 && code <= 90) || (code >= 97 && code <= 122)) {
//         hasLetter = true;
//     }

//     if (code >= 48 && code <= 57) {
//         hasNumber = true;
//     }
// }

// if (password.length < 6) {
//     alert("Password must be at least 6 characters long.");
// }
// else if (password.charCodeAt(0) >= 48 && password.charCodeAt(0) <= 57) {
//     alert("Password cannot start with a number.");
// }
// else if (!hasLetter || !hasNumber) {
//     alert("Password must contain both alphabets and numbers.");
// }
// else {
//     alert("Password is valid!");
// }

// Q16

// var university = "University of Karachi";

// var arr = university.split(""); 

// for (var i = 0; i < arr.length; i++) {
//     document.write(arr[i] + "<br>");
// }

// Q17

// var userInput = prompt("Enter any text:");
// var lastChar = userInput.charAt(userInput.length - 1);
// document.write("User Input: " + userInput + "<br>");
// document.write("Last Character: " + lastChar);

// Q18

// var text = "The quick brown fox jumps over the lazy dog";

// var lowerText = text.toLowerCase();

// var words = lowerText.split(" ");

// var count = 0;
// for (var i = 0; i < words.length; i++) {
//     if (words[i] === "the") {
//         count++;
//     }
// }

// document.write("Text: " + text + "<br>");
// document.write("Number of occurrences of 'the': " + count);
