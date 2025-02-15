// problem solving -  1

function incomeTex(income, expance){

    if(typeof income !== "number" || income < 0 || typeof expance !== "number" || expance < 0){
        return "invalid input"
    }
    console.log(income, expance)
    let textAmmount  = income - expance;
    let tex = textAmmount * 0.2;
    return tex

}

const output =  incomeTex(25000, 11000);
// const output =  incomeTex("jdjdjj", "hdhdh");
console.log(output)