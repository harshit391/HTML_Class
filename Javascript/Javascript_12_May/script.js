const ip = document.querySelector("input");

const ul = document.querySelector("ul")

console.log(ip)
ip.addEventListener("keydown",function(event)
{


    if(event.key=="Enter")
    {
        const li = document.createElement("li");
        li.textContent = ip.value;
        ul.append(li);
        ip.value="";
    }

    const lis = document.querySelectorAll("li");

    for (li of lis)
    {
        li.addEventListener("click",function(event)
        {
            event.target.remove();
        })
    }
});



