const fs = require('fs');


var ignoreFiles = [
  "controller.js",
  "app.js",
  "node_modules"
]

function read(path, searchString, arr){
  return readTODO(path, searchString, arr);
}

/** recursive function to read directory and subdirectory to find the string
* {path} parameter: string - main directory to be searched
* {searchString} parameter: string - keyword to be searched
* {arr} parameter: array - path of the files contained the keyword
*/
async function readTODO(path, searchString, arr){
  var files = await readDir(path);
  for(var i = 0; i < files.length; i++){
    // ingore files
    if(ignoreFiles.indexOf(files[i]) === -1){
      var file = files[i];
      var currentFilePath = path + '/' + file;

      // Check if current file is a folder
      if (fs.statSync(currentFilePath).isDirectory()) {
        // Continue to go in to folder
        await readTODO(currentFilePath, searchString, arr);
      }
      else{
        // Read current file;
        var data = await readFile(currentFilePath);

        // Check if file contains "TODO" and ignore files
        if(data.toString().includes(searchString) && !ignoreFiles.includes(data)){
          arr.push(currentFilePath);
        }
      }
    }
  }
}

function readDir(path){
  return new Promise((resolve, reject) => {
    fs.readdir(path, function (err, files) {
      if(err) reject(err);
      resolve(files);
    });
  });
}

function readFile(path){
  return new Promise((resolve, reject) => {
    fs.readFile(path, function read(err, data) {
      if(err) reject(err);
      resolve(data);
    });
  })
}

module.exports.read = read;
