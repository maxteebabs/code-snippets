//String reduction of characters by replacement
function StringReduction(str) { 
  // code goes here  
  var combinations = {
    "ab": "c",
    "ac": "b",
    "bc": "a",
    "ba": "c",
    "ca": "b",
    "cb": "a"
  };
  var previous_str = null;
  while (str != previous_str) {
    previous_str = str;
    for(var key in combinations) {
      str = str.replace(key, combinations[key]);
    }
  }
  return str.length;
}
   
// keep this function call here 
console.log(StringReduction(readline()));
