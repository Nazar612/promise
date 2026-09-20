const checkAge = (age) => { 
    const newPromise2 = new Promise((resolve, error) => {
        setTimeout(() => {

        if (age >= 18) {
             resolve("Access granted") 
            }else{
            error("Access denied") 
        }

  }, 1000);    
});

    return newPromise2
 };

 checkAge(18).then((value) => {
    console.log(value);
    document.querySelector("#a").style.backgroundColor = "green"
 }).catch((error) => {
    console.log(error);
    document.querySelector("#a").style.backgroundColor = "red"
 })