 //For Loop           
const towns = ["Yangon","MandaLay","Bagan","Sagaing","Lasho"]
for (let i = 0 ;i < towns.length;i++){
    console.log(towns[i])
   }

//For In Loop
const customer = {name: "customer1",phone : "09451845120" 
, email : "cus5@gmail.com" , dateOfBirth : "2/3"}

for(let propertyName in customer) {
    console.log(propertyName," : ",customer[propertyName]);
  }
  
//While loop 
let success = true;
while (success){
    let result = prompt("Please enter a number between 1 and 100");
    let finalNumber = parseInt(result)
  // 1 nae 100 kyar fik ya ml 2....99
    if(finalNumber > 1 && finalNumber <100){
      console.log("Final Enetered Value :" ,finalNumber)
      success = false;  // == break;  <<<<<<<<<<<<<<<<<<<<
    }
  }

//do while 

let count = 0;

do {
  console.log("Count: " + count);
  count++;
} while (count < 5);