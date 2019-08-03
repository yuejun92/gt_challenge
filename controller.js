const fs = require('fs');


var ignoreFiles = [
  "controller.js",
  "app.js",
  "node_modules",
  "controller.test.js"
]


/** read function
* {path} parameter: string - main directory to be searched
* {searchString} parameter: string - keyword to be searched
* return  array - path of the files contained the keyword
*/
function searchKeyword(path, searchString){
  var arr = [];
  recursiveSearch(path, searchString, arr);
  return arr;
}

/** recursive function to read directory and subdirectory to find the string
* {path} parameter: string - main directory to be searched
* {searchString} parameter: string - keyword to be searched
* {arr} parameter: array - path of the files contained the keyword
*/
function recursiveSearch(path, searchString, arr){
  var files = fs.readdirSync(path);
  for(var i = 0; i < files.length; i++){
    // ingore files
    if(ignoreFiles.indexOf(files[i]) === -1){
      var file = files[i];
      var currentFilePath = path + '/' + file;

      // Check if current file is a folder
      if (fs.statSync(currentFilePath).isDirectory()) {
        // Continue to go in to folder
        recursiveSearch(currentFilePath, searchString, arr);
      }
      else{
        // Read current file;
        var data =  fs.readFileSync(currentFilePath);

        // Check if file contains "TODO" and ignore files
        if(data.toString().includes(searchString) && !ignoreFiles.includes(data)){
          arr.push(currentFilePath);
        }
      }
    }
  }
}

module.exports.searchKeyword = searchKeyword;
