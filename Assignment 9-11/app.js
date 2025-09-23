// 1. City name input
// let userCity = prompt("Enter your city name?")
// if(userCity==="Karachi"){
//     alert("Welcome to city of lights!")
// }
// else{
//     alert("Please come to Karachi")
// }

// 2. Gender input
// let userGender = prompt("Enter your gender please.")
// if(userGender==="Male"){
//     document.write("<h1>Good Morning Sir!")
// }
// else if(userGender==="Female"){
//     document.write("<h1>Good Morning Ma'am!")
// }


// 3. Traffic signal
// let signalColor = prompt("Enter a signal color.")
// if(signalColor==="Red"){
//     document.write("<h1>Must Stop!")
// }
// else if(signalColor==="Yellow"){
//     document.write("<h1>Ready to Move!")
// }
// else if(signalColor==="Green"){
//     document.write("<h1>Move Now!")
// }


// 4. Fuel check
// let userFuel = prompt("Enter your remaining fuel.")
// if(userFuel<"0.25"){
//     alert("Please refill the fuel in your car!")
// }


// 5. Condition testing
    // var a = 4;
    // if (++a === 5) { alert("given condition for variable a is true"); }

    // var b = 82;
    // if (b++ === 83) { alert("given condition for variable b is true"); }

    // var c = 12;
    // if (c++ === 13) { alert("condition 1 is true"); }
    // if (c === 13) { alert("condition 2 is true"); }
    // if (++c < 14) { alert("condition 3 is true"); }
    // if (c === 14) { alert("condition 4 is true"); }

    // var materialCost = 20000;
    // var laborCost = 2000;
    // var totalCost = materialCost + laborCost;
    // if (totalCost === laborCost + materialCost) {
    //     alert("The cost equals");
    // }

    // if (true) { alert("True"); }
    // if (false) { alert("False"); }

    // if ("car" < "cat") { alert("car is smaller than cat"); }




// 6. Marks & grade calculation
  let subj1 = +prompt("Enter marks of subject 1:");
    let subj2 = +prompt("Enter marks of subject 2:");
    let subj3 = +prompt("Enter marks of subject 3:");
    let totalMarks = +prompt("Enter total marks:");

    let obtained = subj1 + subj2 + subj3;
    let percentage = (obtained / totalMarks) * 100;

    let grade, remarks;
    if (percentage >= 80) { grade = "A-one"; remarks = "Excellent"; }
    else if (percentage >= 70) { grade = "A"; remarks = "Good"; }
    else if (percentage >= 60) { grade = "B"; remarks = "You need to improve"; }
    else { grade = "Fail"; remarks = "Sorry"; }

    alert("Marks Sheet\nTotal: " + totalMarks + "\nObtained: " + obtained +
        "\nPercentage: " + percentage.toFixed(2) + "%\nGrade: " + grade +
        "\nRemarks: " + remarks);


// 7. Guess game
//  let secret = Math.floor(Math.random() * 10) + 1;
//     let guess = +prompt("Guess the number (1-10):");
//     if (guess === secret) {
//         alert("Bingo! Correct answer");
//     } else if (guess + 1 === secret) {
//         alert("Close enough to the correct answer");
//     } else {
//         alert("Wrong guess, the secret was " + secret);
//     }

// 8. Divisible by 3
// let divisibleNumber = +prompt("Please enter a number:")

//   if(divisibleNumber % 3 === 0){
//     document.write("<h1>"+ divisibleNumber + " is divisible by 3")
//   }
//   else{
//     document.write("<h1>"+ divisibleNumber + " is not divisible by 3")
//   }



// 9. Even or Odd
    // let num = +prompt("Enter a number:");
    // if (num % 2 === 0) {
    //     alert(num + " is Even");
    // } else {
    //     alert(num + " is Odd");
    // }



// 10. Temperature
// let temperature = prompt("Enter your city temprature.")
// if(temperature >"40"){
//     document.write("<h1>It is too hot outside!")
// }
// else if(temperature > "30"){
//     document.write("<h1>The weather today is Normal!") 
// }
// else if(temperature > "20"){
//      document.write("<h1>Today's Weather is cool!")
// }
// else if(temperature > "10"){
//      document.write("<h1>OMG!Today's Weather is so Cool.")
// }


// 11. Calculator
// let num1 = +prompt("Enter your first number.")
// let num2 = +prompt("Enter your second number.") 
// let operator = prompt("Enter the operation that you want to perform.")

// if(operator=="+"){
//     alert(num1+num2)
// }
// else if(operator == "-"){
//     alert(num1-num2)
// }
// else if(operator == "*"){
//     alert(num1*num2)
// }
// else if(operator == "/"){
//     alert(num1/num2)
// }
// else{
//     alert(num1%num2)
// }

