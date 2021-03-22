/* -------------------------------------------------------------------------- */
/*                           task: countEvenNumbers                           */
/* -------------------------------------------------------------------------- */
// Да се дефинира функция countEvenNumbers, която връща броя четни числа в
// подаденият й масив от числа.

function countEvenNumbers(arr){
    let counter=0;
    for (let i = 0; i < arr.length; i++) {
        if(arr[i]%2 == 0){
            counter++;
        }
    }
    return counter;
}

// примерно извикване:
let evenCount = countEvenNumbers( [1,4,2,3,5] );
console.log( evenCount );
// 2