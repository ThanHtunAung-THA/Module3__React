// Loop

//online store

const customers = [
{name : "cus1", phone : "09451845120" , email : "cus1@gmail.com" ,dateOfBirth : "2/3"},
{name : "cus2", phone : "09451455520" , email : "cus2@gmail.com" ,dateOfBirth : "4/5"},
{name : "cus3", phone : "09451845455" , email : "cus3@gmail.com" ,dateOfBirth : "4/8"},
{name : "cus4", phone : "09451874410" , email : "cus4@gmail.com" ,dateOfBirth : "7/11"},
];

const customer1Email = customers[0].email;
const customer2Email = customers[1].email;
const customer3Email = customers[2].email;
const customer4Email = customers[3].email;

const sendEmail = (email) => {
     //send email to customer
}

sendEmail(customer1Email);
sendEmail(customer2Email);
sendEmail(customer3Email);
sendEmail(customer4Email);

//code repeat as same as function 
// code ka myarr lay lay error nyar lay lay fik tk a twat don't be repeat


For Loop

for ( let i = 0 ; i < 3;  i++){
  alert("Hello");
}


  for(let i = 0; i < 3; i++){
  console.log("I am sorry" , i)
  } 


statement 1 = variable
//for loop lope yin variable name ka i lo kyaw nyar dr myar pr tl
let i = 0

statement 2 = condition 
//condition ka boolean ta phoe ta ku ku ko pay tk code
 i < 5


statement 3 = increment or decrement operator
//increment operator ++
//decrement operator --
i++

for (let i = 0 ;i < 3;i++){
 alert("Hello");
}


//statement 2 mhan ta yawe a htel mr shi tk code ko run pay pr tl

// iteration 1 i = 0
// iteration 2 i = 1
// iteration 3 i = 2
// iteration 4 i = 3
//condition ma thu break
// i ka auto change twr tr ma myin ya lo may be hard


for (let i = 0 ;i < 3;i++){
 console.log("hello")
}


for (let i = 0 ;i < 3;i++){
 console.log("hello ",i)
}


const towns = ["Yangon","MandaLay","Bagan","Sagaing","Lasho","MayMyo"];
towns[0];
towns[1];
towns[2];
towns[3];
towns[4];


for (let i = 0 ;i < towns.length;i++){
 console.log(towns[i],i)
}
          
for (let i = 0 ;i < towns.length;i++){
 console.log(towns[4],i)
}

const sendEmail = (email) => {
     send email to customer
}


//customer se pyn twar ml
const customers = [
{name : "cus1", phone : "09451845120" , email : "cus1@gmail.com" ,dateOfBirth : "2/3"},
{name : "cus2", phone : "09451455520" , email : "cus2@gmail.com" ,dateOfBirth : "16/2"},
{name : "cus3", phone : "09451845455" , email : "cus3@gmail.com" ,dateOfBirth : "4/8"},
{name : "cus4", phone : "09451874410" , email : "cus4@gmail.com" ,dateOfBirth : "7/11"},
];

const sendEmail = (email) => {
  console.log("Sending email to : ", email);
}

const sendpoukkayanoti = (yaychintaesar) => {
  console.log("Sending noti to : ", yaychintaesar);
}


sendEmail(customers[0].email);


const sendBDEmail = (email) => {
  console.log("Sending email with discount 20% : ", email);
}

for(let i = 0; i < customers.length; i++){
   let customerEmail = customers[i].email;     // <------ let fik ko fik ya par ml
   sendEmail(customerEmail);
}

customers.push(
{name : "cus5", phone : "09451845120" , email : "cus5@gmail.com" , dateOfBirth : "18/2"},
{name : "cus6", phone : "09451455520" , email : "cus6@gmail.com" , dateOfBirth : "6/8"},
{name : "cus7", phone : "09451845455" , email : "cus7@gmail.com" , dateOfBirth : "4/3"},
{name : "cus8", phone : "09451874410" , email : "cus8@gmail.com" , dateOfBirth : "18/2"},
)
    
const sendEmail = (email) => {
  console.log("Sending email to : ", email);
}
const sendBDEmail = (email) => {
  console.log("Sending email with discount 20% : ", email);
}

for(let i = 0; i < customers.length; i++){
   let customerEmail = customers[i].email;      // <------ let fik ko fik ya par ml
    let customerBD = customers[i].dateOfBirth;
  if( customerBD == "18/2") {
  sendBDEmail(customerEmail);
}else{
   sendEmail(customerEmail);
}
}



const sendBDEmail = (email) => {
console.log("Sending email with discount 20% : ", email)
}

// For In loop

//Array tawe ko for loop use yin ok pr tl but
//Obj tawe kya tot for in loop use ya pr ml

for(variable in objectName) {

}

const customer = { name: "customer1",phone : "09451845120" , email : "cus5@gmail.com" , dateOfBirth : "2/3"}
//object mr . length so tk property ma shi pr

//customer is obj Name
for(propertyName in objectName) {
}

for(let a in customer) {
  console.log(a);
}

//property name ko ti yin property value ko u loh ya pr tl that teach in last lesson in obj



const customers =  {name : "cus1", phone : "09451845120" , email : "cus1@gmail.com" ,dateOfBirth : "2/3"}; 
 //dot notation
customer.phone
//bracket notation

customer["phone"]

let a = "phone"

customers[a]

//property name ko hluan ma u pl nk variable ko u lite ml so yin tot "" double code kan sayar ma lo pr puu

for(let a in customers) {  //let so pee kyaw nyar tk time mr value pay sayar ma lo par pu
  console.log(customers[a]);
}

const customers = {name : "cus1", phone : "09451845120" , email : "cus1@gmail.com" ,dateOfBirth : "2/3"}; 
for(let keyname in customers){
  console.log(customers[keyname]);
}

// for loop vs for in loop

//for loop ka tot 2nd statement ko check pee mha a lope lope par tl
// for in loop ka kya tot condition ma check pr puu a kone lope mr pr thu htel mr shi ta lout


for(let keyname in customer) {
  console.log(keyname," : ",customer[keyname]);
}


const customer = { name: "customer1",phone : "09451845120" , email : "cus5@gmail.com" , dateOfBirth : "2/3"}

for(let propertyName in customer) {
    console.log(propertyName," : ",customer[propertyName]);
}
  
//variable ka tot property name tawe ko ko sar pyu twr mr fik pr tl
prompt("Please enter a number between 1 and 100");
//user write 1
prompt("Please enter a number between 1 and 100");
//user write 100000
prompt("Please enter a number between 1 and 100");
//user write KoKo
prompt("Please enter a number between 1 and 100");
//user write -21
prompt("Please enter a number between 1 and 100");


while (condition){

}

let success = true;
        
while (success){
  let result = prompt("Please enter a number between 1 and 100");
  let finalNumber = parseInt(result)
// 1 nae 100 kyar fik ya ml 2....99
  if(finalNumber > 1 && finalNumber <100){
    console.log("Final Enetered Value :" ,finalNumber)
    success = false;  // == break;
  }
}
// break pr ko par mha ya pr ml ma pr yin set tite shel lope lo harm twr pr ml
//condition == true fik ta yawe a htel ka code ko lope pr ml

//example 

let num1 = 1;

while(num1 < 10){
  console.log(num1);
}



