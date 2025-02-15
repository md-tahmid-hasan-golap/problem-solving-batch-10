function waitingTime(array, numbers){
    if(!Array.isArray(array) || typeof numbers !== "number"){
        return "Invalid Input"
    }
    let totalTime = 0;

    for(let i = 0; i < array.length; i++){
        totalTime += array[i]
        // let sum = totalTime + array[i]
        
    }
//    console.log(totalTime);
//    console.log(sum);

let avaraheTime = Math.round(totalTime / array.length)
// console.log(avaraheTime)
let reminingPerson = numbers - 1 - array.length;
// console.log(reminingPerson)
let reminingTime = 0;
if(reminingPerson > 0){
    reminingTime = reminingPerson * avaraheTime
}
return reminingTime

   
}

const output = waitingTime([3, 5, 7, 11, 6], 10);
console.log(output)


