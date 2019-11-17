//js file


//set variables by element id
const start = document.getElementById("start");
const quiz = document.getElementById("quiz");
const question = document.getElementById("question");
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const counter = document.getElementById("counter");
const timeGauge = document.getElementById("timeGauge");
const progress = document.getElementById("progress");
const scoreDiv = document.getElementById("scoreContainer");
// Qusetions with choice answers
let questions=[
  
  { question:"Which famous scientist introduced the idea of natural selection?",
    choiceA:"Sigmund Freud",
    choiceB:"Charles Darwin",
    choiceC:"Louis Pasteur",
    correct:"B"
  },
  { question:"A person who studies biology is known as a?",
    choiceA:"Botanist",
    choiceB:"Mycologist",
    choiceC:"Biologist",
    correct:"C"
  },
  { question:" Botany is the study of?",
    choiceA:"Animals",
    choiceB:"Cells",
    choiceC:"Plants",
    correct:"C"
  },
  { question:"Can frogs live in salt water?",
    choiceA:"Yes",
    choiceB:"No",
    choiceC:"Both",
    correct:"B"
  },
  { question:"Animals which eat both plants and other animals are known as what?",
    choiceA:"Omnivores",
    choiceB:"Carnivore",
    choiceC:"Herbivores",
    correct:"A"
  }
];
const lastQuestion = questions.length - 1;
let runningQuestion = 0;
let count = 0;
const questionTime = 10; // 10s
const gaugeWidth = 150; // 150px
const gaugeUnit = gaugeWidth / questionTime;
let TIMER;
let score = 0;

// render a question
function renderQuestion(){
    let q = questions[runningQuestion];
    
    question.innerHTML = "<p>"+ q.question +"</p>";
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
}

start.addEventListener("click",startQuiz);

// start quiz
function startQuiz(){
    start.style.display = "none";
    renderQuestion();
    quiz.style.display = "block";
    renderProgress();
    renderCounter();
    TIMER = setInterval(renderCounter,1000); 
}

// render progress
function renderProgress(){
    for(let qIndex = 0; qIndex <= lastQuestion; qIndex++){
        progress.innerHTML += "<div class='prog' id="+ qIndex +"></div>";
    }
}

// counter render

function renderCounter(){
    if(count <= questionTime){
        counter.innerHTML = count;
        timeGauge.style.width = count * gaugeUnit + "px";
        count++
    }else{
        count = 0;
        // change progress color to red
        answerIsWrong();
        if(runningQuestion < lastQuestion){
            runningQuestion++;
            renderQuestion();
        }else{
            // end the quiz and show the score
            clearInterval(TIMER);
            scoreRender();
        }
    }
}

// checkAnwer

function checkAnswer(answer){
    if( answer == questions[runningQuestion].correct){
        // answer is correct
        score++;
        // change progress color to green
        answerIsCorrect();
    }else{
        // answer is wrong
        // change progress color to red
        answerIsWrong();
    }
    count = 0;
    if(runningQuestion < lastQuestion){
        runningQuestion++;
        renderQuestion();
    }else{
        // end the quiz and show the score
        clearInterval(TIMER);
        scoreRender();
    }
}

// answer is correct
function answerIsCorrect(){
    document.getElementById(runningQuestion).style.backgroundColor = "#0f0";
}

// answer is Wrong
function answerIsWrong(){
    document.getElementById(runningQuestion).style.backgroundColor = "#f00";
}

// score render
function scoreRender(){
    scoreDiv.style.display = "block";

    
    document.getElementById('total').value = total;
document.getElementById('total').value = total;
    
    // calculate the amount of question percent answered by the user
    const scorePerCent = Math.sum(10 + score/questions.length);
    
    // choose the image based on the scorePerCent
    
    
    scoreDiv.innerHTML = "total";
    scoreDiv.innerHTML += "total";
}


}



