//Error Handling

const number1 = 10;
 number1 += 1;
 alert("Finish");

 let number = 10;
 number += 1;
 alert("Finish");

 const video = ["Music","Music1","Music2","Music3"];
 const sideVideo = () => {
   console.log("start")
    for (const i = 0; i <video.length; i++){
        console.log("Show side video")
    }
 }
 const mainVideoPlay = () =>{
    console.log("Main video play")
 }
 const showComment = () =>{
    console.log("Show Comment")
 }
 sideVideo();
 mainVideoPlay();
 showComment();

 //try ...catch

 try{


 }catch(error){

 }
 
 try{
  const number = 1;
  number += 1;
 }catch(error){
    console.log("Error :" , error)
 }
 alert("Finish")

const video = ["Music","Music1","Music2","Music3"];
const sideVideo = () => {
    for (const i = 0; i <video.length; i++){
      console.log("Show side video")
    }         
 }
 const mainVideoPlay = () =>{
   console.log("Main video play")
 }
 const showComment = () =>{
   console.log("Show Comment")
 }
 try{
     sideVideo();
 }catch(err){
    console.log("Error :" ,err)
 }
 mainVideoPlay();
 showComment();

//scope

//local scope

let pageGlobel = "Facebook" //--> global scope
const exampleFunction = () =>{
    let pageName = "Page Myanmar" //---->Local scope
}

console.log(pageGlobel); 
console.log(pageName); 

var town = "Yangon";
window.town

let town2= "Saging"
window.town2

const town3= "Saging"
window.town3



//window mr property a nay nk shi tr ka var nk kyay nyar lo par

// globel scope htel mr shi tk hrr ko function htel mr lope lo ya

let pageGlobel = "Facebook" //--> global scope
const exampleFunction1 = () =>{
  alert(pageGlobel);
  let a = "local scope"
 }
 const exampleFunction2 = () =>{
    alert(a);
   }

   //Block scope 

  //A cant ta Cant {} htel ka hr ko solo par tl
  //use in if , switch, for, while

  {
    let blockVariable1 = 5;  //block scope = local scope
    const blockVariable2 = 5;  //block scope = local scope
    var varVariable = 2;  // not block scope
}

   console.log(blockVariable1);
   console.log(blockVariable2);
   console.log(varVariable);

   const scopeExample =() => {
    
   var num1 = 10;
   if(num1 === 10){

     var numWithVar = 1;
     let numwithLet = 2;
     const numwithConst = 3;
   
    }
  
   console.log(numWithVar)
   console.log(numwithLet)
   console.log(numwithConst)

   }

   scopeExample()


 let userName ="Mg Mg"
   const scopeExample =() => {
    var num1 = 10;
    if(num1 === 10 ){
      var numWithVar = 1;
      let numwithLet = 2;
      const numwithConst = 3;
    }
    console.log(numWithVar)
   //  console.log(numwithLet)
   //  console.log(numwithConst)
    const innerFunction = () =>{
        console.log("This is Inner Function" ,numWithVar)
    }
    innerFunction()
    }

    scopeExample()
    innerFunction()  // ---> errorz

// page 56  