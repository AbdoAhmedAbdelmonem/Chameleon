const startBtn = document.querySelector('.start-btn');
const popupInfo = document.querySelector('.popup-info');
const exitBtn = document.querySelector('.exit-btn');
const main = document.querySelector('.main');
const continueBtn = document.querySelector('.continue-btn');
const quizSection = document.querySelector('.quiz-section');
const quizBox = document.querySelector('.quiz-box');
const resultBox = document.querySelector('.result-box');
const home = document.querySelector('.gohome-btn');
const about = document.querySelector('.popo');
const popup2 = document.querySelector('.popup2');
const ok = document.querySelector('.info-ok-btn');

home.onclick = ()=>{
    window.location.href = 'index.html';
}
about.onclick=()=>{
    popup2.classList.add('active');
    main.classList.add('active');
};
ok.onclick=()=>{
    popup2.classList.remove('active');
    main.classList.remove('active');
};

startBtn.onclick = () => {
    popupInfo.classList.add('active');
    main.classList.add('active');
};

exitBtn.onclick = () => {
    popupInfo.classList.remove('active');
    main.classList.remove('active');
};

continueBtn.onclick = () => {
    quizSection.classList.add('active');
    popupInfo.classList.remove('active');
    main.classList.remove('active');
    quizBox.classList.add('active');

    showQuestions(0);
    questionCounter(1);
    headerScore();
}

let questionCount = 0;
let questionNumb = 1;
let userScore = 0;
let answeredQuestions = {};

const nextBtn = document.querySelector('.next-btn');
const backBtn = document.querySelector('.back-btn');

nextBtn.onclick = () => {
    if (questionCount < question.length - 1) {
        questionCount++;
        showQuestions(questionCount);

        questionNumb++;
        questionCounter(questionNumb);
    } else {
        console.log('Question Completed');
        showResultBox();
    }
}

backBtn.onclick = () => {
    if (questionCount > 0) {
        questionCount--;
        showQuestions(questionCount);

        if (questionNumb > 1) {
            questionNumb--;
            questionCounter(questionNumb);
        }
    }
}

const optionList = document.querySelector('.option-list');

function showQuestions(index) {
    console.log('Showing question:', index); // Debug line
    const questionText = document.querySelector('.question-text');
    if (questionText) {
        questionText.textContent = `${question[index].numb} . ${question[index].question}`;
        let optionTag = `<div class="option"><span>${question[index].options[0]}</span></div>
<div class="option"><span>${question[index].options[1]}</span></div>
<div class="option"><span>${question[index].options[2]}</span></div>
<div class="option"><span>${question[index].options[3]}</span></div>`;
        optionList.innerHTML = optionTag;
        const option = document.querySelectorAll('.option');
        for (let i = 0; i < option.length; i++) {
            option[i].setAttribute('onclick', 'optionSelected(this)')
        }

        // Disable options and mark answers if the question was already answered
        if (answeredQuestions[index]) {
            let correctAnswer = question[index].answer;
            for (let i = 0; i < option.length; i++) {
                option[i].classList.add('disabled');
                if (option[i].textContent === correctAnswer) {
                    option[i].classList.add('correct');
                } else {
                    if (answeredQuestions[index].userAnswer === option[i].textContent) {
                        option[i].classList.add('incorrect');
                    }
                }
            }
            nextBtn.classList.add('active');
        } else {
            for (let i = 0; i < option.length; i++) {
                option[i].classList.remove('disabled');
                option[i].classList.remove('correct');
                option[i].classList.remove('incorrect');
            }
            nextBtn.classList.remove('active');
        }
    } else {
        console.error('Question text element not found.');
    }
}


function optionSelected(answer) {
    let userAnswer = answer.textContent;
    let correctAnswer = question[questionCount].answer;
    let allOptions = optionList.children.length;

    if (userAnswer === correctAnswer) {
        userScore++;
        headerScore();
        answer.classList.add('correct');
    } else {
        answer.classList.add('incorrect');
        for (let i = 0; i < allOptions; i++) {
            if (optionList.children[i].textContent === correctAnswer) {
                optionList.children[i].setAttribute('class', 'option correct');
            }
        }
    }
    for (let i = 0; i < allOptions; i++) {
        optionList.children[i].classList.add('disabled');
    }
    nextBtn.classList.add('active');

    // Mark question as answered
    answeredQuestions[questionCount] = { userAnswer: userAnswer };
}

function questionCounter(index) {
    const questionTotal = document.querySelector('.question-total');
    questionTotal.textContent = `${index} of ${question.length} Questions`;
}

function headerScore() {
    const headerScoreText = document.querySelector('.header-score ');
    headerScoreText.textContent = `${userScore} / ${question.length}`;
}
function showResultBox() {
    quizBox.classList.remove('active');
    resultBox.classList.add('active');
    const scoreText = document.querySelector('.score-text');
    scoreText.textContent = `You Scored ${userScore} out of ${question.length}`;

    const circularProgress = document.querySelector('.circular-progress');
    const progressValue = document.querySelector('.progress-value');
    let progressStartValue = 0;
    let progressEndValue = (userScore / question.length) * 100;
    let speed = 20;

    let progress = setInterval(() => {
        progressStartValue++;
        if (userScore !== 0) {
            progressValue.textContent = `${progressStartValue}%`;

            if (progressStartValue > 85) {
                circularProgress.style.background = `conic-gradient(#80e02c ${progressStartValue * 3.6}deg, rgba(255, 255, 255, 0.1) ${progressStartValue * 3.6}deg)`;
            } else if (progressStartValue > 65) {
                circularProgress.style.background = `conic-gradient(cyan ${progressStartValue * 3.6}deg, rgba(255, 255, 255, 0.1) ${progressStartValue * 3.6}deg)`;
            } else if (progressStartValue > 45) {
                circularProgress.style.background = `conic-gradient(yellow ${progressStartValue * 3.6}deg, rgba(255, 255, 255, 0.1) ${progressStartValue * 3.6}deg)`;
            } else {
                circularProgress.style.background = `conic-gradient(red ${progressStartValue * 3.6}deg, rgba(255, 255, 255, 0.1) ${progressStartValue * 3.6}deg)`;
            }

            if (progressStartValue === progressEndValue) {
                clearInterval(progress);
            }
        } else {
            progressValue.textContent = `${0}%`;
            circularProgress.style.background = `conic-gradient(red ${360}deg, rgba(255, 255, 255, 0.1) ${360}deg)`;
            if (progressStartValue === progressEndValue) {
                clearInterval(progress);
            }
        }
    }, speed);
}
// Function to close popup if clicked outside
// document.addEventListener('click', (event) => {
//     if (!popupInfo.contains(event.target) && !startBtn.contains(event.target)) {
//         popupInfo.classList.remove('active');
//     }
// });
