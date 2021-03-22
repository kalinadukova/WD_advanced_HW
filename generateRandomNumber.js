/* -------------------------------------------------------------------------- */
/*                            task: generateRandomNumber                      */
/* -------------------------------------------------------------------------- */
// Да се дефинира функцията generateRandomNumber(start, end), която генерира
// цяло случайно число в интервала, зададен чрез параметрите start и end.
// Hint: използвайте Math.random() функцията за генериране на случайно число.

function generateRandomNumber(start, end){
    let randomNum=Math.random()*end+1;
    randomNum = Math.floor(randomNum);
    return randomNum;
}

// примерно извикване:
let randomNumber = generateRandomNumber(1,100);
console.log( randomNumber );
// randomNumber трябва да е цяло число, като 1 >= randomNumber <=100