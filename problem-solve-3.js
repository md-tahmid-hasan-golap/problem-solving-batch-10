function chekDigitsName(name){
    if(typeof name !== "string"){
        return "Invalid Input"
    }
   
  let containDigit = false;
    for(let i = 0; i < name.length; i++){
        let num = name[i];
        if(!isNaN(num) && num !== " "){
            containDigit = true;
            break;
        }
    }
    return containDigit;

}

const output = chekDigitsName("golap123");
// const output = chekDigitsName("golap");
// const output = chekDigitsName([12, 44]);
console.log(output)