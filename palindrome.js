
function checkPal(str){

    const str1 = str.split('');
    const str2 = str1.reverse();
    const str3 = str2.join('');

    if(str == str3 ){
        console.log("It is a palindrome");
    }
    else{
        console.log("Not a palindrom");
    }
}
checkPal('madahm');