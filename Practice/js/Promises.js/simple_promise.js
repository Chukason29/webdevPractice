// A promise accepts some sort of code and resolves it if the code is successful
// reject it if the code failed

// A promise is a function that waits for a piece of code to run completely

const isPhoneCallSucess = false

const phoneCall = new Promise((resolve, reject) =>{
    if (isPhoneCallSucess) {
        resolve("Call went through")
    }else{
        reject("Call failed")
    }
})

// You now use the then and catch methods to display the message of resolve
// and reject as needed

phoneCall.then((message)=> {
    console.log(message);
}).catch((error)=>{
    console.log(error);
})

