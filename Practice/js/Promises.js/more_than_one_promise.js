"use_strict"
//There are some time you have more than one promises

const promiseOne = new Promise((resolve, reject) => {
    let a = 9
    if (a > 5) {
        resolve("Great Score")
    }else{
        reject("Not so nice score")
    }
})
const promiseTwo = new Promise((resolve, reject) => {
    let x = 9
    if (x > 5) {
        resolve("Splendid Score")
    }else{
        reject("Not a score")
    }
})

const promiseThree = new Promise((resolve, reject) => {
    let y = 8
    if (y > 5) {
        resolve("Excellent Score")
    }else{
        reject("Hmm Score")
    }
})
// use the Promise.all() to call all the promises you want to run
// Note Once Promise.all() meets a reject, it output the catch error alone
//If doesnt meet a reject it outputs all resolves
Promise.all([
    promiseOne,
    promiseTwo,
    promiseThree
]).then((message) => {
    console.log(message);
}).catch((error) => {
    console.log(error);
})