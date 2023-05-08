// console.log("Hello\n")


// //math object

// console.log(Math.PI)

// console.log(Math.E)


// //minmax

// console.log(Math.min(2,3,4,5,1,0,7))

// console.log(Math.max(2,3,4,5,1,0,7))


// //In Arrays

// console.log(Math.min(...[1,2,3,4,5]))


// //floar and ciel

// console.log(Math.ceil(3.2)) //ciel is ceiling value or one numnber ahead integer value of float value

// console.log(Math.floor(3.6)) //floor is the floor value or return the integer without decimal of float value

// console.log(Math.round(5.658)) //roundoff


// //Random

// console.log(Math.random()) //random float values from 0 to 1

// console.log(Math.random()*10) //to generate from 1 to 10

// console.log(Math.random()*100) //to generate from 1 to 100

// console.log(Math.ceil((Math.random())*10)) //generate integers from 1 to 10


// //10 to 20

// console.log(Math.ceil(Math.random()*10)+10) 


// //100 to 500

// console.log((Math.random()*400)+100)


// let a = true,b=true;


// // && || !
// if(a || !b)
// {
//     console.log("Both are true")
// }
// else
// {
//     console.log("One Thing is False")
// }

// if(a && !b)
// {
//     console.log("Both are true")
// }
// else
// {
//     console.log("One Thing is False")
// }

// if(a && b)
// {
//     console.log("Both are true")
// }
// else
// {
//     console.log("One Thing is False")
// }

// if(!a || !b)
// {
//     console.log("Both are true")
// }
// else
// {
//     console.log("One Thing is False")
// }



// // Check if x is less than 
// // equal or greater than y

// let x = 5;
// let y=6;

// if (x<y)
// {
//     console.log("x is greater")
// }
// else
// {
//     console.log("y is greater")
// }

// if (x>y)
// {
//     console.log("x is greater")
// }
// else
// {
//     console.log("y is greater")
// }


// //Printing random list elements

// let s = "abcdefghijklmnopqrstuvwxyz"
// console.log(s[Math.floor(Math.random()*26)])


// //else if 

// a = 5
// b=6

// if (a>b)
// {
//     console.log("x is greater")
// }
// else if (a==b)
// {
//     console.log("x is equal to y")
// }
// else 
// {
//     console.log("y is greater than x")
// }


// //Some Warnings and error

// console.warn("THis is a Warning")

// console.error("THis is an error")



// //input in javascript

// x = prompt("Enter your Age")

// console.log(typeof(x));

// if(x<18) 
// {
//     console.log("Can not Vote");
// }

// else 
// {
//     console.log("You can Vote");
// }

// let p = 12,q="12";

// if (p==q) 
// {
//     console.log("Equal");
// }

// if (p===q)
// {
//     console.log("Equal Data Type"); //It will also check data type
// }
// else 
// {
//     console.log("May be equal but not equal data type");
// }


// // find largest among three numbers

// a = 5, b=7, c=2;

// if (a>b && a>c) 
// {
//     console.log(`${a} is largest`);
// }
// else if (b>a && b>c)
// {
//     console.log(`${b} is largest`);
// }
// else 
// {
//     console.log(`${c} is largest`);
// }


// //for loop

// for (let i=0;i<5;i++)
// {
//     console.log(i);
// }

// let m = 0;
// for (;m<5;)
// {
//     console.log(i);
//     m++;
// }


// //while loop

// let i = 0;
// while(i<10)
// {
//     console.log(i);
//     i++;
// }

// let fruits = ["mango","banana","apple"];

// // console.log(fruits.indexOf("banana"))

// for (fruit of fruits)
// {
//     console.log(fruit);
// }


//Making a Object in JS

let person = {
    name:"Harshit",
    place:"Sanaur",
    age:19
}

console.log(person["name"])
console.log(person.name)


let v = "name"

console.log(person[`${v}`]) 












