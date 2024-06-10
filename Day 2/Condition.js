
/* Conditional statement  */
const num1 = 2;
const num2 = 0;
if("Comparison operator"){
 
}

if(num1 == 2 && num1 > 2){
  num2 += 2
} 

if(num1 === 5){
  num2 += 5;
}else {
  num2 += 10;
}

let username ="Mg Mg"
let password ="12345"

if(username == "MgMg" && password == 12345){
  alert("can log in")
}else{
  alert("cannot log in")
}



let username ="Mg Mg"
let password ="12345"
if(username != "Mg Mg"){
  alert("username wrong")
}else if(password != 12345){
  alert("password wrong")
}else{
  alert("username and password right");
}

let username ="Mg Hla"
let password ="12345"
if(username != "Mg Mg"){
  alert("username wrong")
}else if(password != 12345){
  alert("password wrong")
}else{
  alert("username and password right")
}

let username ="Mg Mg"
let password ="123456"
if(username != "Mg Mg"){
  alert("password or username wrong")
}else if(password != 12345){
  alert("password or username wrong")
}else{
  alert("username and password right")
}

https://careerdev-app.cloudhr.co/admin-login


let pet = "dog";

if(pet == "cat"){
alert("eat fish")
}else
if(pet == "cow"){
alert("eat grass")
}else
if(pet == "dog"){
alert("eat bone")
}else{
  alert("there is no animal")
}


let pet = "cat"

if(pet == "cat"){
alert("eat fish")
}
if(pet == "cow"){
alert("eat grass")
}
if(pet == "dog"){
alert("eat bone")
}



//small example
const originalPrice = 100;
let memberType = "gold";
let totalPrice = 0;
 if(memberType == "silver"){
  totalPrice = originalPrice - 5;
  alert(totalPrice)
}else if(memberType == "gold"){
  totalPrice = originalPrice - 10;
  alert(totalPrice)
}else if(memberType == "Platinum"){
  totalPrice = originalPrice - 25;
  alert(totalPrice)
}else if(memberType == "Vip"){
  totalPrice = originalPrice - 50;
  alert(totalPrice)
}else{
   totalPrice = originalPrice
   alert(totalPrice)
};

//Switch

// if else if tot use tr myar yin switch ko use
switch(expression){
  case choice1:    
//run this code
  break;            <--- if not break a kone sitt
  case choice2:
//run this code
  break;
default:
//run this code if no case matches
}


let num1 = 2;
let num2 = 0;


switch(num1){
  case 1: num2 += 1;
  break;                                          
  case 2: num2 += 2;
  break;
default:
  num2 +=3;
}

let pet = "cat";

switch(pet){
   case "cat": alert("eat fish");
   break;
   case "cow": alert("eat grass");
   break;
   case "bird": alert("eat TKG");
   break;
   default:alert("I dont know");
}




let myChoice = 04;

//2D example
switch(myChoice){
    case 01: alert("ma pouk");
    break;                                          
    case 02:  alert("ma pouk");
    break;
    case 03: alert("ma pouk");
    break;                                          
    case 04:  alert("pouk");
    default:
    alert("ma pouk");
}




// default ka a paw ka hrr akone mhar yin run dl.
// break ma khan pay puu so yin lal default run tl.


 
You Tube Example

const clickedTab = "Home";

switch(clickedTab){

 case "Home";
//  1.hide other tab and show home tab
 break;

 case "VIDEOS";
//  1.hide other tab and show videos tab
 break;

 case "PLAYLISTS";
//  1.hide other tab and show playlist tab
 break;

 case "CHANNELS";
//  1.hide other tab and show channels tab
 break;

 case "DISCUSSION";
//  1.hide other tab and show discussion tab
 break;

 case "ABOUT";
//  1.hide other tab and show about   tab
 break;

default:
//  1.hide other tab and show about tab
}



switch (new Date().getDay()) {
  case 0: day = "Sunday";    break;
  case 1: day = "Monday";    break;
  case 2: day = "Tuesday";   break;
  case 3: day = "Wednesday"; break;
  case 4: day = "Thursday";  break;
  case 5: day = "Friday";    break;
  case 6: day = "Saturday"; break;}
