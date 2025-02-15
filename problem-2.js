function sexdEmail(email){
    // console.log(email)

    let spliteEmail = email.split("@")
    // console.log(spliteEmail)

    let username = spliteEmail[0]
    let domain = spliteEmail[1]

    const newString = username + " sent a number " + domain;
    return newString

}

const output =sexdEmail("golap.ph@gmail.com")
console.log(output)
