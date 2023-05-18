let words=[
    "car",
    "bike",
    "html",
    "color",
    "blue",
    "red",
    "js",
    "iron"
]



const wordE1 = document.querySelector(".word");
const ipE1 = document.querySelector("input");
const timeE1 = document.querySelector(".time");
const scoreE1 = document.querySelector(".score");
const container = document.querySelector(".container");
const gameOver = document.querySelector(".game-over");

ipE1.focus()

function getRandomWord()
{
    let index = Math.floor(Math.random()*words.length);
    return words[index];
}

let score =0,time = 10,word=getRandomWord();

function updateWord() {
    word = getRandomWord();
    wordE1.textContent = word;
}

function updateScore()
{
    score++;
    scoreE1.innerHTML = `Score: ${score}`;
}

let id = setInterval(updateTime,1000);

function updateTime()
{
    if(time<=0) {clearInterval(id);
    container.style.display = "none";
    gameOver.style.display = "flex";
    gameOver.innerHTML = `<h2>Game Over</h2>
    <p>Your Score is ${score}</p>`
}
    else{
    time--;
    timeE1.innerHTML = `Time: ${time}`;
    }
}


updateWord();
updateScore();


ipE1.addEventListener("keyup",function(){
    let key = ipE1.value;

    if (key == word) 
    {
        score++;
        time += 2;
       updateWord();
       updateScore();
       updateTime();
       ipE1.value = "";
    }

})



