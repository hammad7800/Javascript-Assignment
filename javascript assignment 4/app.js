// Question No 1
// var studentNames = []
// studentNames.push("student")
// console.log(studentNames);

// Question No 2

// var studentNames = new Array();
// studentNames.push("Ali");
// studentNames.push("Hammad");
// console.log(studentNames);

// Question No 3

// var arr = ['Ali','Hammad','Haris', 'Abdullah']
// console.log(arr);

// Question No 4
// var arr1 = [21,23,25,27,29]
// console.log(arr1);

// Question No 5
//  var arr2 = [true,false,true,true,false]
// console.log(arr2);

// Question No 6

// var mixarr = ['hammad',11,false,'ahmed',42,true]
// console.log(mixarr);

// Question No 7
// var arr = ["SSC", "HSC", "BCS","BS", "BCOM", "MS", "Phil", "PhD"]
// document.write("<h2>Qualifications in Pakistan:</h2>");
// document.write(arr[0] + '<br>')
// document.write(arr[1] + '<br>')
// document.write(arr[2] + '<br>')
// document.write(arr[3] + '<br>')
// document.write(arr[4] + '<br>')
// document.write(arr[5] + '<br>')
// document.write(arr[6] + '<br>')
// document.write(arr[7] + '<br>')

// Question No 8

// var studentNames = ['Ali','Ahmed','Hammad']
// var  studentScore = [420,480,380]
// var totalMarks = [500]

// var percentage1 = (studentScore[0] / totalMarks) *100
// var percentage2 = (studentScore[1] / totalMarks) *100
// var percentage3 = (studentScore[2] / totalMarks) *100

// document.write("Score of " + studentNames[0]  + " is " + studentScore[0]   +  " Percentage: " +percentage1 + "%<br>" )
// document.write("Score of " + studentNames[1] + " is " + studentScore[1]  + " Percentage: " +percentage2 + "%<br>" )
// document.write("Score of " + studentNames[2] + " is " + studentScore[2] + " Percentage: " +percentage3 + "%<br>" )

// Question No 9

// var colors = ["Red", "Green", "Blue"];
// document.write("<b>Initial Colors:</b> " + colors + "<br><br>");


// // a.
// var addBeginning = prompt("Which color do you want to add at the beginning?");
// colors.unshift(addBeginning);
// document.write("<b>After adding color at beginning:</b> " + colors + "<br><br>");


// // b. 
// var addEnd = prompt("Which color do you want to add at the end?");
// colors.push(addEnd);
// document.write("<b>After adding color at end:</b> " + colors + "<br><br>");


// // c.
// colors.unshift("Purple", "Yellow");
// document.write("<b>After adding two colors at beginning:</b> " + colors + "<br><br>");


// // d. 
// colors.shift();
// document.write("<b>After deleting first color:</b> " + colors + "<br><br>");


// // e. 
// colors.pop();
// document.write("<b>After deleting last color:</b> " + colors + "<br><br>");


// // f. 
// var indexToAdd = prompt("At which index do you want to add a color?");
// var colorName = prompt("Enter the color name:");
// colors.splice(indexToAdd, 0, colorName);
// document.write("<b>After adding color at index " + indexToAdd + ":</b> " + colors + "<br><br>");

// // g.
// var indexToDelete = prompt("At which index do you want to delete color(s)?");
// var deleteCount = prompt("How many colors do you want to delete?");
// colors.splice(indexToDelete, deleteCount);
// document.write("<b>After deleting " + deleteCount + " color(s) from index " + indexToDelete + ":</b> " + colors + "<br><br>");

// Question No 10

// var scores = [88, 75, 92, 60, 83, 95, 70]

// scores.sort(function(a, b) {return a - b; })
// console.log("Sorted Scores (Ascending):", scores)

// Question # 11

// var cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"]
// var selectedCities = cities.slice(0, 3)

// console.log("All Cities:", cities)
// console.log("Selected Cities:", selectedCities)

// Question # 12

// var arr = ["This", " is", " my", " cat"];
// var result = arr.join("");

// console.log(result);

// Question # 13

// var queue = [];

// queue.push("Apple");
// queue.push("Mango");
// queue.push("Banana");
// queue.push("Orange");

// document.write(queue.shift() + "<br>");
// document.write(queue.shift() + "<br>"); 
// document.write(queue.shift() + "<br>"); 
// document.write(queue.shift() + "<br>"); 

// Question # 14

// var stack = [];

// stack.push("Keyboard");
// stack.push("Mouse");
// stack.push("Monitor");
// stack.push("CPU");

// document.write(stack.pop() + "<br>");
// document.write(stack.pop() + "<br>"); 
// document.write(stack.pop() + "<br>"); 
// document.write(stack.pop() + "<br>"); 

// Question # 15

// var manufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];

// document.write("<select>");
// document.write("<option>" + manufacturers[0] + "</option>");
// document.write("<option>" + manufacturers[1] + "</option>");
// document.write("<option>" + manufacturers[2] + "</option>");
// document.write("<option>" + manufacturers[3] + "</option>");
// document.write("<option>" + manufacturers[4] + "</option>");
// document.write("<option>" + manufacturers[5] + "</option>");
// document.write("</select>");
