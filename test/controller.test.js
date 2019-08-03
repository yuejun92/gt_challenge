const controller = require('../controller.js');
var expect = require('chai').expect;

const directoryPath = __dirname.replace("\\test", "");

describe('controller', function() {

  describe('searchKeyword', function() {
    it('responds with matching results', function() {
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

    it('should return empty array if a keyword that does not exist', function() {
      var keyword = "negative testing keyword";
      var expectedResult = [];
      var result = controller.searchKeyword(directoryPath, keyword);
      expect(result).to.deep.equal(expectedResult);
    });
  });
});
