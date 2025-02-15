// // problem number - 1 

function bazarHishab(totalMoeny, morich, mach, shobji) {
    const cost = morich + mach + shobji;
    const sum = totalMoeny - cost;
    return sum;
}

const totalMoeny = 500;
const morich = 100;
const fish = 200;
const shobji = 50;

const restMoney = bazarHishab(totalMoeny, morich, fish, shobji);

console.log(restMoney)


// problem number - 2

function findHena(list) {
    let temp = [];
    for (let i = 0; i < list.length; i++) {
        const patriName = list[i]; 
        if (patriName.includes("h")) {
            temp.push(patriName)
        }
    }
    return temp;

}

const patriList = ["rahima", "sokina", "borsha", "apa", "morjina", "reshma", "karishma", "hena"];

const newPatriList = findHena(patriList);
console.log(newPatriList)

// // // problem number - 3

function sendProposal(heroBio, patriBio) {
    
    if (typeof heroBio ==="object" && typeof patriBio ==="object" && !Array.isArray(heroBio)) {
        if (heroBio.district===patriBio.district) {
            return "proposal done"
        }
        else {
            return 'NOOOOOOOOOOO'
        }
    } else {
       return "invalid input"
    }
    
}

const heroBioData = {
    name: "hero alom",
    age: 20,
    district: "dhaka",
    fatherName: "Omuk",
    email:"h@gmail.com"
}

const henaBioData = {
    name: "hena",
    age: 20,
    district: "dhaka",
    fatherName: "tomuk",
    email:"hena@gmail.com"
}

const status = sendProposal(heroBioData, henaBioData);
console.log(status)


// // problem number - 4



function removeDuplicate(mainList) {
    let newDawatList = [];
    for (const relative of mainList) {
        let isUnique = true;
        for (const newRelative of newDawatList) {
            if (relative.name===newRelative.name && relative.member===newRelative.member) {
                isUnique = false;
                break;
            }
        }
        if (isUnique) {
            newDawatList.push(relative)
        }
    }
    return newDawatList;
}


const relatives = [
    { name: "Alice", member: 1 },
    { name: "Bob", member: 2 },
    { name: "Charlie", member: 3 },
    { name: "Alice", member: 1 },
    { name: "David", member: 4 },
    { name: "Eve", member: 5 },
    { name: "Bob", member: 2 },
    { name: "Frank", member: 6 },
    { name: "Grace", member: 7 },
    { name: "Alice", member: 1 }
 ];

const result = removeDuplicate(relatives);
console.log(result)









// let sumTotal = 0;
// for (person of relatives) {
//     sumTotal=sumTotal+person.member
// }

// console.log(sumTotal)