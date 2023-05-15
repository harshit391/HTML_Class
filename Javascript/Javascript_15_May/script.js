// const h1 = document.querySelector("h1")

// h1.style.backgroundColor = "aqua"

// $()
// jQuery()
// We can use anyone to access jQuery

// $("h1").css("backgroundColor","aqua") () // includes selectors 
// // .css (styleformat , stylevalue)


// const myStyle = {
//     color : "red",
//     border : "2px solid",
//     backgroundColor: "yellow",
//     padding: "10px"
// }
// // Css Style Object

// $("h1").css(myStyle)

// // selecting classes and Ids
// $(".dc").css("color","red");

// $("#hulk").css("font-size","30px")
// We can only apply any one style
// for mulitple styling use object method like myStyle


// console.log($("p").text())
// // It will show all the text content of p tag

// $("p").text("This is new Text")
// // It will replace the text in the bracket

// // .html also works
// console.log($("p").html("This is new Text"))

// // selecting input box with a type we want
// // $('input[type="text"]').css("background-color","red")


// console.log($('input[type="text"]').attr("type")) // Get Attribute
// // It will display the type of input box

// console.log($('input[type="text"]').attr("type","radio")) // Set Attribute
// // To Change the type of input box

// $("li").css("color","red")
// $("li").first().css("color","yellow")
// $("li").last().css("color","green")

// console.log($("li")[1].css("color","blue"))
// It will give index but not apply css to its 
// This is becuase Jquery give style to objects not elements

// console.log($($("li")[1]).css("color","blue"))
// To Make it work we use Indexing

// console.log($("li")[2]) // This is an element
// console.log($($("li")[2])) // This is a jQuery Object

// addClass, removeClass, toggleClass

// $("p").addClass("red");

// $("p").removeClass("red");

// $("p").toggleClass("hide");


// const flash = document.createElement("li");
// // Jquery doesn't have method to create element

// flash.textContent = "flash";

// // $("li").first().after(flash)
// // Insert the element after the first element of list
// // before also works

// // Prepend Append

// // $("ul").append(flash)
// $("ul").prepend(flash)

// // hide show method

// $("p").hide();
// $("p").show();


// Event Listner in jQuery

$("button").on("click",function()
    {
        console.log("clicked");
    }
)

// $("button").on("mouseenter",function(event)
// {
//     event.target.style.color = "red"
// })

// in query


$("button").on("mouseenter",function(event)
{
    $(event.target).css("color","red");
})

$("button").on("mouseleave",function(event)
{
    $(event.target).css("color","");
})













