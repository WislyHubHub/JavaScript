function capToFront (str) {

    let all = "";
    let check = "";

    for(let i = 0; i < str.length; i++) {
        if(str[i] == str[i].toUpperCase()) {
            all += str[i];
        }else if(str[i] == str[i].toLowerCase()){
            check += str[i];
        }

    }
    return all + check;

}

console.log(capToFront("hApPy"));
console.log(capToFront("moveMENT"));
console.log(capToFront("shOrtCAKE"));