let string = "Dehradunharidwar";
string.toLowerCase();
function countvowel(str)
{
  let count = 0;
  let vowel = ['a' , 'i' , 'e' , 'o', 'u']
  for(let i = 0; i < str.length; i++)
  {
    if(vowel.includes(str[i]))
    {
      count++;
    }
  }
  return count;
}
let count = countvowel("Dehradunharidwar")
console.log(count);


