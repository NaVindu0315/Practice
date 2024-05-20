function pal(str)

{
   var  paka =   str.split('').reverse().join('');
   if (paka===str)
   {
      return true;
   }
   else
   {
    return false;
   }
}
console.log(pal('paka'));