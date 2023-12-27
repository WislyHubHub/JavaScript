function largestEven (arr) {

    let check = "-1";

    let number = Math.max(arr);

    for (let i = 0; i < arr.length; i++ ) {
        let sum = arr[i] % 2

        console.log(sum);
        
        if (arr[i] % 2 == 0) {
            
            if (arr[i] == number) {
                console.log(arr[i]);
            }

        }else {
            console.log("0");
        }

    }

}

largestEven([3,7,2,1,7,9,10,13]);
// largestEven([1,3,5,7]);
// largestEven([0,19,18973623]);

// let number = 3;

// if (number % 2 == 0) {
//     console.log("The number is " + number);
// }else {
//     console.log("The number is not " + number);
// }