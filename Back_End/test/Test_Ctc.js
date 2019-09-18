// const prettier = require("prettier");
// const fs = require('fs');

var assert = require('assert');

// var data = fs.readFileSync('./Main.java');

// fs.readFile('./Main.java', function read(err, data) {
//     if (err) {
//         throw err;
//     }
//     content = data;

//     // Invoke the next step here however you like
//     console.log(content);   // Put all of the code here (not the best solution)
//     processFile();          // Or put the next step in a function and invoke it
// });


// var currentData = data.toString();

// const formattedText = prettier.format(currentData, {
//     parser: "java",
//     tabWidth: 2
// });

// var lineArr = formattedText.split(/(?:\r\n|\r|\n)/g);

describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal([1, 2, 3].indexOf(4), -1);
    });
  });
});

// describe('Correct Complexity By Type', function() {
//     describe('#indexOf()', function() {
//       it('should return -1 when the value is not present', function() {
//         assert.equal(complexityByType(lineArr).reduce((a, b) => a + b, 0), 20);
//       });
//     });
//   });