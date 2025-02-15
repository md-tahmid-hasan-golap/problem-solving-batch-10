function sendNotification(email){

    if(!email.includes("@")){
        return "Invalid Email"

    }
   const splite = email.split("@")
   const userName = splite[0];
   const domainName = splite[1]

   const result = userName + " sent you an email from " + domainName;
   return result

}

const output = sendNotification("golap.ph@.gmail.com");
console.log(output)
