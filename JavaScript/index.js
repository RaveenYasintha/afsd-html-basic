console.log("Run Js External!")
// numbers 
const num = 30;

// String 
const name ="Raven";

// boolean 
const bool = true;

const object = {}
const array = []

// let, var, const 


// let 
let a =12;
// can not redeclare 
// let a = 13;

{let b = 90;}
a=30;
console.log(a);
// console.log(b);

// Var 

var v = "Run";
var v =  "go";
console.log(v);
{var k = 12}
var v = "38";
console.log(k);

// const 

const o = 12;
// o = 30;
// const o = 39;
{const y = 98}
// console.log(y);


// Arithmatic Operators

// Addition  (+)

const as = 12;
const n = 34;
const addition = as + n;

console.log(addition);

// Subtraction (-)

const subtraction = n - as;
console.log(subtraction);

// Multiplication 

const Multiplication = as * n;
console.log(Multiplication);

// Division (/)

const Division = n/as;
console.log(Division);

// Modulus (%)

const Modulus = as % n;
console.log(Modulus);

// Increment (++)

let h = 10;
h++
console.log(h);

// Decrement 

let j = 10;
j--
console.log(j);

// Comparison Operator

const e = 12;
const d = 23;

//Equal (==)

console.log("Equal = ", e == d);

// Not Equal (!=)
console.log("Not Equal = ", e != d);

//Greater Than (>)
console.log("Greater Than = ", e > d);

//Less Than (<)
console.log("Less Than = ", e < d);

//Greater Than or Equal (>=)
console.log("Greater Than or Equal = ", e >= d);

//Less Than or Equal (<=)
console.log("Less Than or Equal = ", e < d);

//Logical Operators
const y = true;
const x = false;

// AND (&&)
console.log("AND = ", y && x);

// OR (||)
console.log("OR = ", y || x);

// NOT (!)
console.log("Not = ", !x);

// Function

function myName (){
    console.log("My name is AFSD");
}

// arrow function
//const myName = () => {
    //console.log("My Name is Raveen");
//}

myName();


function NumberEqual (num1,num2){
    const total = num1+num2;
    console.log(total);
}

NumberEqual(23,45);
NumberEqual(1345,9854);
NumberEqual(345,876);

// return function 

function Number_Eq(num3,num4){
    const tot = num3+num4
    return tot;
}

const tot = Number_Eq(60,120);
console.log(tot);
const tot1 = Number_Eq(564,988);
console.log(tot1);

// Flow Controllers
// if
const student = 50;
const student1 = 80;

if(student<student1){
    console.log("Print Student");
}

// Nested if

const stu_1= 600;
const stu_2 = 80;

if(stu_1 >= 50){
    if(stu_1 < 100){
        console.log("VAlid");
    }else{
        console.log("Invalid");
    }
}else{
    console.log("Print");
}

// switch
const val = 3;
switch(val){
    case 1:
        console.log('1');
        break;
    case 2:
        console.log('2');
        break;
        default:
            console.log('Error Number');

}

// for loop
const arr = ['A','B','C','D','E']
for(let i = 0; i<arr.length; i++){
    console.log(arr[i]);
}


// while loop
let p = 0;
while(p < 10){
    console.log(p);
    p++
}

// Do While
let i = 0;
do{
    console.log(i);
    i++
}while(i<10);

console.log("=======================================");

for(let w =0; w<10; w++){
    console.log(w);
    if(w==5){
        break;
    }
}

// Arrays
const arr1 = ['Banana','Orrange','Apple','Mango'];
arr1.pop();
console.log(arr1);

// Arrays
const arr2 = ['Banana','Orrange','Apple','Mango'];
const friu = arr2.pop();
console.log(friu);

// Arrays
const arr3 = ['Banana','Orrange','Apple','Mango'];
arr3.push("kiwi");
console.log(arr3);

// Arrays
const arr4 = ['Banana','Orrange','Apple','Mango'];
arr4.shift();
console.log(arr4);

// Arrays
const arr5 = ['Banana','Orrange','Apple','Mango'];
const fr =arr5.shift();
console.log(fr);

// Arrays
const arr6 = ['Banana','Orrange','Apple','Mango'];
arr6.unshift("kiwi");
console.log(arr6);

// Object 
const person = {
    name: 'Raveen',
    address: 'Walasmulla',
    run: function(){console.log("Run Raveen");}
    
  }

  const names = person.name;
  console.log(names);

  person.run();


  // Events
  //onChange

  function onChange() {
    const text = document.getElementById('text-input').value

    document.getElementById('name-display').innerHTML = text
    // console.log(text);
  }


  // onClick

  function clickMe() {
    const text = document.getElementById('text-input').value
    document.getElementById('name-display').innerHTML=text
    
  }

  function onMouseOver() {
    document.getElementById('div-id').style.backgroundColor = "Green";
    console.log('Mouse Over');
    
  }

  function onMouseOut() {
    document.getElementById('div-id').style.backgroundColor = "red";
    console.log('Mouse out');
    
  }

  function keyDown() {
    const text = document.getElementById('text-2').value
    document.getElementById('display-4').innerText = text
    
  }

  function keyUp() {
    const text = document.getElementById('text-3').value
    document.getElementById('display-5').innerText = text

    
  }