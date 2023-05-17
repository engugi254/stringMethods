// Write a function to check whether two given strings are anagram of each other or not.
//  An anagram of a string is another string that contains the same characters, only the order 
//  of characters can be different. For example, “abcd” and “dabc” are an anagram of each other.
function isAnagram(str1, str2) {
    const sortedStr1 = str1.toLowerCase().split('').sort().join('');
    const sortedStr2 = str2.toLowerCase().split('').sort().join('');
  
    if(sortedStr1 === sortedStr2){
        console.log("They are anagrams");
    }
    else{
        console.log("Not anagram");
    }
  }
  isAnagram('listen','silent');