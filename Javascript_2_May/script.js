console.log("Hello JS")

//REPL --> Read, evaluate, print, loop

/*Camel Case = myName
In this if multiple words are coming
then the first letter of first world only is in small case
and the otherwords first letter is in uppercase*/

let s2 = "HELLO WAIFU CHANNNNNNNNN"

// to use double string in a string line
let s3 = "this is string named \"s3\""

// this is called escape characer


//s3.tolowercase will convert the whole string to lower case
let s4 = s2.toLowerCase()

console.log(s4)

s5 = '                it trims the space             '
// This will trim the space in s5
console.log(s5.trim())

// method chainign
s6 = "                   THIS IS A CHAIN                    "
console.log(s6.trim().toLowerCase())


// Substring
s7 = "nicemanveryverynice"
console.log(s7.substr(-3,5))
// start from index 3 and taking 5 character after it

/* Negetive Indexing Works in it then it 
will only works till the string end*/

// Substring2
console.log(s7.substring(0,6))
// print number from index 0 to index 5 (6 is not included)

// indexof
console.log(s7.indexOf("n"))
// it will prove the index of the string when it occurs 
// for the first time in the whole string

console.log(s7.indexOf("n",2))
// if n occurs anywhere after index 2 then it will 
// provide its index

// backticks ==> ``

let firstname = "Harshit"
let lastname = "Singla"

let s8 = `${firstname} ${lastname}`
// ${} this will evaluate whatever in this bracket is
console.log(s8)

