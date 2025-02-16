function TextCalculate(MonthlyIncome, Monthlyexpenses){


    if(typeof MonthlyIncome !== "number" || MonthlyIncome < 0 || typeof Monthlyexpenses !== "number" || Monthlyexpenses < 0){
        return "Invalid Input"

    }
    const diff = MonthlyIncome - Monthlyexpenses;
    const result = diff * 0.20;
    return result

}
// const output = TextCalculate('gghhjhj', 'uhgf');
const output = TextCalculate(10000, 3000);

console.log(output)