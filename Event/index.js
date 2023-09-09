console.log("run");

function ClickMe() {
   const number_1 = document.getElementById("number-1").value
   const number_2 = document.getElementById("number-2").value
//    console.log(number_1+" - "+ number_2);

   if(number_1 == number_2){
    console.log("Success");
   }else{
    console.log("Fail");
   }
    
}

function Click() {
    const number_1 = document.getElementById("number-01").value
    const number_2 = document.getElementById("number-02").value
 //    console.log(number_1+" - "+ number_2);
 
    if(parseInt(number_1) > parseInt(number_2)){
     console.log("number-01");
    }else{
     console.log("number-02");
    }
     
 }

 function addition(){
    const num = document.getElementById("addition-1").value;

    let sum = 0;

    for(let i=0; i<num.length; i++){
       sum += parseInt(num[i]);

    }
    console.log(sum);
 }

 //add student marks
 // 75 = A
 // 65 = B
 // 45 = C
 // 35 = W
 // fail

 function Mark() {
   const numb = document.getElementById("mark").value;

   if(numb >= 75){
      console.log("A");
   }else if(numb >=65){
      console.log("B");
   }else if(numb >= 45){
      console.log("C");
   }else if(numb > 35){
      console.log("S");
   }else{
      console.log("Fail");
   }
   
 }

 // input 2 subject
 // 59 , 56 = A
 // 45 , 50 = B
 // 34 , 45 = C

 function Get() {
   const num1 = document.getElementById("mark-01").value;
   const num2 = document.getElementById("mark-02").value;

   if(num1 > 50 && num2 > 50){
      console.log("A");
   }else if(num1 > 50 || num2 > 50){
      console.log("B");
   }else{
      console.log("C");
   }

 }

 function short(){
   const switch1 = document.getElementById("Switch1").value;

  
   switch(switch1){
   case "ISE":
        console.log('Intern Software Engineer');
        break;
    case "ASE":
        console.log('Associate Software Engineer');
        break;
    case "SE":
         console.log('Software Engineer');
         break;
    case "SSE":
         console.log('Senior Software Engineer');
         break;
    case "ATL":
            console.log('Associate Tech Lead');
         break;
    case "TL":
            console.log('Tech Lead');
         break;
    
         default:
            console.log('Error Text');

   }

 }

 function days(){
   const day = document.getElementById("week").value;
console.log(day);
  
   switch(parseInt(day)){
   case 1:
        console.log('Sun Day');
        break;
    case 2:
        console.log('Mon Day');
        break;
    case 3:
         console.log('Tuesday');
         break;
    case 4:
         console.log('Wednessday');
         break;
    case 5:
            console.log('Thursday');
         break;
    case 6:
            console.log('Friday');
         break;
    case 7:
            console.log('Saturday');
         break;
    
         default:
            console.log('Error Number');

   }

 }

 function print3(){
   const value1 = document.getElementById("prin2").value;
   for(i =0; i < value1.length; i++){

      console.log(value1[i]);
   }

 }

 let a = [];
 function ar1(){
   const arrr2 = document.getElementById("array2").value;

          a.push(arrr2);
          document.getElementById("array2").value="";
 }

 function ar2(){
   console.log(a);
 }


 

 function Log1(){

   let UN = "ravee";
   let PW = '123';
   // let result = UN.toLowerCase();
   // let result2 = PW.toLowerCase();
   

   const Looo1 = document.getElementById("L1").value;
   const Looo2 = document.getElementById("L2").value;

   if(UN.toLowerCase() == Looo1.toLowerCase() && PW.toLowerCase() == Looo2.toLowerCase()){
      alert('Login Success...')
   }else{
      alert('Login Failed...')
   }
 }



var randAr = [];
for (var i=0; i<50; i++) {
    randAr.push(Math.round(Math.random() * 100))
}
document.getElementById('rand1').innerHTML = randAr;

function RandSubmit(){
    const num = parseInt(document.getElementById('RandomN').value);

    let result = [];
    for (var i=0; i<randAr.length; i++) {
        if(randAr[i] % num == 0){
            result.push(randAr[i])
        }
    }

    document.getElementById('rand2').innerHTML = result;
}



 

 