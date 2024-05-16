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

function reverse(str)
{
    let reversed = '';
    for(let char of str)
        {
            reversed = char + reversed
        }
        return reversed
}
console.log(reverse('abmik'));