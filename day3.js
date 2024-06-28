const prompt = require("prompt-sync")();

// num=prompt("enter a number :")
// jan="1";
// prod=1;
// for(i=2;i<=num;i++)
// {
//     prod=prod*Number(i)
//     jan+="*"+i
// }
// console.log(jan+" = "+prod )





// num=+prompt("Give the No.of Fibonacci series :");
// arrr=[];
// n1=0,n2=1;
// i=1;
// while(i<=num){
//     arrr.push(n1)
//     n3=n1+n2;
//     n1=n2;
//     n2=n3;
//     i++;
  
// }
// prime=0;
// for(n of arrr){
//     if(n>1){
//         enter=true;
//         for(i=2;i<n;i++){
//             if(n%i==0){
//                 enter=false;
//                 break;
//             }
//         }
//       if(enter){
//         prime+=n;
//       }
//     }
// }
// console.log(`Sum fo prime numbers in an Fibonacci series is : ${prime} (${arrr})`)





let num=prompt("enter a number :")
let sum="";
for(n of num){
    if(!sum.includes(n)){
        sum+=n
    }
}
s="";
for(n of sum){
prod=1;
for(i=1;i<=n;i++)
{
    prod=prod*Number(i)
}
s=s+prod+" ";
}
console.log(`The factorial of Given number Excluding Duplicates is : `,s)




