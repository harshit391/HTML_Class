let arr= [1,2,3,4,5];

let arr2 = [1,2,3,4,"harshit",69.69];



// Null is the 0th address in the memory which is reserved for waste

console.log(arr2[4])

let arr3 = [1,2,3,4,[3.14,5.44],[3,["harshit","singla"]]];

console.log(arr3[5][1][0])



// push pop

let arr4 = [1,2,3,4,5];

console.log(arr4)

arr4.push(9) //push in the new last index if not given index after comma 

console.log(arr4)

arr4.pop()

let x = arr4.pop() //pop the last index if not given

console.log(x)



// shift and unshift

console.log(arr4)

arr4.unshift(9) //shift the last index value to the 0th index

console.log(arr4)

arr4.shift() //remove the return the 0th index value of array

let y = arr4.shift() 

console.log(y)

console.log(arr4)








