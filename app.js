
const expensesTotal = document.querySelector('#total-expenses');
const addBtn = document.querySelector('#btn-add');
const expensesTotalCoin = document.querySelector('#total-expenses-coin');
const addBtnCoin = document.querySelector('#btn-add-coin');
const totalBtn = document.querySelector('#btn-total');
const finalTotal = document.querySelector('#total-expenses-both');
const finalTotalNo = document.querySelector('#total-expenses-both-no');



let total = 0
let totalExpenses = 0;
let totalExpensesCoin = 0;

var ttl;
var cttl;

// logic for notes

function myFunctionone() {
  var x = document.getElementById("oneip").value * 2000;
  document.getElementById("oneop").innerHTML =  "Rs " + x;
  return x;
}
 
function myFunctiontwo() {
  var x = document.getElementById("twoip").value * 1000;
  document.getElementById("twoop").innerHTML =  "Rs " + x;
 
}
function myFunctionthree() {
  var x = document.getElementById("threeip").value * 500;
  document.getElementById("threeop").innerHTML =  "Rs " + x;
 
}
 
function myFunctionfour() {
  var x = document.getElementById("fourip").value * 200;
  document.getElementById("fourop").innerHTML =  "Rs " + x;
  
}
function myFunctionfive() {
  var x = document.getElementById("fiveip").value * 100;
  document.getElementById("fiveop").innerHTML =  "Rs " + x;
 
}
 
function myFunctionsix() {
  var x = document.getElementById("sixip").value * 50;
  document.getElementById("sixop").innerHTML =  "Rs " + x;
  
}
function myFunctionseven() {
  var x = document.getElementById("sevenip").value * 20;
  document.getElementById("sevenop").innerHTML =  "Rs " + x;
 
}
 
function myFunctioneight() {
  var x = document.getElementById("eightip").value * 10;
  document.getElementById("eightop").innerHTML =  "Rs " + x;
  
  
}

// logic for coins

function Functionone() {
  var x = document.getElementById("coneip").value * 10;
  document.getElementById("coneop").innerHTML =  "Rs " + x;
  return x;
}
 
function Functiontwo() {
  var x = document.getElementById("ctwoip").value * 5;
  document.getElementById("ctwoop").innerHTML =  "Rs " + x;
 
}
function Functionthree() {
  var x = document.getElementById("cthreeip").value * 2;
  document.getElementById("cthreeop").innerHTML =  "Rs " + x;
 
}
 
function Functionfour() {
  var x = document.getElementById("cfourip").value * 1;
  document.getElementById("cfourop").innerHTML =  "Rs " + x;
  
}

// function myFunctiontotal() {
//   var result = (Number(document.getElementById("oneip").value * 2000)+Number(document.getElementById("twoip").value * 1000));
//   document.getElementById("total-amount").innerHTML = result;
// }
    
// addBtn.addEventListener('click', () => {
//   console.log("clicked");
//   var valueone = myFunctionone();
//   var valuetwo = myFunctiontwo();
//   var valuethree = myFunctionthree();
//   var valuefour = myFunctionfour();
//   var valuefive = myFunctionfive();
//   var valuesix = myFunctionsix();
//   var valueseven = myFunctionseven();
//   var valueeight = myFunctioneight();

//   totalExpenses += +valueone +  +valuetwo + +valuethree + +valuefour + +valuefive + +valuesix + +valueseven + +valueeight;
//   expensesTotal.textContent = totalExpenses;
// });

// totalExpenses = +document.getElementById("oneip").value * 2000) +



// <ion-item>
//   <ion-input type="number" id="myInput" oninput="myFunction()"> </ion-input>
//   <ion-content id="demo" ></ion-content>
// </ion-item>   

// size-md="6" offset-md="3"


function s(num, val){
  amount = num*1;
  sum = (!num ? 0 : num)*val;
  return sum;
}

addBtn.addEventListener('click', () => {
  twotho = s(document.getElementById("oneip").value, 2000);
  onetho = s(document.getElementById("twoip").value, 1000);
  fivehun = s(document.getElementById("threeip").value, 500);
  twohun = s(document.getElementById("fourip").value, 200);
  hun = s(document.getElementById("fiveip").value, 100);
  fifty = s(document.getElementById("sixip").value, 50);
  twenty = s(document.getElementById("sevenip").value, 20);
  ten = s(document.getElementById("eightip").value, 10);

   ttl = twotho + onetho + fivehun + twohun + hun + fifty + twenty + ten;

  expensesTotal.textContent = ttl; 
  // return ttl; 

});

addBtnCoin.addEventListener('click', () => {
  // console.log("clicked");
  cten = s(document.getElementById("coneip").value, 10);
  cfive = s(document.getElementById("ctwoip").value, 5);
  ctwo = s(document.getElementById("cthreeip").value, 2);
  cone = s(document.getElementById("cfourip").value, 1);


   cttl = cten + cfive + ctwo + cone;

  expensesTotalCoin.textContent = cttl; 
  // return cttl; 

});

totalBtn.addEventListener('click', () => {

  console.log("3clicked");
  
  total = ttl + cttl;
  console.log(total);
  finalTotalNo.textContent = total;
  finalTotal.textContent = numberToWords.toWords(total);
  


});