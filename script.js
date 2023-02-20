const quizData = [
    {
        question: "What  is the only food that can't go bad?",
        a: "Dark Chocolate",
        b: "Peanut Butter",
        c: "Canned",
        d: "Honey",
        correct: "d",
    },
    {
        question: "Whats the heaviest organ in the human body?",
        a: "Brain",
        b: "Liver",
        c: "Skin",
        d: "Heart",
        correct: "b",
    },
    {
        question: "What is the oldest soft drink in the United States?",
        a: "Coco cola",
        b: "Dr.Pepper",
        c: "Pepsi",
        d: "Canada Dry Ginger Ale",
        correct: "b",
    },
    {
        question: "Which country's national animal is a unicorn?",
        a: "Scotland",
        b: "Denmark",
        c: "France",
        d: "New Zealand",
        correct: "a",
    },


];

const quiz= document.getElementById('quiz')
const ansEls = document.querySelectorAll('.ans')
const qE = document.getElementById('question')
const a_t = document.getElementById('a_t')
const b_t = document.getElementById('b_t')
const c_t = document.getElementById('c_t')
const d_t = document.getElementById('d_t')
const submitBtn = document.getElementById('submit')


let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {

    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    qE.innerText = currentQuizData.question
    a_t.innerText = currentQuizData.a
    b_t.innerText = currentQuizData.b
    c_t.innerText = currentQuizData.c
    d_t.innerText = currentQuizData.d
}

function deselectAnswers() {
    ansEls.forEach(ansEl => ansEl.checked = false)
}

function getSelected() {
    let ans
    ansEls.forEach(ansEl => {
        if(ansEl.checked) {
            ans = ansEl.id
        }
    })
    return ans
}


submitBtn.addEventListener('click', () => {
    const ans = getSelected()
    if(ans) {
       if(ans === quizData[currentQuiz].correct) {
           score++
       }

       currentQuiz++

       if(currentQuiz < quizData.length) {
           loadQuiz()
       } else {
           quiz.innerHTML = `
           <h2>You answered ${score}/${quizData.length} questions correctly</h2>

           <button onclick="location.reload()">Reload</button>
           `
       }
    }
})
