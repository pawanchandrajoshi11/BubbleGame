var timer = prompt("Enter the GAME TIMER! (seconds)", 60);
var score = 0;
var hitrn = 0;
var topscore = 0;

function hitVal(){
    hitrn = Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent = hitrn;
}

function makeButton(){
    let clutter = "";
    for(let i=1; i<161; i++)
    {
        let rn = Math.floor(Math.random()*10);
        clutter += `<div class="bubble">${rn}</div>`;
    }
    document.querySelector("#pbottom").innerHTML = clutter;
}

function runTimer(){
    var timerint = setInterval(function(){
        if(timer>0){
            timer--;
            document.querySelector("#timerval").textContent = timer;
        }else{
            clearInterval(timerint);
            document.querySelector("#pbottom").innerHTML = `<h1 id="finaltext">TIME UP</h1><h5>(refresh the page to start again!)</h5>`
        }
        
    },1000);
}

function incScore(){
    score += 10;
    if(score >= topscore){
        topscore = score;
    }
    document.querySelector("#score").textContent = score;
}

function decScore(){
    makeButton();
    score -= 10;
    document.querySelector("#score").textContent = score;
    if(score <= 0)
    {
        document.querySelector("#pbottom").innerHTML = `<h1 id="finaltext">GAME OVER</h1><h3>(Your Top Score was: ${topscore})</h3>`;
        setTimeout(() => {
            // alert(`(refresh the page to start again!)`);
            location.reload();
        }, 2000);
    }
}

function checkScore(){
    document.querySelector("#pbottom").addEventListener("click", function(dets){
        if (dets.target.classList.contains("bubble")) {
            var btnval = Number(dets.target.textContent);
            if(hitrn === btnval){
                incScore();
                makeButton();
            }else{
                decScore();
            }
            hitVal();
          }
    })
}

hitVal();
runTimer();
makeButton();
checkScore();