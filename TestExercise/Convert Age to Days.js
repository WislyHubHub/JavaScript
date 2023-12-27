// function calcAge(number) {

//     const year = 365;
//     let total = 0;

//     for(let i = 0; i < number; i++ ) {
        
//         total += year;

//     }

//     console.log(total);

// }

function calcAge(number) {
    let month = 30;
    let total = 0;

    for(let i = 0; i < number; i++ ) {
        if (number == total) {
            console.log(total);

        }else {
            total += month * 12;
        
        }
    }

    console.log(total);

}


calcAge(65);
calcAge(0);
calcAge(20);