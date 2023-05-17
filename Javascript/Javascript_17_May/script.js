let s = "X";
let clicked1 = 1;
let clicked2 = 1;
let clicked3 = 1;
let clicked4 = 1;
let clicked5 = 1;
let clicked6 = 1;
let clicked7 = 1;
let clicked8 = 1;
let clicked9 = 1;
let draw = 0;

$(".inside1").on("click",function()
{
    if (s=="X" && clicked1==1) {$(".inside1").append(`${s}`);s="O";clicked1=2;draw++;}
    else if(clicked1==1)  {$(".inside1").append(`${s}`);s="X";clicked1=3;draw++;}
    if (draw>=5) {com();}
})
$(".inside2").on("click",function()
{
    if (s=="X" && clicked2==1) {$(".inside2").append(`${s}`);s="O";clicked2=2;draw++;}
    else if(clicked2==1)  {$(".inside2").append(`${s}`);s="X";clicked2=3;draw++;}
    if (draw>=5) {com();}
})
$(".inside3").on("click",function()
{
    if (s=="X" && clicked3==1) {$(".inside3").append(`${s}`);s="O";clicked3=2;draw++;}
    else if(clicked3==1)  {$(".inside3").append(`${s}`);s="X";clicked3=3;draw++;}
    if (draw>=5) {com();}
})
$(".inside4").on("click",function()
{
    if (s=="X" && clicked4==1) {$(".inside4").append(`${s}`);s="O";clicked4=2;draw++;}
    else if(clicked4==1)  {$(".inside4").append(`${s}`);s="X";clicked4=3;draw++;}
    if (draw>=5) {com();}
})
$(".inside5").on("click",function()
{
    if (s=="X" && clicked5==1) {$(".inside5").append(`${s}`);s="O";clicked5=2;draw++;}
    else if(clicked5==1)  {$(".inside5").append(`${s}`);s="X";clicked5=3;draw++;}
    if (draw>=5) {com();}
})
$(".inside6").on("click",function()
{
    if (s=="X" && clicked6==1) {$(".inside6").append(`${s}`);s="O";clicked6=2;draw++;}
    else if(clicked6==1)  {$(".inside6").append(`${s}`);s="X";clicked6=3;draw++;}
    if (draw>=5) {com();}
})
$(".inside7").on("click",function()
{
    if (s=="X" && clicked7==1) {$(".inside7").append(`${s}`);s="O";clicked7=2;draw++;}
    else if(clicked7==1)  {$(".inside7").append(`${s}`);s="X";clicked7=3;draw++;}
    if (draw>=5) {com();}
})
$(".inside8").on("click",function()
{
    if (s=="X" && clicked8==1) {$(".inside8").append(`${s}`);s="O";clicked8=2;draw++;}
    else if(clicked8==1)  {$(".inside8").append(`${s}`);s="X";clicked8=3;draw++;}
    if (draw>=5) {com();}
})
$(".inside9").on("click",function()
{
    if (s=="X" && clicked9==1) {$(".inside9").append(`${s}`);s="O";clicked9=2;draw++;}
    else if(clicked9==1)  {$(".inside9").append(`${s}`);s="X";clicked9=3;draw++;}
    if (draw>=5) {com();}
})

function com()
{
    if (clicked1==2 && clicked2==2 && clicked3==2) {$(".wins").append("X Wins");clicked1=0;clicked2=0;clicked3=0;clicked4=0;clicked5=0;clicked6=0;clicked7=0;clicked8=0;clicked9=0;}
    else if (clicked4==2 && clicked5==2 && clicked6==2) {$(".wins").append("X Wins");clicked1=0;clicked2=0;clicked3=0;clicked4=0;clicked5=0;clicked6=0;clicked7=0;clicked8=0;clicked9=0;}
    else if (clicked7==2 && clicked8==2 && clicked9==2) {$(".wins").append("X Wins");clicked1=0;clicked2=0;clicked3=0;clicked4=0;clicked5=0;clicked6=0;clicked7=0;clicked8=0;clicked9=0;}
    else if (clicked1==2 && clicked4==2 && clicked7==2) {$(".wins").append("X Wins");clicked1=0;clicked2=0;clicked3=0;clicked4=0;clicked5=0;clicked6=0;clicked7=0;clicked8=0;clicked9=0;}
    else if (clicked2==2 && clicked5==2 && clicked8==2) {$(".wins").append("X Wins");clicked1=0;clicked2=0;clicked3=0;clicked4=0;clicked5=0;clicked6=0;clicked7=0;clicked8=0;clicked9=0;}
    else if (clicked3==2 && clicked6==2 && clicked9==2) {$(".wins").append("X Wins");clicked1=0;clicked2=0;clicked3=0;clicked4=0;clicked5=0;clicked6=0;clicked7=0;clicked8=0;clicked9=0;}
    else if (clicked1==2 && clicked5==2 && clicked9==2) {$(".wins").append("X Wins");clicked1=0;clicked2=0;clicked3=0;clicked4=0;clicked5=0;clicked6=0;clicked7=0;clicked8=0;clicked9=0;}
    else if (clicked3==2 && clicked5==2 && clicked7==2) {$(".wins").append("X Wins");clicked1=0;clicked2=0;clicked3=0;clicked4=0;clicked5=0;clicked6=0;clicked7=0;clicked8=0;clicked9=0;}
    else if (clicked1==3 && clicked2==3 && clicked3==3) {$(".wins").append("O Wins");clicked1=0;clicked2=0;clicked3=0;clicked4=0;clicked5=0;clicked6=0;clicked7=0;clicked8=0;clicked9=0;}
    else if (clicked4==3 && clicked5==3 && clicked6==3) {$(".wins").append("O Wins");clicked1=0;clicked2=0;clicked3=0;clicked4=0;clicked5=0;clicked6=0;clicked7=0;clicked8=0;clicked9=0;}
    else if (clicked7==3 && clicked8==3 && clicked9==3) {$(".wins").append("O Wins");clicked1=0;clicked2=0;clicked3=0;clicked4=0;clicked5=0;clicked6=0;clicked7=0;clicked8=0;clicked9=0;}
    else if (clicked1==3 && clicked4==3 && clicked7==3) {$(".wins").append("O Wins");clicked1=0;clicked2=0;clicked3=0;clicked4=0;clicked5=0;clicked6=0;clicked7=0;clicked8=0;clicked9=0;}
    else if (clicked2==3 && clicked5==3 && clicked8==3) {$(".wins").append("O Wins");clicked1=0;clicked2=0;clicked3=0;clicked4=0;clicked5=0;clicked6=0;clicked7=0;clicked8=0;clicked9=0;}
    else if (clicked3==3 && clicked6==3 && clicked9==3) {$(".wins").append("O Wins");clicked1=0;clicked2=0;clicked3=0;clicked4=0;clicked5=0;clicked6=0;clicked7=0;clicked8=0;clicked9=0;}
    else if (clicked1==3 && clicked5==3 && clicked9==3) {$(".wins").append("O Wins");clicked1=0;clicked2=0;clicked3=0;clicked4=0;clicked5=0;clicked6=0;clicked7=0;clicked8=0;clicked9=0;}
    else if (clicked3==3 && clicked5==3 && clicked7==3) {$(".wins").append("O Wins");clicked1=0;clicked2=0;clicked3=0;clicked4=0;clicked5=0;clicked6=0;clicked7=0;clicked8=0;clicked9=0;}
    else if (draw==9) {$(".wins").append("Match Draw");clicked1=0;clicked2=0;clicked3=0;clicked4=0;clicked5=0;clicked6=0;clicked7=0;clicked8=0;clicked9=0;}
}

