// // Hide Show Toggle

// $("#off").on("click",function(){
//     $("div").hide(2000)
// })

// $("#on").on("click",function()
// {
//     $("div").show(2000)
// })

// $("#toggle").on("click",function(){
//     $("div").toggle(2000) // Time is in ms
// })

// ==============================================================

// // Fade in , Fade out , Fade Toggle

// $("#off").on("click",function(){
//     $("div").fadeOut(1000)
//     // $("div").fadeOut("slow")
//     // $("div").fadeOut("fast")
// })

// $("#on").on("click",function()
// {
//     $("div").fadeIn(1000)
//     // $("div").fadeTo(3000,0.5)
//     // $("div").fadeTo(Time,opacity)
// })

// $("#toggle").on("click",function(){
//     $("div").fadeToggle(2000) 
// })

// =================================================================

// // Slide Up Slide Down Slide Toggle

// $("#off").on("click",function(){
//     $("div").slideUp(1000)
// })

// $("#on").on("click",function()
// {
//     $("div").slideDown(1000)
// })

// $("#toggle").on("click",function(){
//     $("div").slideToggle(2000) 
// })

// ================================================================


// $("#on").on("click",function(){
//     $("div").animate(

//         {
//             left:"200px",
//             borderRadius:"50%",
//         },
//         1000
//     )

//     $("div").animate(

//         {
//             top:"200px",
//             borderRadius:"0%",
//             backgroundColor:"blue" 
//             // Color not works there
//         },
//         1000
//     )

//     $("div").animate(

//         {
//             borderRadius:"50%",
//             width:"120px",
//             height:"120px",
//         },
//         1000
//     )
// })

// $("#off").on("click",function(){
//     $("div").stop(true) // It stops all the animation by default false

//     // It will stop a single animation at which we click off button

//     // Pause Button
// })


// ===========================================================================================

// $(document).ready(
//     console.log("document is ready")
// )

// ===============================================================================

$("input").on("keydown",function(event){
    let key = event.key;

    if (key=="Enter") 
    {
        $("ul").append($(`<li>${event.target.value}</li>`));
        event.target.value = "";
    }

    $("li").on("click",function(event){
        event.target.remove();
    })
})










