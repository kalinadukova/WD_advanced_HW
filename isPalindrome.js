/* -------------------------------------------------------------------------- */
/*                             task: isPalindrome                             */
/* -------------------------------------------------------------------------- */
// Да се дефинира функция isPalindrome, която връща "true" ако подадената й
// като аргумент дума е палиндром, и "false" - ако думата не е палиндром.
// Палиндром е дума, която се чете по един и същ начин от ляво надясно и от
// дясно наляво. Пример за палиндром са: мадам, боб, капак.

function isPalindrome(str){
    let size = str.length;

    for (let i = 0; i < size; i++) {
        if(str[i]!==str[size-i-1]){
            return false;
        }
    }
    return true;
}

// примерно извикване:
console.log( isPalindrome("madam") );// true
console.log( isPalindrome("test") ); // false
console.log( isPalindrome("abba") ); // true
console.log( isPalindrome("haha") ); // false
console.log( isPalindrome("cooc") ); // true
console.log( isPalindrome("nanana") ); // false
console.log( isPalindrome("na") ); // false
console.log( isPalindrome("n") ); // false