const quizData = [
    {
        question: "How old can the oldest man alive be?",
        a: 100,
        b: 120,
        c: 150,
        d: 996,
        correct: "b"
    },
    {
        question: "The best time to where a striped sweater is...",
        a: "All the time",
        b: "Darmok and Jalad at Tanagra",
        c: "Temarc! The river Temarc in winter!",
        d: "Shaka when the walls fell",
        correct: "c"
    },
    {
        question: "Darmok and Jalad at Tanagra. Darmok and Jalad on the ocean.",
        a: "Temba, his arms wide",
        b: "Sokath! His eyes uncovered!",
        c: "The beast of Tanagra ",
        d: "Chenza at court, the court of silence",
        correct: "d"
    },
    {
        question: "How much of this quiz do you actually understand? Haha",
        a: "Kiazi's children, their faces wet",
        b: "Kailash when it rises",
        c: "Uzani, his army with fists closed",
        d: "Temba at rest",
        correct: "b"
    },
]

// let b = document.getElementById('b');
// let c = document.getElementById('c');
// let d = document.getElementById('d');

//initializes the first questions and answers
let index = 0;
let numCorrect = 0;

const question =  document.getElementById('question');

const answerEls = document.querySelectorAll('.answer');


const a_text =  document.getElementById("a_text");
const b_text =  document.getElementById('b_text');
const c_text =  document.getElementById('c_text');
const d_text =  document.getElementById('d_text');

const submit_btn = document.getElementById('submit_btn');

document.querySelector(".results").style.display = "none";
// loadQuiz();

init();

function init(){
    document.querySelector('.quiz-container').style.display = 'none';
    const startQuizBtn = document.querySelector("#init");
    startQuizBtn.addEventListener('click', () => {
        startQuizBtn.style.display = 'none';
        document.querySelector('.quiz-container').style.display = 'block';
        loadQuiz();
    })

}

function loadQuiz() {
    deselectAnswers();
    if (index < quizData.length) {
        question.innerHTML = quizData[index].question;
        a_text.innerHTML = quizData[index].a;
        b_text.innerHTML = quizData[index].b;
        c_text.innerHTML = quizData[index].c;
        d_text.innerHTML = quizData[index].d;    
    }
    else {
    // Optional: window.alert('Quiz complete. Thank you for taking this quiz');
    document.querySelector(".quiz-container").style.display = "none";
    document.querySelector(".results").style.display = "block";
    
    const outputResults = document.querySelector('.results');
    outputResults.innerHTML = `<h2>Quiz Completed! Thanks for taking the quiz!</h2>
    <h3> Results: ${numCorrect} out of ${quizData.length} </h3>
    <button id="retest"> Reload to try again </button>
    `
    
    index = 0;
    //Show 
    submit_btn.disabled = true;
    submit_btn.innerHTML = 'Completed'

    // // Take Quiz Again Button
    // const retest = document.querySelector("#retest");
    // retest.addEventListener('click', () => {
    //     retest.style.display = 'none';
    //     document.querySelector('.quiz-container').style.display = 'block';
    //     loadQuiz();
    // })

    }

}

function getSelected() {
    let selected = undefined;
    // console.log(answerEl.checked);
    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            selected = answerEl.id;
        }
    })
    return selected
}

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answerEl.checked = false;
        }
    })
}

submit_btn.addEventListener('click', () => {

    const userAnswer = getSelected();
    if (userAnswer == quizData[index].correct) {
        console.log('Correct Answer selected!');
        numCorrect++;
    }
    console.log('userAnswer: ', userAnswer);
    console.log('Right Answer is:' + quizData[index].correct);
    index++;
    loadQuiz();
    }
);

