// let arr = ['a','b','c','d','e','f'];


// console.log(arr.indexOf('c'));  
// // To print the index of the element of a specific array 

// console.log(arr.indexOf('x'));  
// // If element not present in the array it will return -1


// console.log(arr.includes('z')); 
// //return true if element present in list
// //return false if element not present in list


// arr.reverse(); 
// //It reverses the array
// console.log(arr);


// let arr2 = [9,5,1,2,3,4,7,5,3,2];
// arr2.sort();
// //It sorts the array in increasing order
// console.log(arr2);

//==================================================================================================================

// //Slice
// let arr = [2,3,4,5,6,7,8]
// console.log(arr.slice(2,4)); 
// //index 2 to index 3
// //not change the original array
// console.log(arr)

//==================================================================================================================


// //delete element in the array at any index

// let arr = [6,7,8,5,3,9,2,5];
// console.log(arr.splice(2,4));
// //it will delete 4 elements after index 2 in original array too
// console.log(arr)

//==================================================================================================================


// //insert using splice

// let arr = [1,3,5,4,1,2,3,6,4];
// arr.splice(2,0,10);
// //it will now insert the element using splice at 2 index
// // splice (startingindex , delete count , item to insert)
// //just write the elements comma seperated after 10 if you want to insert them too but at 2 index only
// //if want to insert at different index then you have to make another splice


//==================================================================================================================

// // split

// let url = "https://www.mappa.co.jp/en";
// let res = url.split("/");
// console.log(res);
// //Split Returns the array splitted by the element in the split bracket
// console.log(res[(res.length)-1])

//==================================================================================================================

// // join

// let arr = ["watashi","no","hashitto","singura","desu"];
// let res = arr.join(" ");
// //by which element we want to join the elements of array
// console.log(res)

//==================================================================================================================

// // functions in js

// function sqaure(num)
// {
//     return num*num;
// }

// let a = prompt("Enter a number");
// console.log(sqaure(a));

// function iseven(num)
// {
//     if (num%2==0) return true;
//     else return false;
// }

// console.log(iseven(a));

//=================================================================================================================

// map 

// let arr = [1,2,3,6,5,10,11,25,12];

// let arr2 = [];

// for (let i=0;i<arr.length;i++)
// {
//     arr2.push(sqaure(arr[i]));
// }

// console.log(arr2);

// let arr3 = arr.map(sqaure);
// // map says that the function will be applied to every element of the list
// console.log(arr3);

//=================================================================================================================

// // Filter

// let arr = [1,2,3,4,5,6,7,8,9,10];

// let res =  arr.filter(iseven);
// // it will return array to elements which return true on passing in iseven function
// //there is no way to include false value not true values
// console.log(res);

// let res2 = arr.filter(function larger(num)
// {
//     return num>5;
// })

// console.log(res2);

// let res3 = arr.filter(sqaure);
// console.log(res3)
// // Now it will return the numbers which gives true value
// // As the function square not returning true and false booleans

//==================================================================================================================

// // map if the function returns true and false

// let arr = [1,2,3,4,5,6,7,8,9,10];

// let res = arr.map(iseven);

// console.log(res);
// // It will return the true false values of every element of array

//=================================================================================================================

// let menu = [
//     {
//         "name":"pav bhaji",
//         "type":"veg"
//     },
//     {
//         "name":"masala dosa",
//         "type":"veg"
//     },
//     {
//         "name":"chicken",
//         "type":"non-veg"
//     },
//     {
//         "name":"matan",
//         "type":"non-veg"
//     }
// ]

// function vegfiler(item)
// {
//     return item.type=="veg";
// }
// let vegmenu = menu.filter(vegfiler);

// console.log(vegmenu);

//================================================================================================================

