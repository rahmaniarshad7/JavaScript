let companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];
companies.splice(2,1 , "Ola");
companies.push("Amazon")
console.log(companies);

function mufun(a , b)
{
  sum = a + b;
  return sum;
}
//let sum = mufun(5 , 6);
console.log(mufun(2 , 3));

const arrowsum = (a , b) =>{
  return a + b;
}
let sum2 = arrowsum(10 , 30);
console.log(sum2);


