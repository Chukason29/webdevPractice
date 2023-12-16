// A promise accepts some sort of code and resolves it if the code is successful
// reject it if the code failed

// A promise is a function that waits for a piece of code to run completely

const sensorDistance = 5

const checkSensorDistance = new Promise((resolve, reject)=>{
    if (sensorDistance > 2) {
        resolve("Keep Moving")
    }else{
        reject("Stop Moving")
    }
})

// You now use the then and catch methods to display the message of resolve
// and reject as needed

checkSensorDistance.then((message)=>{
    console.log(message);
}).catch((error)=>{
    console.log(error);
})



