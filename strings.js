// JavaScript Algorithm Samples -Strings

/* 1. String Repeat - Given a string return the repeated string a specified number of times.
    a. create empty string 
    b. set loop to iterate until reach number
    c. add string to new string
    d. return new string */

const strRepeat = (str, num) => {
    let newStr = '';
    for (let i = 1; i <= num; i++) {
        newStr = newStr + str
       
    }
    return newStr;
}
         

/* 2. String Reverse  - Given a string, return the reverse of the string
    Most straight forward way using string and array methods

    a. convert string to array
    b. reverse the array
    c. join back to string
    d. return new string */

const revStr = (str) => {
    let newStr = str.split('').reverse().join('');
    return newStr;
}  

    /* OR
    Without using reverse method

    a. create empty string
    b. loop through characters
    c. concatenate char with newStr to equal new string */

const revStr = (str) => {
    let newStr = ''

    for (let char of str) {
        newStr = char + newStr;
    }
    return newStr;
}

/* 3. Most Used Character - Given a string, return the character most used in the string;
    a. use empty object to hold string info
    b. iterate through string and set key/value with character/count
    c. keep track of count and increment if over 1
    d. iterate through obj to get character and count
    e. return character that has most */

    const MostChar = (str) => {
        const strObj = {};
        let most = 0;
        let mostChar = '';

        for (let char of str) {
            strObj[char]= strObj[char] +1 || 1   
        }
        for (let key in strObj) {
            if(strObj[key] > most) {
                most = strObj[key];
                mostChar = key;
            }
        }
        return mostChar;
    }

    /* 4. Palindrome -  Given a string, check to see if a it is the same forward as backward. 
        a. normalize string - to lowercase
        b. remove punctuation and spaces using reg exp
        c. convert to array, reverse, join back to string
        d. console.log response*/
    
    
    const palindrome = (str) => {
        let string = str.toLowerCase().replace(/[\W\_]/g, "");
        let newString = string.split('').reverse().join('');
        
        string === newString ? console.log('Palindrome') : console.log('Not a palindrome')
    }
   
   