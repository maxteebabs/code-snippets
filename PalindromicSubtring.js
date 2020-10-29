//MaxiPalindromicSubstring
function isPalindromic(str){
  let revStr = str.split("").reverse().join("");
  return str === revStr;
}
function PalindromicSubstring(str) { 
  let maxPalindromicLength = 0;
  let maxPalindromic = "none";
  let str_length = str.length;
  for (let i = 0; i < str_length; i++) {
    let subs = str.substr(i, str_length);
    let subs_length = subs.length;
    for(let j= subs_length; j>=0; j--) {
        var rev_subs = subs.substr(1, j);
        
        if(rev_subs.length <= 2)
          continue;
        if(isPalindromic(rev_subs)) {
            if(rev_subs.length > maxPalindromicLength) {
                maxPalindromicLength = rev_subs.length;
                maxPalindromic = rev_subs;
            }
        }
    }
  }
  return maxPalindromic;
}
// keep this function call here 
console.log(PalindromicSubstring(readline()));  
