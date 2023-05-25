const ul = document.querySelector("ul");
let arr = JSON.parse(localStorage.getItem("arr")) || [];

for (x of arr)
{
    const item = document.createElement("li");
    item.textContent = x;
    ul.append(item);
}

const ip = document.querySelector("input");

ip.addEventListener("keyup",function(e)
{
    if (e.key=="Enter")
    {
        let value = ip.value;
        ip.value="";
        const li = document.createElement("li");
        li.textContent = value;
        ul.append(li);
        arr.push(value);
        localStorage.setItem("arr",JSON.stringify(arr))
    }
})

// add delete functionality
// as home-work