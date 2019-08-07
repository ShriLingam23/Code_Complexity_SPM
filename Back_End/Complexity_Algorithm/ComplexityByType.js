
var complexityByType = function(lineArr){

    var ctc_arr =[];

    for(i=0;i<lineArr.length;i++){
        var count =0;
        if(lineArr[i].includes("if")) {
            count++;
            console.log(count)
            if(lineArr[i].includes("&") || lineArr[i].includes("|")) {
                var ch = lineArr[i].split('');
                for(x=0 ; x<ch.length;x++) {
                    if(ch[x]=='&' || ch[x]=='|') {
                        if(ch[x+1]=='&' || ch[x]=='|') {
                            count++;
                            x++;
                        } else {
                            count++;
                        }
                    }
                }
                console.log(count)
            }
        } else if(lineArr[i].includes("for") || lineArr[i].includes("while")|| lineArr[i].includes("do") ) {
            count+=2;
            console.log(count)
            if(lineArr[i].includes("&") || lineArr[i].includes("|")) {
                var ch = lineArr[i].split('');
                for(x=0 ; x<ch.length ; x++) {
                    if(ch[i]=='&' || ch[i]=='|') {
                        if(ch[i+1]=='&' || ch[i]=='|') {
                            count+=2;
                            i++;
                        } else {
                            count+=2;
                        }
                    }
                }
                console.log(count)
            }
        } else if(lineArr[i].includes("catch")) {
            count++;
        } else if(lineArr[i].includes("switch")) {
            
            
            
        }

        ctc_arr.push(count)

    }

    // return ctc_arr;
    console.log(ctc_arr,ctc_arr.length)

} 

module.exports = complexityByType;