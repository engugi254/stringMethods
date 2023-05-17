function reverseWords(word){
    if(typeof word == 'number'){
        console.log('It must be a string');
    }
    const word1 = word.split('').reverse().join('');
    console.log(word1);
}
reverseWords('crowd');