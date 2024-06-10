//filter 
const a = [
{name:"cus1",email:"cus1@gmail.com",gender:"male",age:22},
{name:"cus2",email:"cus2@gmail.com",gender:"female",age:25},
{name:"cus3",email:"cus3@gmail.com",gender:"female",age:30},
{name:"cus4",email:"cus4@gmail.com",gender:"male",age:22},
{name:"cus5",email:"cus5@gmail.com",gender:"female",age:27},
{name:"cus6",email:"cus6@gmail.com",gender:"male",age:22},
] 

customer.filter(callback); 

const isMale = (callArray) => {
    return callArray.gender === "male"; 
}
const isMaleAndAgeOver25 = (a) => {
    return a.gender === "male" &&  a.age > 25; 
}
let a = customer.filter(isMale); 
let b = customer.filter(isMaleAndAgeOver20); 
customer.filter(isMale); // return [customer[0],customer[3]]
//elment tai ko call back function a nay nk parameter call pay pr tl
//callback function ka true or false ko return pyn pr tl
//true fik yin ek de element ko array htel mr fill par ml false so ma fill pr pu
//Array ma pee ma chin run pay pr ml

const isMale = callArray=>  callArray.gender === "male";

customer.filter(isMale); // return [customer[0],customer[3]]

const isMaleAndAgeOver25 = (callArray) => {return callArray.gender === "male" && callArray.age > 25}

customer.filter(isMaleAndAgeOver25);

//how to short code 
const isMale = (callArray) => {return callArray.gender === "male"};

const isMale2 = callArray => callArray.gender === "male";

customer.filter( callArray => callArray.gender === "male"); 

a.filter(callArray => callArray.age > "23")


//Map
const customer = [
    {name:"cus1",email:"cus1@gmail.com",gender:"male",age:28},
    {name:"cus2",email:"cus2@gmail.com",gender:"female",age:25},
    {name:"cus3",email:"cus3@gmail.com",gender:"female",age:30},
    {name:"cus4",email:"cus4@gmail.com",gender:"male",age:22},
    {name:"cus5",email:"cus5@gmail.com",gender:"female",age:27},
    ]

for (let i = 0 ; i < customer.length;i++){
    customer[i].grade = [];
}

customer.filter(callback);
customer.map(callback);
//shi tk obj tai ko call back function ko lope pay pr ml
//callback function ko lope pee ya lr tk obj (return)ko array ta ku hel mr htae pay pr ml
// array a khan a kone lope pr ml
// map ka final array ko return pyan pr ml
const customer12 = [
    {name:"cus1",email:"cus1@gmail.com",gender:"male",age:28},
    {name:"cus2",email:"cus2@gmail.com",gender:"female",age:25},
    {name:"cus3",email:"cus3@gmail.com",gender:"female",age:30},
    {name:"cus4",email:"cus4@gmail.com",gender:"male",age:22},
    {name:"cus5",email:"cus5@gmail.com",gender:"female",age:27},
    ];

const addCar = (c) =>{
    c.car = "toyota"
    return c;
}
customer12.map(addCar);

const number = [1,2,3,4,5,6]
let result = number.map(num => num * 2)
