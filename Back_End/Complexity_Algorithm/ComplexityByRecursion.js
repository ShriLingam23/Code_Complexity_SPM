
var complexityByRecursion = function (lineArr) {

    var ctc_arr = [];

    for (i = 0; i < lineArr.length; i++) {
        var count = 0;

        //check whether line contain any access modifiers
        if (lineArr[i].includes("public ") || lineArr[i].includes("private ") || lineArr[i].includes("protected ")) {

            //check whether line contain opening and closing brackets
            if (lineArr[i].includes("(") && lineArr[i].includes(")")) {

                //check whether line contains any periods
                if (lineArr[i].indexOf('.') == -1) {

                    const charArr = lineArr[i].split('');
                    const index = lineArr[i].indexOf('(');

                    for(i=index-1;i>=0;i--){

                        if(i!=index-1){
                            if(charArr[i]==' ')
                                const startIndex = i+1;
                        }
                    }

                }
            }
        }

        ctc_arr.push(count)

    }

    console.log("Complexity By Type", ctc_arr, ctc_arr.length)
    return ctc_arr;

}

module.exports = complexityByRecursion;