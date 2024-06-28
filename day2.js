// MUlTIPLE OPTIONS FOR 1 TO NUM
//----------------------------------
// const prompt = require("prompt-sync")();

// num=+prompt("enter a number1 : ");
// i=0;
// while(i<=num){
// console.log(i)
// i++
// }

// num=+prompt("enter a number2 : ");
// i=0;
// while(!(i-1==num))
// {
// console.log(i)
// i++
// }

// num=+prompt("enter a number3 : ");
// i=0;
// while(!(i==num+1))
// {
// console.log(i)
// i++
// }

// num=+prompt("enter a number4 : ");
// i=0;
// while(i!=num+1)
// {
// console.log(i)
// i++;
// }

// num=+prompt("enter a number5 : ");
// i=0;
// while(num>=i)
// {
// console.log(i)
// i++;
// }

// num=+prompt("enter a number6 : ");
// i=0;
// while(!(num+1<=i))
// {
//     console.log(i)
//     i++;
// }




// // MULTIPLE OPTIONS FOR 1 TO NUM
// // -------------------------------

// let num1=+prompt("enter a number6 : ");
// i=1;
// while(num1>=i)
// {
//     console.log(num1)
//     num1--;
// }



// let num2=+prompt("enter a number6 : ");
// i=1;
// while(num2>=i)
// {
//     console.log(num2)
//     num2--;
// }



// let num3=+prompt("enter a number6 : ");
// i=1;
// while(num3>=i)
// {
//     console.log(num3)
//     num3--;
// }



// let num4=+prompt("enter a number6 : ");
// i=1;
// while(num4>=i)
// {
//     console.log(num4)
//     num4--;
// }


// MULTIPLE OPTIONS FOR 



// // FINDING THE LARGEST PRIME NUMBER IN GIVEN NUMBER
// // -------------------------------------------------
// num = prompt("enter a number : ");
// let max = 0;
// let num1=true;
// for (n of num) {
//   if (n > 1) 
//   num1 = true;
//   {
//     for (i = 2; i < n; i++) {
//       if (n % i == 0) {
//         num1 = false;
//         break;
//       }
//     }
//     if (num1) {
//       if (max < n) max = n;
//     }
//   }
// }
// if(max==0 || max==1){
//     console.log("There is no Prime number Exists in given Number")
// }
// else
// console.log(`${max} is a Largest Prime number`);




// // SUM OF LARGEST AND SMALLEST PRIME NUMBERS IN GIVEN NNUMBER
// // ------------------------------------------------------------
// num = prompt("enter a number : ");
// let min=9;
// let max = 0;
// let num1=true;
// for (n of num) {
//   if (n > 1) 
//   num1 = true;
//   {
//     for (i = 2; i < n; i++) {
//       if (n % i == 0) {
//         num1 = false;
//         break;
//       }
//     }
//     if (num1) {
//       if (max < n) max = n;
//     }
//     if(num1){
//       if(min>n) min=n;
//     }
//   }
// }
// console.log(`The sum of largest [${max}] and smallest [${min}] Prime numbers is : `,Number(max)+Number(min))





// // FINDING THE LARGEST NON-PRIME NUMBER IN GIVEN NUMBER
// // -----------------------------------------------------
// num = prompt("enter a number : ");
// largest=0;
// for(n of num)
// {
//   if(n>1){
//    c=true;
//     for(i=2;i<num.length;i++)
//      {
//       if(n%i==0)
//        {
//         if(n>largest)
//          {
//           largest=n;
//           c=false;
//           break;
//          }
//        }
//      }
//   }
// }
// console.log(`largest non prime number in given number : `,largest)







