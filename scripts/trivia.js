const questions = [{
        question: "What is the day before Mardi Gras called?",
        answers: [{
                text: 'Dundi Gras',
                correct: false
            },
            {
                text: 'Lundi Gras',
                correct: true
            },
            {
                text: 'Shlomo Gras',
                correct: false
            },
            {
                text: 'Bita Gras',
                correct: false
            }
        ]
    },
    {
        question: "What day comes after Mardi Gras?",
        answers: [{
                text: 'Dirty Wednesday',
                correct: false
            },
            {
                text: 'Mash Wednesday',
                correct: false
            },
            {
                text: 'Ash Wednesday',
                correct: true
            },
            {
                text: 'Zazash Wednesday',
                correct: false
            }
        ]
    },
    {
        question: "Where was the first known carnival celebration?",
        answers: [{
                text: 'Nice, France',
                correct: true
            },
            {
                text: 'Athene, Greece',
                correct: false
            },
            {
                text: 'TLV, Israel',
                correct: false
            },
            {
                text: 'Lisbon, Portugal',
                correct: false
            }
        ]
    },
    {
        question: "When was the earliest known carnival celebration?",
        answers: [{
                text: '1294',
                correct: true
            },
            {
                text: '1924',
                correct: false
            },
            {
                text: '1170',
                correct: false
            },
            {
                text: '1900',
                correct: false
            }
        ]
    },
    {
        question: "What is the signature Mardi Gras dessert?",
        answers: [{
                text: 'Ice Cream',
                correct: false
            },
            {
                text: 'Queen Cake',
                correct: false
            },
            {
                text: 'King Cake',
                correct: true
            },
            {
                text: 'Soufle',
                correct: false
            }
        ]
    },
    {
        question: "Before the COVID-19 pandemic, when was the most recent cancellation of New Orleans’ Mardi Gras parades?",
        answers: [{
                text: '1070',
                correct: false
            },
            {
                text: '1945',
                correct: true
            },
            {
                text: '2012',
                correct: false
            },
            {
                text: '2019',
                correct: false
            }
        ]
    },
    {
        question: "What are the groups that organize New Orleans Mardi Gras parades called?",
        answers: [{
                text: 'Krewes',
                correct: true
            },
            {
                text: 'The Mans',
                correct: false
            },
            {
                text: 'Para Group',
                correct: false
            },
            {
                text: 'Groupie',
                correct: false
            }
        ]
    },
    {
        question: "What states recognize Fat Tuesday as a holiday?",
        answers: [{
                text: 'Louisiana, Florida and Texas',
                correct: false
            },
            {
                text: 'Louisiana, Florida and New York',
                correct: false
            },
            {
                text: 'Louisiana, Florida and Alabama',
                correct: true
            },
            {
                text: 'Louisiana, Florida and New Jersey',
                correct: false
            }
        ]
    },
    {
        question: "What is the most popular food for Shrove Tuesday?",
        answers: [{
                text: 'Milkshakes',
                correct: false
            },
            {
                text: 'Pancakes',
                correct: true
            },
            {
                text: 'Hot Dog',
                correct: false
            },
            {
                text: 'Hamburger',
                correct: false
            }
        ]
    },
    {
        question: "What time does New Orleans law require masks to be removed on Mardi Gras?",
        answers: [{
                text: '6 p.m',
                correct: true
            },
            {
                text: '4 p.m',
                correct: false
            },
            {
                text: '10 p.m',
                correct: false
            },
            {
                text: '1 p.m',
                correct: false
            }
        ]
    },
];
const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')
const score = document.querySelector('.score');
let shuffledQuestions, currentQuestionIndex
let numCorrect = 0;

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})

function startGame() {
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    numCorrect = 0;
    questionContainerElement.classList.remove('hide')
    console.log(shuffledQuestions);
    setNextQuestion()
}

function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    questionElement.innerText = question.question

    let output = '';
    question.answers.forEach(answer => {

        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            output = `
            Your Score Is: ${numCorrect} / 10
            `;
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    })
    score.innerHTML = output;
}

function resetState() {
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
}

function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    if (correct) {
        numCorrect++;
    }
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide')
    } else {
        startButton.innerHTML = `
        End Of Trivia
        Press To Restart`;
        startButton.classList.remove('hide')
    }
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}