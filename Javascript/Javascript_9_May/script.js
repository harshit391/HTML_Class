// let paras = document.querySelectorAll("p");

// paras[0].setAttribute("class","redclass");

// paras[1].setAttribute("class","blueclass");

// paras[0].setAttribute("class","redclass bigText");

// paras[1].setAttribute("class","blueclass bigText");


// paras[0].classList.add("blueclass");
// paras[0].classList.add("bigText");

// paras[0].classList.remove("blueclass");


// paras[0].classList.add("hide");

// paras[0].classList.remove("hide");


// paras[0].classList.toggle("hide");
// paras[0].classList.toggle("hide");

let batman = document.querySelector(".dceu");

batman.classList.add("blueclass")

batman.parentElement.style.backgroundColor="aquamarine"
batman.parentElement.parentElement.style.backgroundColor="aqua"

batman.nextElementSibling.classList.add("redclass")

let li = document.createElement("li");

li.textContent = "Aquaman"

let ul = document.querySelector("ul")

ul.appendChild(li)

//Add to starting of list   
ul.prepend(li)









