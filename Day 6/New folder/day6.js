const fetchData = (callback) => {
     console.log("Fetching data from server...")
     //loading
     console.log("Finished fetching data...")
     callback();
}
const outerFunction = () => {
     const showImage = () => {
          console.log("show Image...") }
     fetchData(showImage);
}

outerFunction();


fetchData();
showImage();