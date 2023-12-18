// You can also use promise in a function

const callCode = 200
const internetCheck = 0

function checkSite(){
    return new Promise((resolve, reject)=>{
        if (callCode == 200 && internetCheck) {
            resolve({
                name: "Site is well",
                message: "All thing is good"
            })
        }else if(callCode != 200 && internetCheck){
            reject({
                name: "API Call Error",
                message: "An error occured during API call"
            })
        }else{
            reject({
                name: "Internet Disconnected",
                message: "Please Check Your Internet"
            })
        }
    })
}

// Using then and catch methods to display the messages

checkSite().then((message) => {
    console.log(message);
}).catch((error) => {
    console.log(error);
})