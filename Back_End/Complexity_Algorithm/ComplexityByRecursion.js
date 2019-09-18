
var complexityByRecursion = function (lineArr) {

    var ctc_arr = [];
    var checkArr = [];
    var methodName = '';
    var methodStart = 0;
    var methodEnd = 0;
    var isRecursive = false;

    var recursiveMethods = [];

    console.log(lineArr.length)
    for (i = 0; i < lineArr.length; i++) {
        var count = 0;
        ctc_arr.push(count)


        //check whether line contain any access modifiers
        if (lineArr[i].includes("public ") || lineArr[i].includes("private ") || lineArr[i].includes("protected ")) {

            //check whether line contain opening and closing brackets
            if (lineArr[i].includes("(") && lineArr[i].includes(")")) {

                //check whether line doesn't contains any periods
                if (lineArr[i].indexOf('.') == -1) {

                    //To find start and end of method
                    checkArr.push('{')
                    methodStart = i;

                    const charArr = lineArr[i].split('');
                    const index = lineArr[i].indexOf('(');
                    var startIndex = 0;
                    var endIndex = 0;

                    //Loop to find the method name
                    for (let x = index - 1; x >= 0; x--) {

                        if (x == index - 1) {
                            if (charArr[x] == ' ')
                                endIndex = x - 1;
                            else
                                endIndex = x;
                        }
                        else {
                            if (charArr[i] == ' ')
                                startIndex = x + 1;
                        }
                    }

                    methodName = lineArr[i].substring(startIndex, (endIndex + 1));

                }
            }
        }
        else {
            if (checkArr.length != 0) {

                if (lineArr[i].includes(methodName))
                    isRecursive = true;

                var charArr = lineArr[i].split('');

                //looping through each character
                for (c = 0; c < charArr.length; c++) {

                    if (charArr[c] == '{')
                        checkArr.push('{')
                    else if (charArr[c] == '}') {
                        if (checkArr.length != 0) {
                            checkArr.pop()

                            if (checkArr.length == 0) {
                                methodEnd = i;
                                recursiveMethods.push({
                                    startIndex: methodStart,
                                    endIndex: methodEnd,
                                    method: methodName,
                                    recursive: isRecursive
                                });

                                //Reset
                                methodName = '';
                                methodStart = 0;
                                methodEnd = 0;
                                isRecursive = false;

                                //break;
                            }

                        }

                    }
                }

                if (checkArr.length == 0) {
                    methodEnd = i;
                    recursiveMethods.push({
                        startIndex: methodStart,
                        endIndex: methodEnd,
                        method: methodName,
                        recursive: isRecursive
                    })

                    //Reset
                    methodName = '';
                    methodStart = 0;
                    methodEnd = 0;
                    isRecursive = false;
                    //break;
                }

            }
        }
        

    }

    //Now we have looped once to find the available methods
    //Let's loop again to check the whether they are fibbinoci

    if (recursiveMethods.length == 0) {
        console.log("Complexity By Recursion", ctc_arr, ctc_arr.length)
        return ctc_arr;
    }

    else {
        var numRecursive = 0;
        for (let chk = 0; chk < recursiveMethods.length; chk++) {
            if (recursiveMethods[chk].recursive) {
                numRecursive++;
            }
        }

        if (numRecursive == 0) {
            console.log("Complexity By Recursion", ctc_arr, ctc_arr.length)
            return ctc_arr;
        }

    }

    //Finally we current Java file has atleast one recursive method
    for (let chk = 0; chk < recursiveMethods.length; chk++) {
        if (recursiveMethods[chk].recursive) {
            var newStart = recursiveMethods[chk].startIndex;
            var newEnd = recursiveMethods[chk].endIndex;

            for (let rechk = newStart; rechk <= newEnd; rechk++) {
                ctc_arr[rechk] = 1;
            }
        }
    }

    console.log("Complexity By Recursion", ctc_arr, ctc_arr.length)
    return ctc_arr;

}

module.exports = complexityByRecursion;