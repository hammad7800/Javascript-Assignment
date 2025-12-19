// Question No 1

//    var num = prompt("Enter a positive number:");
//     num = Number(num);

//     document.write("<h3>Number: " + num + "</h3>");
//     document.write("<h3>Round off value: " + Math.round(num) + "</h3>");
//     document.write("<h3>Floor value: " + Math.floor(num) + "</h3>");
//     document.write("<h3>Ceil value: " + Math.ceil(num) + "</h3>");

// Question No 2

    // var num = prompt("Enter a negative  number:");
    // num = Number(num);

    // document.write("<h3>Number: " + num + "</h3>");
    // document.write("<h3>Round off value: " + Math.round(num) + "</h3>");
    // document.write("<h3>Floor value: " + Math.floor(num) + "</h3>");
    // document.write("<h3>Ceil value: " + Math.ceil(num) + "</h3>");

// Question No 3

//    var num = prompt("Enter a number:");
//     num = Number(num);

//     document.write("<h3>Number: " + num + "</h3>");
//     document.write("<h3>Absolute value: " + Math.abs(num) + "</h3>");

// Question No 4

// var dice = Math.floor(Math.random() * 6) + 1;

//  document.write("<h3>Random Dice Value: " + dice + "</h3>");

// Question No 5

//   var toss = Math.floor(Math.random() * 2) + 1;

//     if (toss === 1) {
//         document.write("<h3>Random Coin Value: Heads</h3>");
//     } else {
//         document.write("<h3>Random Coin Value: Tails</h3>");
    // }    

// Question No 6

//  var randomNum = Math.floor(Math.random() * 100) + 1;

//     document.write("<h3>Random Number between 1 and 100: " + randomNum + "</h3>")

// Question No 7

    // var weight = prompt("Enter your weight:");
    // var parsedWeight = parseFloat(weight);

    // document.write("<h3>Your weight is: " + parsedWeight + " kgs</h3>");

// Question No 8

// var secretNumber = Math.floor(Math.random() * 10) + 1;
// var userGuess = prompt("Guess the secret number (1 to 10):");

// userGuess = Number(userGuess);
// if (userGuess === secretNumber) {
// document.write("<h3>Congratulations! You guessed the correct number.</h3>");
// } else {
// document.write("<h3>Sorry! The secret number was " + secretNumber + ".</h3>");}


// Chapter 31 to 34

// Question No 1

//  var now = new Date();

// document.write("Current Date and Time: " + now)

// Question No 2

//   var months = ["January", "February", "March", "April",
//         "May", "June", "July", "August",
//         "September", "October", "November", "December"
//     ];

// var now = new Date();
// var monthIndex = now.getMonth();
//  alert("Current Month: " + months[monthIndex]);

// Question No 3

//   var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

//     var now = new Date();
//     var dayIndex = now.getDay();
//     var dayName = days[dayIndex];

//     alert("Today is: " + dayName);

// Question No 4

//  var today = new Date();
//     var day = today.getDay();

//     if (day === 0 || day === 6) {
//         alert("It's Fun day");
//     }

// Question No 5

//  var today = new Date();
//     var date = today.getDate(); 

//     if (date < 16) {
//         document.write("First fifteen days of the month");
//     } else {
//         document.write("Last days of the month");
//     }

// Question No 6

//    var now = new Date();

//     minutesSince1970 = Math.floor(now.getTime() / (1000 * 60));

//     document.write("Minutes since Jan 1, 1970: " + minutesSince1970);

// Question No 7

//   var now = new Date();
//     var hours = now.getHours(); // 0–23

//     if (hours < 12) {
//         alert("Its PM");
//     } else {
//         alert("Its AM");
//     }

// Question No 8

//  var laterDate = new Date(2020, 11, 31);

//     document.write("Later Date: " + laterDate);

// Question No 9

    // var ramadanStart = new Date(2015, 5, 18); // June = 5 (0-based)
    // var today = new Date();

    // var diffTime = today.getTime() - ramadanStart.getTime();
    // var diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

    // alert(diffDays + " days have passed since 1st Ramadan, 2015");

// Question No 10


//    var referenceDate = new Date(); 
//     var start2015 = new Date(2015, 0, 1); 

//     var diffMilliseconds = referenceDate.getTime() - start2015.getTime();
//     var diffSeconds = Math.floor(diffMilliseconds / 1000);

//     document.write("Seconds elapsed between Jan 1, 2015 and now: " + diffSeconds + " seconds");

// Question No 12

//  var currentDate = new Date();
//     alert("Current Date: " + currentDate);

//     currentDate.setFullYear(currentDate.getFullYear() - 100);

//     alert("Date 100 years back: " + currentDate);


// Question No 13

    // var age = prompt("Enter your age:");

    // var today = new Date();
    // var currentYear = today.getFullYear();

    // var birthYear = currentYear - age;

    // document.write("Your birth year is: " + birthYear);

// // Question No 14
// // Yeah wala AI tools ki helps se kra hai .

//     var customerName = prompt("Enter Customer Name:");
    
//     // Current Month
//     var months = ["January", "February", "March", "April", "May", "June", 
//                   "July", "August", "September", "October", "November", "December"];
//     var now = new Date();
//     var currentMonth = months[now.getMonth()];

//     // Billing Details
//     var unitsConsumed = parseFloat(prompt("Enter number of units consumed:"));
//     var chargesPerUnit = parseFloat(prompt("Enter charges per unit:"));

//     // Calculations
//     var netAmount = unitsConsumed * chargesPerUnit;
//     netAmount = netAmount.toFixed(2); // Round to 2 decimals

//     var latePaymentSurcharge = 350; // example fixed surcharge
//     var grossAmount = (parseFloat(netAmount) + latePaymentSurcharge).toFixed(2);

//     // Display Bill
//     document.write("<h2>K-Electric Bill</h2>");
//     document.write("<b>Customer Name:</b> " + customerName + "<br>");
//     document.write("<b>Month:</b> " + currentMonth + "<br>");
//     document.write("<b>Number of units:</b> " + unitsConsumed + "<br>");
//     document.write("<b>Charges per unit:</b> " + chargesPerUnit.toFixed(2) + "<br>");
//     document.write("<b>Net Amount Payable (within Due Date):</b> " + netAmount + "<br>");
//     document.write("<b>Late Payment Surcharge:</b> " + latePaymentSurcharge.toFixed(2) + "<br>");
//     document.write("<b>Gross Amount Payable (after Due Date):</b> " + grossAmount + "<br>");
