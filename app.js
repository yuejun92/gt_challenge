const controller = require('./controller.js');

const directoryPath = __dirname;

var arr = [];
controller.read(directoryPath, "TODO", arr)
  .then(result => {
    for(var key in arr){
      console.log(arr[key]);
    }
  })
  .catch(error => {
    console.log(error);
  })
