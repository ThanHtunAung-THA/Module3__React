Object ka js yk data type.

//

//
Object ko nay yar tww tww nyr nyr mr use pr dl
Object ko narr lal mha js ko narr lal ml loz so ya pr ml


why need object

const id = 10;
const name = "Mg Mg"   -- >  tan phoe ka ta ku htel
const result = true


primitive data type =  htet khwel lo ma ya
object data type = htet khwel lo ya tl

variable htel mr tan phoe tawe a myar gyi thein chin yin object 
data type ko use pr tl

{}   -> empty object

Without Object
const name = "Ko Ko"   
const age = 22
const hometown = "Yangon"
const height = 6  




With Object
const a ={
 name : "Ko Ko" ,  //key value pair
 age: 22,
 howntown :"yangon",  ----> properties value (value)
 height : 6
 "date of birth" : 02/02/2023   or dateOfBirth : 02/02/2023 
 1city:"ygn"  --->uncorrect
 isActor:true
     /\
      properties name (key)
}


let person1 = {
 name : "Ko Ko" ,
 age: 22,
 howntown :"yangon",
 height : 6,
 dateOfBirth : "02/02/2023", 
 isActor:true
 }


Function ko lal object htel htae use lo ya tl
ek lo htae yin method lo call pr tl


let person1 = {
 name : "Ko Ko" ,
 age: 22,
 howntown :"yangon",
 height : 6,
 dateOfBirth : "02/02/2000" ,
 isActor:true,
 walk : ()=> {
   alert("Ko Ko is walking now")
}
 }

 let person2 = {
    name : "Ko Ko" ,
    age: 22,
    howntown :"yangon",
    height : 6,
    dateOfBirth : "02/02/2000" ,
    isActor:true,
    plusTen : (a)=> {
      alert(a+10)
   }
    }

    person2.plusTen(10);


how to use object htel mr shi tk properties 

first -> .(dot) notation   -> dot ko use pee u tk name

. nouth mr key name ko u ya pr ml 

person1.name
person1.age
person1.Age -> wrong 

method ko vl lo u ma lal method ka function fik tr kyg function name ko call pay ya pr ml

person1.walk()

person1.walk ---> wrong.

second -> bracket notation

person1["name"]
person1["age"]
person1[age] -> wrong
person1["walk"]()
person1["walk"()] -> wrong


let person1 = {
 name : "Ko Ko" ,
 age: 22,
 howntown :"yangon",
 height : 6,
 dateOfBirth : "02/02/2000" ,
 hobby : "football",
 isActor:true,
 walk : ()=> {
   alert("Ko Ko is walking now")
}
 }

let person1 = {
 name : "Ko Ko" ,
 age: 22,
 howntown :"yangon",
 height : 6,
 dateOfBirth : "02/02/2000" ,
 isActor:true,
 walk : ()=> {
   alert("Ko Ko is walking now")
}
 }

person1.hobby = "football"

football ko pyin chin pyin lo ya pr tl

person1.hobby = "reading"
 
htae tr nk pyin tr thu thu pl

perason1.isMale = true

person1.eat = () => {alert("Aung Paing is Eating Now")}

object tawe ka ko tai phan shi tr ma hok pl server ka lr tk object tawe lal fik nai pr tl
object ko key new key htae tone

hasGirlfriend
var htae mhan kyo tin ma ti tk a khar lo vl htae ma lal


string concat pyan shin 

let firstName = "Page"
let lastName = "Myanmar"
const fullName = firstName + " " + lastName


const List ={
  donatedByMgMg : 10000,

}



const o = {name : "Oo"}
o = {}  <-- mhar


o.age = 32



obj htel mr obj htae lo ya pr tl

const carInfo = {
   brand: "Suzuki",
   price: "8000000",
   model : "2018",
  color : "white"
 }

let person1 = {
 name : "Ko Ko" ,
 age: 22,
 howntown :"yangon",
 height : 6,
 dateOfBirth : "02/02/2000" ,
 isActor:true,
 walk : ()=> {
   alert("Ko Ko is walking now")
}
 }

person1.car = carInfo


person1.car.price 


window obj

alert("hello") js ka nay access lope ya tk function
window ka lal ek lo pl browser ka nay pr lr tk obj

alert ka window ka pr lr tk function

window.alert("okok")

window.console

f ka function

window.console.log("welcome")

console.log("Welcome to Myanmar")




Array 

{}  //empty obj       unorder collection 
[]  // empty array    order collection

const a = { z : "1" , b : "2" ,k :"3"} a htel mr shi tr ko property
 
const b = ["Yangon","Mandalay","Saging"] a htel mr shi tr ko element

why order collection lal so tot index call lo ya lo 

index ka 0 ka sa pr tl 

array yk value ko tot index nk ya u ya pr ml

order[0]

order[1]
order["1"] wrong 

array property

array.length (array htel mr element vl na ku shi lal pya pay tr pr)

let a = [1,2,3,4,5,6,7]

a.length

push method

order.push()
order.push("May Myo")
order[3]

array order
obj unorder


array yk nouth sone a kan ka value lo chin yin 

a.length-1 so pee u loh ya pr tl
array ka 0 ka sa lo pr

4-1 =3
order.length-1

let lastIndex = order.length-1
order[lastIndex]

 push so nouth sone mr htae pay pr tl

can push many thing
order.push("USA","China","Japan")

order.unshift("Bagan") -> shae sone mr htae pay tr pr
order.pop() -> nouth sone ka hrr ko delete
order.shift() ->shae sone ka hr ko delete


array htel mr shi tk vl element ma so remove lope chin yin 
index ko ti fob lo pr tl

order.push("Aya")
order.splice(2,1)
index 2 ka sa pee 1 ku pl remove


order.splice(2,3)

when array too big 
can seach index
order.indexOf("Yangon")

// if there is value a shae sone ka value yk key name ko pay pr ml
// ma shi tr so -1 lo return pyn pr tl

order.splice(order.indexOf("Yangon"),3)

array htel ko kyite tk data htae lo ya pr tl

array htel mr ll array htae lo ya par tl
like object like array(become 2d array).




