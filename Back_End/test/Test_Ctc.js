const prettier = require("prettier");
const fs = require('fs');
var assert = require('assert');

const complexityByType = require('../Complexity_Algorithm/ComplexityByType');

//Read from the file
var data = fs.readFileSync('./test/Main.java', 'utf8');

//Format according to the Syntax
const formattedText = prettier.format(data, {
  parser: "java",
  tabWidth: 2
});
console.log(formattedText)

var lineArr = formattedText.split(/(?:\r\n|\r|\n)/g);
//console.log(complexityByType(lineArr))

let resultArr = complexityByType(lineArr);

var sum = 0;
for (let i = 0; i < resultArr.length; i++) {
  sum += resultArr[i];
}

//Test case :1
describe('Correct Complexity By Type', function () {
  describe('#complexityByType()', function () {
    it('should return -1 when the value is not present', function () {

      assert.equal(sum, 15);
    });
  });
});

//Test Case :2
describe('Array', function () {
  describe('#indexOf()', function () {
    it('should return -1 when the value is not present', function () {
      assert.equal([1, 2, 3].indexOf(4), -1);
    });
  });
});

