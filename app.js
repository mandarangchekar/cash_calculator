
const expensesTotal = document.querySelector('#total-expenses');
const addBtn = document.querySelector('#btn-add');
let totalExpenses = 0;
function myFunctionone() {
  var x = document.getElementById("oneip").value * 2000;
  document.getElementById("oneop").innerHTML =  "Rs " + x;
  return x;
}
 
function myFunctiontwo() {
  var x = document.getElementById("twoip").value * 1000;
  document.getElementById("twoop").innerHTML =  "Rs " + x;
  return x;
}
function myFunctionthree() {
  var x = document.getElementById("threeip").value * 500;
  document.getElementById("threeop").innerHTML =  "Rs " + x;
  return x;
}
 
function myFunctionfour() {
  var x = document.getElementById("fourip").value * 200;
  document.getElementById("fourop").innerHTML =  "Rs " + x;
  return x;
}
function myFunctionfive() {
  var x = document.getElementById("fiveip").value * 100;
  document.getElementById("fiveop").innerHTML =  "Rs " + x;
  return x;
}
 
function myFunctionsix() {
  var x = document.getElementById("sixip").value * 50;
  document.getElementById("sixop").innerHTML =  "Rs " + x;
  return x;
}
function myFunctionseven() {
  var x = document.getElementById("sevenip").value * 20;
  document.getElementById("sevenop").innerHTML =  "Rs " + x;
  return x;
}
 
function myFunctioneight() {
  var x = document.getElementById("eightip").value * 10;
  document.getElementById("eightop").innerHTML =  "Rs " + x;
  return x;
  
}

// function myFunctiontotal() {
//   var result = (Number(document.getElementById("oneip").value * 2000)+Number(document.getElementById("twoip").value * 1000));
//   document.getElementById("total-amount").innerHTML = result;
// }
    
addBtn.addEventListener('click', () => {
  console.log("clicked");
  var valueone = myFunctionone();
  var valuetwo = myFunctiontwo();
  var valuethree = myFunctionthree();
  var valuefour = myFunctionfour();
  var valuefive = myFunctionfive();
  var valuesix = myFunctionsix();
  var valueseven = myFunctionseven();
  var valueeight = myFunctioneight();

  totalExpenses += +valueone +  +valuetwo + +valuethree + +valuefour + +valuefive + +valuesix + +valueseven + +valueeight;
  expensesTotal.textContent = totalExpenses;
});

// totalExpenses = +document.getElementById("oneip").value * 2000) +



// <ion-item>
//   <ion-input type="number" id="myInput" oninput="myFunction()"> </ion-input>
//   <ion-content id="demo" ></ion-content>
// </ion-item>   

// size-md="6" offset-md="3"