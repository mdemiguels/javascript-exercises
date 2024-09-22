const palindromes = function (word) {

    word = word.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
    
    let wordReversed = '';
    for (let i = word.length - 1; i >= 0; i--) {
        wordReversed += word[i];
    }

    return wordReversed === word;

};

// Do not edit below this line
module.exports = palindromes;
