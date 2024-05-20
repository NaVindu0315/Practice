//to reverse string

/*
 

function reverse(str)
{
    let reversed = '';

    for(let i=0;i<str.length; i++)
        {
            //to add letters to the reversed word
            reversed = str[i] + reversed
        }

    return reversed
}

console.log(reverse('kcuf'));
*/

///another way
/*
function reverse(str)
{
    let reversed = '';
    for(let char of str)
        {
            reversed = char + reversed
        }
        return reversed
}*/

function reverse(str)
{
    const strtarray = str.split('');
    strtarray.reverse();

    return strtoarray.join('');
}
console.log(reverse('abmik'));


