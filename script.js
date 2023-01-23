// complete the given function

function palindrome(str){
  var one = str.replace (/[^A-Z0-9]/ig , "").toLowerCase();

   var two = one.split('').reverse.join('');

   if(one == two){
    return true;
   }else {
    return false;
   }
}
module.exports = palindrome
