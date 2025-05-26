let name = score = gender = statue = "";
let quizText = document.querySelector(".gran").textContent;
let quizCode = quizText.split("#")[1].trim();
console.log(quizCode);

// Timer and submission tracking variables
let quizDuration = 30 * 60 * 1000; // 30 minutes in milliseconds
let quizTimer;
let timeExpired = false;
let hasSubmitted = false; // Track if form has been submitted

function saveName() {
    let selectedGender = document.querySelector('input[name="radio"]:checked');
    let gen = selectedGender ? selectedGender.nextElementSibling.textContent : "Not Selected";

    const nameInput = document.getElementById('name');
    const continueButton = document.getElementById('continue-btn');
    name = nameInput.value.trim();

    if (name && selectedGender) {
        localStorage.setItem('userName', name);
        continueButton.classList.remove('disabled');
        continueButton.style.background = "var(--main-quiz)";
        continueButton.style.borderColor = "var(--main-quiz)";
        console.log('hello', name , "gender",gender);
    } else {
        alert("مش هتخسر حاجة لو كتبت كل بياناتك صح 🌚");
    }
}

function getCheckedValue() {
    const checkedRadio = document.querySelector('input[name="radio"]:checked');
    return checkedRadio ? checkedRadio.nextElementSibling.textContent : null;
}

document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll('input[name="radio"]').forEach((radio) => {
        radio.addEventListener('change', () => {
            gender = getCheckedValue();
            console.log(gender);
        });
    });
});

function checkGender() {
    console.log('Selected gender:', gender);
}

function continueQuiz() {
    const name = localStorage.getItem('userName');

    if (name) {
        alert("Proceeding with quiz. Good luck, " + name + "!");
    } else {
        alert("Please save your name first.");
    }
}

// Add these functions to your existing code
function triggerFeedback(isCorrect) {
    // Vibrate for 200ms (only works on mobile or with user interaction)
    if (navigator.vibrate) {
        navigator.vibrate(isCorrect ? [100, 50, 100] : 200);
    }

    // Visual feedback
    if (isCorrect) {
        showFireworks();
    } else {
        showRedFlash();
    }
}

function showRedFlash() {
    const flash = document.createElement('div');
    flash.style.position = 'fixed';
    flash.style.bottom = '0';
    flash.style.left = '0';
    flash.style.width = '100%';
    flash.style.height = '20px';
    flash.style.backgroundColor = 'rgba(255, 0, 0, 0.7)';
    flash.style.boxShadow = '0 0 30px 10px rgba(255, 0, 0, 0.5)';
    flash.style.zIndex = '9999';
    flash.style.animation = 'fadeOut 2s forwards';
    document.body.appendChild(flash);

    setTimeout(() => {
        flash.remove();
    }, 2000);
}

function showFireworks() {
    const fireworks = document.createElement('div');
    fireworks.style.position = 'fixed';
    fireworks.style.top = '0';
    fireworks.style.left = '0';
    fireworks.style.width = '100%';
    fireworks.style.height = '100%';
    fireworks.style.zIndex = '9998';
    fireworks.style.pointerEvents = 'none';
    fireworks.style.background = 'transparent';
    fireworks.style.display = 'flex';
    fireworks.style.justifyContent = 'center';
    fireworks.style.alignItems = 'center';

    const gif = document.createElement('img');
    gif.src = 'https://cdn.pixabay.com/animation/2023/08/29/02/43/02-43-52-729_512.gif';
    gif.style.width = '100%';
    gif.style.height = '100%';
    gif.style.objectFit = 'cover';

    fireworks.appendChild(gif);
    document.body.appendChild(fireworks);

    setTimeout(() => {
        fireworks.style.opacity = '0';
        fireworks.style.transition = 'opacity 1s';
        setTimeout(() => {
            fireworks.remove();
        }, 1000);
    }, 2000);
}

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
    window.location.href = '../../index.html';
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
    startQuizTimer();
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
    console.log('Showing question:', index);
    const questionText = document.querySelector('.question-text');
    const questionTag = document.querySelector('.question-tag');
    const userC = document.querySelector('.user')
    if (questionText) {
        questionText.innerHTML = `${question[index].question}`;
        questionTag.innerHTML = question[index].type;
        userC.innerHTML = ("Current User Hosting : "+name);

        addImage(index);

        let optionTag = '';
        question[index].options.forEach(option => {
            optionTag += `<div class="option"><span>${option}</span></div>`;
        });
        document.querySelector(".option-list").innerHTML = optionTag;

        const optionElements = document.querySelectorAll('.option');
        optionElements.forEach(opt => opt.setAttribute('onclick', 'optionSelected(this)'));

        if (answeredQuestions[index]) {
            let correctAnswer = question[index].answer;
            optionElements.forEach(opt => {
                opt.classList.add('disabled');
                if (opt.textContent === correctAnswer) {
                    opt.classList.add('correct');
                } else if (answeredQuestions[index].userAnswer === opt.textContent) {
                    opt.classList.add('incorrect');
                }
            });
            nextBtn.classList.add('active');
        } else {
            optionElements.forEach(opt => {
                opt.classList.remove('disabled', 'correct', 'incorrect');
            });
            nextBtn.classList.remove('active');
        }
    } else {
        console.error('Question text element not found.');
    }
}

function addImage(index) {
    const questionText = document.querySelector('.question-text');

    if (questionText && question[index].image) {
        const existingButton = document.querySelector('.show-code-button');
        if (existingButton) {
            existingButton.remove();
        }

        const button = document.createElement('button');
        button.style.marginLeft="15px"
        button.textContent = 'Show Code';
        button.classList.add('show-code-button');
        button.style.marginTop = '10px';
        button.style.padding = '10px 15px';
        button.style.border = 'none';
        button.style.borderRadius = '5px';
        button.style.background = 'linear-gradient(45deg, #37a2d0, #067e87)';
        button.style.color = '#fff';
        button.style.fontSize = '16px';
        button.style.cursor = 'pointer';
        button.style.transition = 'transform 0.2s ease-in-out';

        button.addEventListener('mouseover', () => {
            button.style.transform = 'scale(1.05)';
        });

        button.addEventListener('mouseout', () => {
            button.style.transform = 'scale(1)';
        });

        questionText.appendChild(button);

        button.addEventListener('click', function() {
            const imageUrl = question[index].image;
            const popup = document.createElement('div');
            popup.style.position = 'fixed';
            popup.style.top = '50%';
            popup.style.left = '50%';
            popup.style.transform = 'translate(-50%, -50%)';
            popup.style.background = 'transparent';
            popup.style.padding = '20px';
            popup.style.borderRadius = '10px';
            popup.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.3)';
            popup.style.zIndex = '1000';
            popup.style.animation = 'fadeIn 0.3s ease-in-out';
            popup.style.display = 'flex';
            popup.style.alignItems = 'center';
            popup.style.justifyContent = 'space-between';

            const img = document.createElement('img');
            img.src = imageUrl;
            img.alt = `Image for question ${question[index].numb}`;

            if (window.matchMedia("(max-width: 480px)").matches) {
                img.style.width = '250px';
            } else {
                img.style.width = '450px';
            }
            img.style.height = 'auto';
            img.style.borderRadius = '5px';

            const closeButton = document.createElement('button');
            closeButton.textContent = '×';
            closeButton.style.position = 'absolute';
            closeButton.style.top = '10px';
            closeButton.style.right = '10px';
            closeButton.style.padding = '5px 10px';
            closeButton.style.border = 'none';
            closeButton.style.borderRadius = '5px';
            closeButton.style.background = 'var(--main-quiz)';
            closeButton.style.color = '#fff';
            closeButton.style.fontSize = '18px';
            closeButton.style.cursor = 'pointer';
            closeButton.style.transition = 'background 0.2s ease-in-out';

            closeButton.addEventListener('mouseover', () => {
                closeButton.style.background = 'var(--main-quiz)';
            });

            closeButton.addEventListener('mouseout', () => {
                closeButton.style.background = 'var(--main-quiz)';
            });

            closeButton.addEventListener('click', function() {
                popup.style.animation = 'fadeOut 0.3s ease-in-out';
                setTimeout(() => popup.remove(), 300);
            });

            popup.appendChild(img);
            popup.appendChild(closeButton);
            document.body.appendChild(popup);
        });
    }
}

const style = document.createElement('style');
style.textContent = `
@keyframes fadeIn {
    from { opacity: 0; transform: translate(-50%, -45%); }
    to { opacity: 1; transform: translate(-50%, -50%); }
}

@keyframes fadeOut {
    from { opacity: 1; transform: translate(-50%, -50%); }
    to { opacity: 0; transform: translate(-50%, -45%); }
}`;
document.head.appendChild(style);

// Add this to your optionSelected function
function optionSelected(answer) {
    let userAnswer = answer.textContent;
    let correctAnswer = question[questionCount].answer;
    let allOptions = optionList.children.length;

    if (userAnswer === correctAnswer) {
        userScore++;
        headerScore();
        answer.classList.add('correct');
        triggerFeedback(true); // Correct feedback
    } else {
        answer.classList.add('incorrect');
        triggerFeedback(false); // Incorrect feedback
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
    answeredQuestions[questionCount] = { userAnswer: userAnswer };
}

// Add this CSS animation
const feedbackStyle = document.createElement('style');
feedbackStyle.textContent = `
@keyframes fadeOut {
    from { opacity: 1; }
    to { opacity: 0; }
}

@keyframes shake {
    0%, 100% { transform: translateX(0); }
    20%, 60% { transform: translateX(-5px); }
    40%, 80% { transform: translateX(5px); }
}

.incorrect {
    animation: shake 0.5s cubic-bezier(.36,.07,.19,.97) both;
}`;
document.head.appendChild(feedbackStyle);

function questionCounter(index) {
    const questionTotal = document.querySelector('.question-total');
    questionTotal.textContent = `${index} of ${question.length} Questions`;
}

function headerScore() {
    const headerScoreText = document.querySelector('.header-score ');
    headerScoreText.textContent = `You answered correctly ${userScore} / ${question.length}`;
}

function showResultBox() {
    // Clear the timer if the user finishes before time expires
    if (quizTimer) {
        clearTimeout(quizTimer);
        quizTimer = null;
        document.querySelector('.quiz-timer')?.remove();
    }

    const mot = document.querySelector('.motivate');
    mot.setAttribute("dir", "rtl");
    quizBox.classList.remove('active');
    resultBox.classList.add('active');

    updateScoreText();
    animateProgress();
}

function updateScoreText() {
    const scoreText = document.querySelector('.score-text');
    scoreText.textContent = `You Scored ${userScore} out of ${question.length}`;
}

function animateProgress() {
    const progressValue = document.querySelector('.progress-value');
    const progressEndValue = Math.round((userScore / question.length) * 100);
    const status = progressEndValue > 50 ? "Success" : "Failed";

    submitToGoogleForm(name, progressEndValue, gender, status, quizCode);
    console.log('Submitted quiz results:', {name, score: progressEndValue, gender, status, quizCode});

    let progressStartValue = 0;
    const speed = 20;
    const progress = setInterval(() => {
        if (progressStartValue > progressEndValue) {
            clearInterval(progress);
            return;
        }

        progressValue.textContent = `${progressStartValue}`;
        updateProgressVisual(progressStartValue);
        progressStartValue++;
    }, speed);
}

function updateProgressVisual(progress) {
    const mot = document.querySelector('.motivate');
    const genderMessages = {
        Female: [
            { limit: 85, color: '#80e02c', message: 'كملي يا شطورة مستواكي ممتاز اوي !💕' },
            { limit: 65, color: 'cyan', message: 'كويس جدا يا بشمهندسة كان فاضلِك تكة وتقفلي! ✨' },
            { limit: 45, color: 'yellow', message: 'ادائِك مقبول شوية بس اكيد فيه احسن 🥰' },
            { limit: 0, color: 'red', message: 'ركزي شوية! حاولي تاني واكيد المرة الجاية هتنجحي 🙈' }
        ],
        Male: [
            { limit: 85, color: '#80e02c', message: 'اداء اسطوري! اشطر كتكوت مستقبلك مستنيك 💪' },
            { limit: 65, color: 'cyan', message: 'عمل رائع! كان فاضلك تكة وتبقي الافضل 🥳' },
            { limit: 45, color: 'yellow', message: 'اداء مقبل شوية! بس تحسينه هيكون خطوة رائعة 👌' },
            { limit: 0, color: 'red', message: 'ركز شوية ! حاول تاني واكيد هتنجح المرة الجاية 🌚' }
        ]
    };

    const messages = genderMessages[gender] || genderMessages.Male;
    const { color, message } = messages.find(item => progress > item.limit) || messages[messages.length - 1];

    document.querySelector('.prog-bg').style.background = `conic-gradient(${color} ${progress}%, #414141 0%)`;
    document.querySelector('.progress-bg').style.background=`conic-gradient(${color} ${progress}%, #414141 0%)`
    mot.innerHTML = message;
}

function submitToGoogleForm(Gname, Gscore, gender, statue, quizCode) {
    if (hasSubmitted) {
        console.log('Form already submitted, skipping duplicate');
        return;
    }
    hasSubmitted = true;

    console.log('Submitting form data:', {
        name: Gname,
        score: Gscore,
        gender,
        status: statue,
        quizCode
    });

    const formUrl = "https://docs.google.com/forms/u/0/d/e/1FAIpQLSedOLbgGluxVg3wRhI6wOtEBMgw1jE54zZia-nX1anTfeQPgQ/formResponse";

    const formData = new FormData();
    formData.append("entry.1593857870", Gname);
    formData.append("entry.629029072", Gscore);
    formData.append("entry.165525936", gender);
    formData.append("entry.197465168", statue);
    formData.append("entry.359515664", quizCode);

    fetch(formUrl, {
        method: "POST",
        body: formData,
        mode: 'no-cors'
    })
    .then(() => {
        console.log('Form submitted successfully at:', new Date().toLocaleTimeString());
        showSubmissionSuccess();
    })
    .catch(error => {
        console.error('Form submission failed:', error);
        showSubmissionError();
    });
}

function showSubmissionSuccess() {
    const successMsg = document.createElement('div');
    successMsg.textContent = 'Results submitted successfully!';
    successMsg.style.position = 'fixed';
    successMsg.style.bottom = '20px';
    successMsg.style.right = '20px';
    successMsg.style.backgroundColor = '#4CAF50';
    successMsg.style.color = 'white';
    successMsg.style.padding = '10px 20px';
    successMsg.style.borderRadius = '5px';
    successMsg.style.zIndex = '1000';
    successMsg.style.animation = 'fadeIn 0.3s ease-in-out';
    document.body.appendChild(successMsg);

    setTimeout(() => {
        successMsg.style.animation = 'fadeOut 0.3s ease-in-out';
        setTimeout(() => successMsg.remove(), 300);
    }, 3000);
}

function showSubmissionError() {
    const errorMsg = document.createElement('div');
    errorMsg.textContent = 'Submission failed. Please check your connection.';
    errorMsg.style.position = 'fixed';
    errorMsg.style.bottom = '20px';
    errorMsg.style.right = '20px';
    errorMsg.style.backgroundColor = '#f44336';
    errorMsg.style.color = 'white';
    errorMsg.style.padding = '10px 20px';
    errorMsg.style.borderRadius = '5px';
    errorMsg.style.zIndex = '1000';
    errorMsg.style.animation = 'fadeIn 0.3s ease-in-out';
    document.body.appendChild(errorMsg);

    setTimeout(() => {
        errorMsg.style.animation = 'fadeOut 0.3s ease-in-out';
        setTimeout(() => errorMsg.remove(), 300);
    }, 3000);
}

// Timer functions
function startQuizTimer() {
    // Clear any existing timer
    if (quizTimer) {
        clearTimeout(quizTimer);
    }

    // Set new timer
    quizTimer = setTimeout(() => {
        timeExpired = true;
        alert("Time's up! Your quiz will be submitted automatically.");
        forceSubmitQuiz();
    }, quizDuration);

    // Display countdown timer
    startCountdownDisplay();
}

function forceSubmitQuiz() {
    if (hasSubmitted) return;

    // Calculate current score percentage
    const progressEndValue = Math.round((userScore / question.length) * 100);
    const status = progressEndValue > 50 ? "Success" : "Failed";

    // Submit to Google Form
    submitToGoogleForm(name, progressEndValue, gender, status, quizCode);

    // Show results
    showResultBox();

    // Disable all options and navigation
    disableQuizInteraction();
}

function startCountdownDisplay() {
    // Remove existing timer if any
    document.querySelector('.quiz-timer')?.remove();

    const timerDisplay = document.createElement('div');
    timerDisplay.className = 'quiz-timer';
    timerDisplay.style.position = 'fixed';
    timerDisplay.style.top = '20px';
    timerDisplay.style.right = '20px';
    timerDisplay.style.backgroundColor = 'rgba(0,0,0,0.7)';
    timerDisplay.style.color = 'white';
    timerDisplay.style.padding = '10px 15px';
    timerDisplay.style.borderRadius = '5px';
    timerDisplay.style.zIndex = '1000';
    timerDisplay.style.fontSize = '18px';
    timerDisplay.style.fontWeight = 'bold';
    document.body.appendChild(timerDisplay);

    let timeLeft = quizDuration / 1000; // convert to seconds
    const countdown = setInterval(() => {
        if (timeLeft <= 0 || timeExpired) {
            clearInterval(countdown);
            timerDisplay.textContent = 'Time Expired!';
            return;
        }

        timeLeft--;
        const minutes = Math.floor(timeLeft / 60);
        const seconds = timeLeft % 60;
        timerDisplay.textContent = `Time Left: ${minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
    }, 1000);
}

function disableQuizInteraction() {
    // Disable all options
    const options = document.querySelectorAll('.option');
    options.forEach(option => {
        option.classList.add('disabled');
    });

    // Disable navigation buttons
    nextBtn.classList.add('disabled');
    backBtn.classList.add('disabled');
}

// Add timer styles
const timerStyle = document.createElement('style');
timerStyle.textContent = `

.submission-message {
    animation: fadeIn 0.3s ease-in-out;
}

@media (max-width: 768px) {
    .quiz-timer {
        top: 10px;
        right: 10px;
        font-size: 14px;
        padding: 8px 12px;
    }
}`;
document.head.appendChild(timerStyle);

window.addEventListener("beforeunload", function (e) {
    const confirmationMessage = "Are you sure you want to refresh this page?";

    e.returnValue = confirmationMessage;

    return confirmationMessage;
});
document.addEventListener('contextmenu', function(event) {
    event.preventDefault();
});

document.addEventListener('keydown', function(event) {
    if (event.key === 'F12' ||
        (event.ctrlKey && event.shiftKey && event.key === 'I') ||
        (event.ctrlKey && event.shiftKey && event.key === 'J') ||
        (event.ctrlKey && event.key === 'U')||(event.ctrlKey && event.key === 'S') ||
        (event.ctrlKey && event.key === 'P')) {
        event.preventDefault();
    }
});
