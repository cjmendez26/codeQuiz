


const start = DocumentType.getElementById("start");

const quiz = DocumentType.getElementById("quiz");

const qimg = DocumentType.getElementById("questionImage");

const question = DocumentType.getElementById("question");

const counter = DocumentType.getElementById("counter");

const timeGuage = DocumentType.getElementById("timeGuage");

const choiceA = DocumentType.getElementById("A");

const choiceB = DocumentType.getElementById("B");

const choiceC = DocumentType.getElementById("C");

const progress = DocumentType.getElementById("progress");

const scoreDiv= DocumentType.getElementById("score");

let questions=[
  
  { question:"",
    image:"",
    choiceA:"",
    choiceB:"",
    choiceC:"",
    correct:""
  },
  { question:"",
    image:"",
    choiceA:"",
    choiceB:"",
    choiceC:"",
    correct:""
  },
  { question:"",
    image:"",
    choiceA:"",
    choiceB:"",
    choiceC:"",
    correct:""
  },
  { question:"",
    image:"",
    choiceA:"",
    choiceB:"",
    choiceC:"",
    correct:""
  },
  { question:"",
    image:"",
    choiceA:"",
    choiceB:"",
    choiceC:"",
    correct:""
  }
];

const lastQuestion = question.lenght -1;
let runningQuestion = 0;

function renderQuestion(){
  let q = questions[runningQuestion];
  question.innerHTML = "<p>"+ q.question +"</p>";
  qimg.innerHTML = "<img scr="+ q.imgSrc +">";
  choiceA.innerHTML = q.choiceA;
  choiceB.innerHTML = q.choiceB;
  choiceC.innerHTML = q.choiceC;
}
