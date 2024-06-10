const dimension1 = [1, 2, 3]//one dimension
const dimension2 = [[1, 2], [3, 4], [5, 6]] // two dimension

dimension1[2] // 3
dimension2[0] // [1,2]
dimension2[dimension2.length - 1]  //[5,6]

for (let i = 0; i < dimension1.length; i++) {
     let element = dimension1[i];
     console.log(element)
}
const dimension2 = [[1, 2], [3, 4], [5, 6]] // two dimension
for (let i = 0; i < dimension2.length; i++) {
     let innerArray = dimension2[i];
     for (let i = 0; i < innerArray.length; i++) {
          let result = innerArray[i];
          console.log("Result  :", result)
     }
}

//let nk const is blog scope
// var ka ma hok puu lay ek tot a yin js mer ka var pl shi tot name thu thu pay lo ma ya puu lay 
// i a sar j ko use par ml

for (var i = 0; i < dimension2.length; i++) {
     let innerArray = dimension2[i];
     for (var i = 0; i < innerArray.length; i++) {
          let result = innerArray[i];
          console.log("Result  :", result)
     }
}
//first array mr tin stop twr pr tl blog scope ma hok tk a twat tan phoe thu thu fik twr pr tl


const studentInfomation = [["MgMg", 18, "A"], ["KoKo", 21, "A"], ["MaMa", 19, "B"], ["HlaHla", 20, "C"]]

for (let i = 0; i < studentInfomation.length; i++) {
     let innerArray = studentInfomation[i];
     for (let i = 0; i < innerArray.length; i++) {
          let result = innerArray[i];
          console.log(" Student Information :", result)
     }
}


//Destructring,Spread Operator,Rest Patameter

//Obj Destructure

const data = { name: "mg mg", email: "mgmg@gmail.com", gender: "male" };

const name = data.name;
const email = data.email;
const gender = data.gender;

const { name, email, gender } = data;
console.log(name, email, gender) // property name mhar lo ma ya pr 


const countries = ["Singapore", "Japan", "Myanmar", "Thai"]
const firstCountry = countries[0]
const secondCountry = countries[1]
const thirdCountry = countries[2]

const [firstCountry, secondCountry, thirdCountry] = countries
console.log(firstCountry, secondCountry, thirdCountry)

const [firstCountry, , thirdCountry] = countries

//Spread operator
// to Obj
const customer1 = { name: 'MgMg', email: 'mgmg@gmail.com', gender: 'male' };
const CopyCustomer = Object.assign({}, customer);

//ES6
const copyCustomer = { ...customer1 }

//Array
const countries = ["Singapore", "Japan", "Myanmar", "Thai"]
const copyArray = [].concat(countries)

//ES6
const copyArray = [...countries];
const newArray = ["USA", "Brazil", ...countries]

//Rest parameter
const calculate = (x, y) => {
     return x + y;
}

calculate(1, 2, 3, 4);

const calculate = (...a) => {
     console.log(data)
}

calculate(1, 2, 3, 4)


const calculate = (...data) => {
     let result = 0;
     for (let i = 0; i < data.length; i++) {
          result += data[i]
     }
     return result;
}

     calculate(1, 2, 3, 4)
//Call back function
//function yk parameter mr function a nay nk call tk function



getData()
displayData()

//pee aung wait yin synchronous code
//pee aung ma wait yin asynchronous code 


getData(displayData()) -> wrong
getData(displayData)


const fetchData = (callback) => {
     console.log("Fetching data from server...")
     //loading
     console.log("Finished fetching data...")
     callback();
}
const outerFunction = () => {
     const showImage = () => {
          console.log("show Image...")
     }
     fetchData(showImage);
}
outerFunction();

let stringText = "Hello World"
stringText.toLowerCase();
stringText.toUpperCase();
stringText.length;
stringText.indexOf("o");

let number = "10"  
parseInt(number) ==> 10
number.toString() ==>"10"

const objName = { name: "MgMg", email: "mgmg@gmail.com", age: "20" }
Object.keys(objName)
Object.values(objName)
objName.hasOwnProperty("gender") // false
objName.hasOwnProperty("age") // true

const town = ["Yangon", "MayMyo", "NayPyiTaw"]
town.length
town[town.length - 1];
town.push("Mandalay")
town.pop()
town.indexOf("Yangon")
town.indexOf("Saging") // -1
town.splice(0, 2)
town.join(",");


