function reverseint(n){
  
 const revered = n.toString().split('').reverse().join('');
 return revered;

}

console.log(reverseint(123));