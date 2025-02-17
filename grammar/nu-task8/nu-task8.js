let basicNum = 0;
let playButton = document.getElementById("play-button");
let userInput = document.getElementById("user-input");
let resultArea = document.getElementById("result-area");
let resetButton = document.getElementById("reset-button");
let chances = 3;
let gameOver = false;
let chancesArea = document.getElementById("chances-area");
let history = [];
let correctAnswer = document.getElementById('correct-answer');
let historyCount = document.getElementById("history-count");

playButton.addEventListener("click",play);
resetButton.addEventListener("click",reset);
userInput.addEventListener("focus", function(){
    userInput.value = "";
})

chancesArea.innerHTML = `남은 기회:${chances}`;


function RandomNum(){
    basicNum = Math.floor(Math.random() * 100)+1 ;
    console.log("정답",basicNum);
    correctAnswer.textContent = `정답:${basicNum}`;
}

function play() {
    let userValue = userInput.value;

    if( userValue<1 || userValue>100){
        resultArea.textContent = "1~100 사이의 숫자를 입력하시오";
        return;
    }

    if(history.includes(userValue)){
        resultArea.textContent = "이미 입력한 숫자입니다. 다른 숫자를 입력해주세요.";
        return;
    }

    chances--;
    chancesArea.textContent = `남은 기회: ${chances}번`;
    console.log(chances);

    if(chances <1 && userValue != basicNum){
            resultArea.textContent ="GameOver";
            gameOver = true;  
    }else if(userValue < basicNum){
        resultArea.textContent = "Up!";
    }else if(userValue > basicNum){
        resultArea.textContent = "Down!" ;
    }else if (userValue == basicNum){
        resultArea.textContent ="정답입니다!";
    }
    

    history.push(userValue);
    console.log(history);
    historyCount.innerHTML = `내가 입력한 숫자:${history}`;
    if(chances <1){
        gameOver = true;
    }

    if(gameOver == true){
        playButton.disabled = true;
    }
}

function reset(){
    userInput.value = "";
    RandomNum();
    gameOver = false;
    playButton.disabled = false;
    chances = 3;
    resultArea.innerHTML = "결과";
    chancesArea.innerHTML = `남은 기회:${chances}`;
    userValueList = [];
    history = [];
}

RandomNum();

function handleOnInput(el, maxlength) {
    if(el.value.length > maxlength)  {
      el.value 
        = el.value.substr(0, maxlength);
    }
}

function showMessageBox() {
    document.getElementById('messageBox').classList.remove('hidden');
}
  
function closeMessageBox() {
    document.getElementById('messageBox').classList.add('hidden');
    document.getElementById('askAgainBox').classList.add('hidden');
}
  
function confirmClose() {
    document.getElementById('messageBox').classList.add('hidden');
}
  
function askAgain() {
    document.getElementById('askAgainBox').classList.remove('hidden');
}
  
function closeAskAgainBox() {
    document.getElementById('askAgainBox').classList.add('hidden');
}
  
