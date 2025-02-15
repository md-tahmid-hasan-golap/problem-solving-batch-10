function calculateTaxe(income, expance){

    // console.log(income, expance)

    if(typeof income !== 'number' || income < 0 || typeof expance !== "number" || expance < 0 ){
        return "invalid number"
    }

    let textAmount = income - expance
    // console.log(textAmount)

    let tex = textAmount * 0.2
    return tex

}
const output = calculateTaxe(10000, 3000);
// const output = calculateTaxe("hshsh", "hdhg");
console.log(output)