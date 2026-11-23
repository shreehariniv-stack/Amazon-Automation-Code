let word="Javascript is a programming language";

let words=word.split(" ");
let result="";

for(let i=words.length-1;i>=0;i--){

    let rev="";
    for(let j=words[i].length-1;j>=0;j--){
        rev=rev+words[i][j];
    }
    result=result+rev+" ";
}

console.log(result.trim());

