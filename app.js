const fs = require('fs');

const directoryPath = __dirname;

readTODO(directoryPath);

async function readTODO(path){
  var files = await readDir(path);
  for(var i = 0; i < files.length; i++){
    var file = files[i];
    var currentFilePath = path + '/' + file;

    // Check if current file is a folder
    if (fs.statSync(currentFilePath).isDirectory()) {
      // Continue to go in to folder
      await readTODO(currentFile);
    }
    else{
      // Read current file;
      var data = await readFile(currentFilePath);

      // Check if file contains "TODO" and ignore "app.js"
      if(data.toString().includes("TODO") && file !== "app.js"){
        console.log(currentFile);
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
