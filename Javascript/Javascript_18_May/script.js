// // Time Delay

// console.log("Start")

// function changeh1()
// {
//     const h1 = document.querySelector("h1");
//     h1.classList.toggle("red")
// }

// function delay()
// {
//     let time = new Date().getTime();
//     let time2 = new Date().getTime() + 3000;

//     while (time<time2)
//     {
//         time = new Date().getTime();
//     }
//     console.log(time);
//     console.log("Delayed Function");

// }

// delay()
// changeh1();
// console.log("End")


// function changeh1()
// {
//     const h1 = document.querySelector("h1");
//     h1.style.color="red";
// }

// ==========================================================================

// // setTimeout and ClearTimeout
// function changeh1()
// {
//     const h1 = document.querySelector("h1");
//     h1.classList.toggle("red")
// }

// console.log("Start");

// let id1 = setTimeout(changeh1,2000);
// // This is done by browser

// console.log("End");

// const btn = document.querySelector("button");

// btn.addEventListener("click",function () {
//     clearTimeout(id1)
// })


// =========================================================================

// SetInterval and Clear Interval

function changeh1()
{
    const h1 = document.querySelector("h1");
    h1.classList.toggle("red")
}

console.log("Start");

let id1 = setInterval(changeh1,500);
// This is done by browser

console.log("End");

const btn = document.querySelector("button");

btn.addEventListener("click",function () {
    clearInterval(id1)
})