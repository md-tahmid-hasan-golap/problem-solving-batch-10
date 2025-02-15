function calculateFinalScore(input){

    if(typeof input.name !== "string" || typeof input.textScore !== "number" || typeof input.schoolGrade !== "number" || typeof input.isFFamily !== "boolean" ){
        return "Invalid Input"
    }
    let finalScore = input.textScore + input.schoolGrade;
    console.log(finalScore) 
        if(input.isFFamily === true){
            finalScore = finalScore + 20;
        }
        // console.log(finalScore)

        if(finalScore >= 80){
            return true
        }
        else{
            return false
        }
}

const output = calculateFinalScore({
    name : "Rajib",
    textScore : 45,
    schoolGrade : 25,
    // isFFamily : true
    isFFamily : false

})

console.log(output)

