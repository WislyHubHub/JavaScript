function isValidIp(num) {

    let check = num.split(".");
    let Ip = 4;


    if(Ip == check.length && check[1] <= 255 && check[2] <= 255) {
        return true;
    }else{
        return false;
    }

    // for(let i = 0; i < num.length; i++) {
        
    // }

}

console.log(isValidIp("1.2.3.4")); // --> true;
console.log(isValidIp("1.2.3")); // --> false;
console.log(isValidIp("1.2.3.4.5")); // --> false;
console.log(isValidIp("123.45.67.89")); // --> true;
console.log(isValidIp("123.456.78.90")); // --> false;
console.log(isValidIp("123.045.067.089")); // --> false;
