const controller = require('../controller.js');
var expect = require('chai').expect;

describe('controller', function() {

  describe('searchKeyword', function() {
    it('responds with matching results', function() {
      const directoryPath = __dirname.replace("\\test", "");
      console.log("directoryPath:",directoryPath);
      var keyword = "TODO";
      var expectedResult = [
        'C:\\dev\\dir/somedir/somemodule/somefile.js',
        'C:\\dev\\dir/somedir/somemodule/someotherfile.js',
        'C:\\dev\\dir/somedir2/anotherdir/index.js',
        'C:\\dev\\dir/somedir2/anotherdir/yet_another_dir/index.js',
        'C:\\dev\\dir/somedir2/index.js',
        'C:\\dev\\dir/somedir3/another_file.js' ];
      var result = controller.searchKeyword(directoryPath, keyword);
      expect(result).to.deep.equal(expectedResult);
    });
  });
});
