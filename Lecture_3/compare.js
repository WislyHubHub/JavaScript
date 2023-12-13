let value1 = ['Apple' ,2 ,false];
let value2 = ['Fries' ,2 ,true];
let value3 = ['Mars' ,9 ,'Apple'];

const check = value1.concat(value2 ,value3);

for (let i = 0; i < check.length ; i++ ) {
    
    for(let j = i + 1 ; j < check.length ; j++) {
        if (check[i] === check[j]){
            console.log(check[i] + " == " + check[j]);
        }
        
    }

}
