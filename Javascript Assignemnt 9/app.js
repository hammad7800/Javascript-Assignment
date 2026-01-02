// Chapter # 38 - 42


// Answer # 1

// function power(a, b) {
// var result = 1;
// for (var i = 1; i <= b; i++) {
//     result = result * a;
//   }
//   return result;
// }

// var a = 2;
// var b = 5;
// console.log(power(a, b)); // 32


// Answer # 2

// function isLeapYear(year) {
//   if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
//     return true;
//   } else {
//     return false;
//   }
// }

// var year = +prompt("Enter a year:");

// if (isLeapYear(year)) {
//   document.write(year + " is a Leap Year");
// } else {
//   document.write(year + " is NOT a Leap Year");
// }


// Answer # 3

// function calculateS(a, b, c) {
//   return (a + b + c) / 2;
// }

// function calculateArea(a, b, c) {
// var S = calculateS(a, b, c);
// var area = Math.sqrt(S * (S - a) * (S - b) * (S - c));
// return area;
// }

// var a = +prompt("Enter side a:");
// var b = +prompt("Enter side b:");
// var c = +prompt("Enter side c:");

// document.write("Area of Triangle is: " + calculateArea(a, b, c));


// Answer # 4

// function calculateAverage(m1, m2, m3) {
//   return (m1 + m2 + m3) / 3;
// }

// function calculatePercentage(m1, m2, m3) {
// var totalMarks = 300; 
//   return ((m1 + m2 + m3) / totalMarks) * 100;
// }

// function mainFunction() {
// var sub1 = +prompt("Enter marks of Subject 1:");
// var sub2 = +prompt("Enter marks of Subject 2:");
// var sub3 = +prompt("Enter marks of Subject 3:");

// var average = calculateAverage(sub1, sub2, sub3);
// var percentage = calculatePercentage(sub1, sub2, sub3);

// document.write("Average Marks: " + average + "<br>");
// document.write("Percentage: " + percentage + "%");
// }

// mainFunction();


// Answer # 5

// function customIndexOf(str, char) {
// for (var i = 0; i < str.length; i++) {
// if (str[i] === char) {
// return i; 
// }
// }
//   return -1;
// }

// var text = prompt("Enter a string:");
// var searchChar = prompt("Enter a single character to find:");
// var index = customIndexOf(text, searchChar);

// if (index !== -1) {
//   document.write("Character '" + searchChar + "' found at index: " + index);
// } else {
//   document.write("Character not found");
// }


// Answer # 6

// function removeVowels(sentence) {
// var result = "";
// var vowels = "aeiouAEIOU";

// for (var i = 0; i < sentence.length; i++) {
// if (vowels.indexOf(sentence[i]) === -1) {
//     result += sentence[i];
//     }
//   }
// return result;
// }

// var sentence = prompt("Enter a sentence (max 25 characters):");
// document.write("Sentence without vowels: " + removeVowels(sentence));


// Answer # 7

// function countDoubleVowels(text) {
// var count = 0;

// for (var i = 0; i < text.length - 1; i++) {
// var ch1 = text[i].toLowerCase();
// var ch2 = text[i + 1].toLowerCase();

// switch (ch1) {
// case 'a':
// case 'e':
// case 'i':
// case 'o':
// case 'u':

// switch (ch2) {
// case 'a':
// case 'e':
// case 'i':
// case 'o':
// case 'u':
// count++;
// break;
//         }
//         break;
//     }
//   }
// return count;
// }

// var sentence = "Pleases read this application and give me gratuity";
// document.write("Number of occurrences of two vowels together: " + countDoubleVowels(sentence));



// Answer # 8

// function kmToMeters(km) {
//   return km * 1000;
// }

// function kmToFeet(km) {
//   return km * 3280.84;
// }

// function kmToInches(km) {
//   return km * 39370.1;
// }

// function kmToCentimeters(km) {
//   return km * 100000;
// }

// var distance = +prompt("Enter distance between two cities (in km):");

// document.write("Distance in meters: " + kmToMeters(distance) + "<br>");
// document.write("Distance in feet: " + kmToFeet(distance) + "<br>");
// document.write("Distance in inches: " + kmToInches(distance) + "<br>");
// document.write("Distance in centimeters: " + kmToCentimeters(distance));


// Answer # 9

// function calculateOvertimePay(hoursWorked) {
// var overtimeRate = 12; 
// var overtimePay = 0;

// if (hoursWorked > 40) {
// var overtimeHours = hoursWorked - 40;
// overtimePay = overtimeHours * overtimeRate;
//   }

// return overtimePay;
// }

// var hours = +prompt("Enter total hours worked:");
// var pay = calculateOvertimePay(hours);

// document.write("Overtime Pay: Rs. " + pay);


// Answer # 10

// function calculateNotes(amount) {
// var notes = {hundred: 0, fifty: 0, ten: 0};

// notes.hundred = Math.floor(amount / 100);
// amount = amount % 100;

// notes.fifty = Math.floor(amount / 50);
// amount = amount % 50;

// notes.ten = Math.floor(amount / 10);
// amount = amount % 10;

// return notes;
// }

// var amount = +prompt("Enter the amount to withdraw (multiple of 10):");
// var result = calculateNotes(amount);

// document.write("You will have:<br>");
// document.write(result.hundred + " hundred notes<br>");
// document.write(result.fifty + " fifty notes<br>");
// document.write(result.ten + " ten notes<br>");

// if (amount % 10 !== 0) {
// document.write("Remaining amount " + (amount % 10) + " cannot be given in available denominations.");
// }


// Chapter # 43-48


// Answer # 1

// function showAlert() {
//     alert("Hello! You clicked the link.");
//   }


// Answer # 2

// var images = document.querySelectorAll(".mobile-img");

// images.forEach(function(img) {
// img.addEventListener("click", function() {
// alert("You clicked on " + img.alt); 
//   });
// });


// Answer # 3

// function deleteRow(button) {
// var row = button.parentNode.parentNode; 
// row.parentNode.removeChild(row);        
// }

// var students = [
// {name: "Ahmed", age: 18, grade: "A"},
// {name: "Ali", age: 19, grade: "B"},
// {name: "Sara", age: 18, grade: "A"},
// {name: "Mark", age: 20, grade: "C"},
// {name: "John", age: 21, grade: "B"},
// {name: "Mary", age: 19, grade: "A"},
// {name: "Zara", age: 18, grade: "B"},
// {name: "Tom", age: 20, grade: "C"},
// {name: "Lucy", age: 21, grade: "A"},
// {name: "David", age: 19, grade: "B"}
// ];

// var table = document.createElement("table");
// table.border = "1";
// table.style.borderCollapse = "collapse";

// var header = table.insertRow();
// header.innerHTML = "<th>Name</th><th>Age</th><th>Grade</th><th>Action</th>";

// students.forEach(function(student) {
// var row = table.insertRow();
// row.insertCell(0).innerText = student.name;
// row.insertCell(1).innerText = student.age;
// row.insertCell(2).innerText = student.grade;
  
// var deleteCell = row.insertCell(3);
// var deleteBtn = document.createElement("button");
// deleteBtn.innerText = "Delete";
// deleteBtn.onclick = function() {
// deleteRow(this); 
//   };
//   deleteCell.appendChild(deleteBtn);
// });

// document.body.appendChild(table);


// Answer # 4

// var img = document.getElementById("myImage");

// var originalSrc = img.src;
// var newSrc = "image2.jpg"; 

// img.addEventListener("mouseover", function() {
// img.src = newSrc;
// });

// img.addEventListener("mouseout", function() {
// img.src = originalSrc;
// });


// Answer # 5

// var counter = 0;

// var counterDisplay = document.getElementById("counterDisplay");
// var increaseBtn = document.getElementById("increaseBtn");
// var decreaseBtn = document.getElementById("decreaseBtn");

// function updateDisplay() {
//   counterDisplay.innerText = counter;
// }

// increaseBtn.addEventListener("click", function() {
//   counter++;
//   updateDisplay();
// });

// decreaseBtn.addEventListener("click", function() {
//   counter--;
//   updateDisplay();
// });

// updateDisplay();


// END----