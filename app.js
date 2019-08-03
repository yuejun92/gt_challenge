const controller = require('./controller.js');

const directoryPath = __dirname;

var arr = controller.searchKeyword(directoryPath, "TODO");
console.log(arr);
