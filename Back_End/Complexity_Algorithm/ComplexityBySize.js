/*This program file is used to measure complexity of line code due to size*/

var ctc_arr = [];
var count;

var sKeywords = ["new", "delete", "throw", "throws"]
var arithmetic = ["+", "-", "*", "/", "%", "++", "--"];
var relation = ["==", "!=", ">", "<", ">=", "<="];
var logical = ["&&", "||", "!"];
var bitwise = ["|", "^", "~", "<<", ">>", ">>>", "<<<"];
var misc = [",", "->", ".", "::"];
var assignment = ["+=", "-=", "*=", "/=", "=", ">>>=", "|=", "&=", "%=", "<<=", ">>=", "^="];
var keywords = ["void", "double", "int", "float", "String",
    "printf", "println", "cout", "cin", "if", "for", "while", "do while", "switch", "case"
];
var manipulators = ["endl", "\n"]

var countOOPConcepts = (line) => {
    if (line.includes("class")) {
        count++;
        return count;
    }
    else {

        for (index = 0; index < 5; index++) {
            if (line.includes(keywords[index]) && line.includes("()")) {
                if (line.includes("[]"))
                    count++;
                count++;

            } else if (line.includes(keywords[index]) && line.includes("[]")) {
                count++;

            } else if (line.includes(keywords[index]) && !line.includes("[]") && !line.includes("()")) {
                count++;
            }


        }
        return count
    }
};

var complexityBySize = function (lineArr) {
    for (let i = 0; i < lineArr.length; i++) {
        count = 0;
        //Increase count due to special keywords
        for (index = 0; index <= sKeywords; i++) {
            if (lineArr[i].includes(sKeywords[index])) {
                console.log(sKeywords[index]);
                count += 2;
            }
        }
        //Increase count due to aritHmetIc operators
        for (index = 0; index < arithmetic.length; index++) {

            if (lineArr[i].includes(arithmetic[index])) {
                if (arithmetic[index].length === 2) {
                    count--;
                }

                count++;
            }
        }
        //Increase count due to relational operators
        for (index = 0; index < relation.length; index++) {

            if (lineArr[i].includes(relation[index])) {
                if (relation[index].length === 2) {
                    count--;
                }
                count++;
            }
        }
        //Increase count due to Logical operators
        for (index = 0; index < logical.length; index++) {

            if (lineArr[i].includes(logical[index])) {
                if (logical[index].length === 2) {
                    count--;
                }
                count++;
            }
        }
        //Increase count due to bitwise operators
        for (index = 0; index < bitwise.length; index++) {

            if (lineArr[i].includes(bitwise[index])) {
                if (bitwise[index].length === 2) {
                    count--;
                }

                count++;
            }
        }
        //Increase count due to miscellaneous operators
        for (index = 0; index < misc.length; index++) {

            if (lineArr[i].includes(misc[index])) {
                if (misc[index].length === 2) {
                    count--;
                    if (misc[index].length === 3) {
                        count--;
                    }
                }
                count++;
            }
        }
        //Increase count due to assignment operators
        for (index = 0; index < assignment.length; index++) {

            if (lineArr[i].includes(assignment[index])) {
                if (assignment[index].length === 2) {
                    count--;
                    if (assignment[index].length === 3) {
                        count--;
                        if (assignment[index].length === 4) {
                            count--;
                        }
                    }
                }

                count++;
            }
        }
        //Increase count for keywords
        for (index = 0; index < keywords.length; index++) {

            if (lineArr[i].includes(keywords[index])) {
                count++;
            }
        }
        //Increase count for number of OOP concepts
        countOOPConcepts(lineArr[i])
        ctc_arr.push(count)
        // console.log(lineArr[i])
    }

    console.log("Complexity By Size", ctc_arr, ctc_arr.length)
    return ctc_arr;
};
module.exports = complexityBySize;