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

// const output =  incomeTex(25000, 11000);
// // const output =  incomeTex("jdjdjj", "hdhdh");
// console.log(output)


// problem solving -  2

function AddEmail(email){

    if(email.includes("@")){
        return "invalid number"
    }
    let splite = email.sp
    // console.log(splite)

    let username = splite[0];
    let domain = splite[1];
    const NewSreing = username + " send a number " + domain;
    return NewSreing
}
const output = AddEmail("golap.ph@gmail.com");
console.log(output)