// Question no 1

// var arr = [[],[],[]]

// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr[2]);

// Question No 2

// var arr = [[0],[1],[2],[13]]
// var arr1 = [[4],[5],[6],[17]]
// var arr2 = [[8],[9],[10],[11]]

// document.write(arr[0])
// document.write(arr[1])
// document.write(arr[2])
// document.write(arr[3])
// document.write(arr1[0]+ "<br>" )
// document.write(arr1[1] )
// document.write(arr1[2])
// document.write(arr1[3])
// document.write(arr2[0] + "<br>")
// document.write(arr2[1])
// document.write(arr2[2])
// document.write(arr2[3])

// Question No 3

// for (var i = 1;i<11;i++){
//     document.write(i + '<br>')

// }

// Question No 4

// var num = prompt("Enter a number")
// var length = +prompt("Enter table length:")
// num = Number (num)

// for (var i = 1; i<=length;i++){
//     document.write(`${num} x ${i} = ${num*i} <br>`)
// }

// Question No 5
// var arr =["apple","mango","banana","strawberry","orange"  ];

// for(var i = 0; i<arr.length;i++ ){
//     document.write(arr[i] + "<br>")
    
// }

// var fruits = ["apple","mango","banana","strawberry","orange"];

// for (var i = 0; i < fruits.length; i++) {
//     document.write("Element at index " + i + " is " + fruits[i] + "<br>");
// }

// Question No 6

// a)

// for (let i = 1; i <= 15; i++) {
//     document.write(i + (i < 15 ? ", " : ""));
// }

// b)

// for (let i = 10; i >= 1; i--) {
//     document.write(i + (i > 1 ? ", " : ""));
// }


// c)

// for (let i = 0; i <= 20; i += 2) {
//     document.write(i + (i < 20 ? ", " : ""));
// }

// d)

// for (let i = 1; i < 20; i += 2) {
//     document.write(i + (i < 19 ? ", " : ""));
// }

// e)

// for (let i = 2; i <= 20; i += 2) {
//     document.write(i + "k" + (i < 20 ? ", " : ""));
// }

// Question No 7

// var A = ["cake", "apple pie", "cookie", "chips", "patties"];

// var userInput = prompt("Welcome to ABC Bakery. What do you want to order?").toLowerCase();

// var index = A.indexOf(userInput);

// if (index !== -1) {
//     alert(userInput + " is available at index " + index + " in our bakery.");
// } else {
//     alert("We are sorry, " + userInput + " is not available in our bakery.");
// }

// Question No 8

// let A = [24, 53, 78, 91, 12];

// let largest = A[0];

// for (let i = 0; i < A.length; i++) {
//     if (A[i] > largest) {
//         largest = A[i];
//     }
// }

// console.log("The largest number is:", largest);

// Question No 9

// let A = [24, 53, 78, 91, 12];

// let smallest = A[0]; 

// for (let i = 0; i < A.length; i++) {
//     if (A[i] < smallest) {
//         smallest = A[i];
//     }
// }

// console.log("The smallest number is:", smallest);


// Question No 10

// for (let i = 1; i <= 100; i++) {
//     if (i % 5 === 0) {
//         console.log(i);
//     }
// }