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
})