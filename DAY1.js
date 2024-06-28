const prompt = require("prompt-sync")();
// let a=prompt("enter a number:");
// sum=0;
// for(i=0;i<a.length;i++)
// {
//     if(a[i]%2==1)
//     {
//         sum+=Number(a[i])
//     }
// }
// console.log(`Sum of ODD digits in given number is : `,sum)



// let b=prompt("enter a number:");
// sum=0;
// for(i=0;i<b.length;i++)
// {
//     if(b[i]%2==0)
//     {
//         sum+=Number(b[i])
//     }
// }
// console.log(`sum of EVEN digits in a Number is :`,sum)





// let diff=prompt("enter a number : ");
// evensum=0;
// oddsum=0;
// for(i=0;i<diff.length;i++)
// {
//     if(diff[i]%2==0)
//    {
//     evensum+=Number(diff[i])
//    } 
//    else if(diff[i]%2==1)
//    {
//     oddsum+=Number(diff[i])
//    }
// }
// console.log(`Difference between ODD sum and EVEN sum : `,evensum-oddsum)






let big=prompt("enter a number :");
evensum=0;
oddsum=0;
for(i=0;i<big.length;i++)
{
    if(big[i]%2==0)
   {
    evensum+=Number(big[i])
   } 
   else if(big[i]%2==1)
   {
    oddsum+=Number(big[i])
   }
}
if(evensum>oddsum)
console.log("EVEN sum is bigger")
else
console.log("ODD sum is bigger")
