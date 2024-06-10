//continue,break   
const customer = [
{name: "customer1", email : "customer1@gmail.com", gender :"male"},
{name: "customer2", email : "customer2@gmail.com", gender :"female"},
{name: "customer3", email : "customer3@gmail.com", gender :"female"},
{name: "customer4", email : "customer4@gmail.com", gender :"male"},
{name: "customer5", email : "customer5@gmail.com", gender :"male"},
{name: "customer6", email : "customer6@gmail.com", gender :"female"},
];

for (let i = 0 ; i < customer.length; i++){
    let finalcustomer = customer[i];
    if(finalcustomer.gender === 'male'){
        continue;
    }
    console.log("Sending email with woman shirt to ", finalcustomer.email)
}

for (let i = 0 ; i < 3; i++){
    let finalcustomer = customer[i];
   
    console.log("Sending email to ",
    finalcustomer.email)
}   

for (let i = 0 ; i < customer.length; i++){               
    let rondomNumber =  Math.floor(Math.random() * customer.length);
    let finalcustomer = customer[rondomNumber];
    console.log("Sending email to ", finalcustomer.email)
    if(i == 2){
      break;
    }
}

let i = 0;  

while (i < customer.length){
    let final = customer[i]
    i++ // stop
    if(final.gender === "male"){
        console.log("male item to,",final.email)
        continue;
    }
    console.log("Sending email with woman shirt to ", final.email)
}

let i = 0 ;
while (i < customer.length){
    let final = customer[i]
    console.log("Sending email with woman shirt to ", final.email)
    i++ // stop
    if(i === 3){
       break;
    }
}




