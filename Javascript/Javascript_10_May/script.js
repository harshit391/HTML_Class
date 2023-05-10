// const batman = document.querySelector(".batman")

// // Parent Element
// batman.parentElement.style.backgroundColor = "#3333"

// // Child Previous Element
// batman.previousElementSibling.style.color = "red"

// // Child Next Element
// batman.nextElementSibling.style.color = "blue"

// const div = document.querySelector("div")

// console.log(div.children)

// div.children[0].style.color="red"

// const flash = document.createElement("li")

// flash.textContent = "Flash"

// div.children[1].append(flash)

// div.children[1].prepend(flash)

// const flash2 = flash.cloneNode()
// // Create a clone of element but not its content



// // Before After --> inserting sibling

// batman.after(flash)
// batman.before(flash)

// function handleClick()
// {
//     console.log("You Clicked 2")
// }

// const btn2 = document.querySelector('#button2')

// btn2.onclick = handleClick

// function sing()
// {
//     console.log("I am Singing")
// }

// // btn2.onclick = sing
// // btn2.onclick = cry

// function cry(Event)
// {
//     console.log(event);
//     console.log(event.target);
//     console.log("I am Crying")
//     event.target.style.backgroundColor = "gold"
//     event.target.style.color = "red"
//     event.target.style.fontSize = "20px"
// }

// Event Listner

const btn2 = document.querySelector("#button2")

// btn2.addEventListener("dblclick",sing);
// btn2.addEventListener("click",cry);


function handleMouseEnter(event)
{
    event.target.style.backgroundColor="yellow"
    event.target.style.fontSize = "20px"
    event.target.style.borderRandius = "5px"
}

btn2.addEventListener("mouseenter",handleMouseEnter)

function handleLeave(event)
{
    event.target.style = "revert"
}

btn2.addEventListener("mouseleave",handleLeave)

function handleCopy(event)
{
    console.log("Stop Crying 👌")
}

const lis = document.querySelectorAll("li");

for (let li of lis)
{
    li.addEventListener("copy",handleCopy)
}

const ip = document.querySelector("input");

function handlekeys(event)
{
    console.log(event);
}

function handlekeyup(event)
{
    console.log(event)
}

// ip.addEventListener("keydown",handlekeys)
ip.addEventListener("keyup",handlekeyup)


