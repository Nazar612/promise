const promise = new Promise((resolve, reject) => {
    const randomNum = Math.random() * 1
    if(randomNum > 0.3) {
        return resolve("Успішний успіх")
    }else{
        return reject("Не успішний не успіх")
    }
});
console.log(promise);
promise.then((value) => {
    console.log(value);
    return value
}).catch((error) => {
    console.log(error);

    promise.then((value) => {
    console.log(value);
    return value
}).catch((error) => {
    console.log(error);
    return error
})
}).finally(()=> {
    console.log("Щось відбулося");
});



function getUserData(username) {
    const newPromise = new Promise((resolve, error) => {
        setTimeout(()=> {
        const randomNum = Math.random() > 0.5;
        if(randomNum) {
            resolve(username)
        }else{
            error("Not uspix");
        }
    }, 2000);
    });

    return newPromise
};

getUserData("Artem").then((value) => {
    console.log(value);
}).catch((error)=> {
    console.log(error);
});

console.log(getUserData("Artem"));