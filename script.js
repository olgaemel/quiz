const quizData = [
  {
    question: 'Which language runs in a web browser?',
    a: 'Java',
    b: 'C',
    c: 'Python',
    d: 'JavaScript',
    correct: 'd',
  },
  {
    question: 'What does CSS stand for?',
    a: 'Central Style Sheets',
    b: 'Cascading Style Sheets',
    c: 'Cascading Simple Sheets',
    d: 'Cars SUVs Sailboats',
    correct: 'b',
  },
  {
    question: 'What does HTML stand for?',
    a: 'Hypertext Markup Language',
    b: 'Hypertext Markdown Language',
    c: 'Hyperloop Machine Language',
    d: 'Helicopters Terminals Motorboats Lamborginis',
    correct: 'a',
  },
  {
    question: 'What year was JavaScript launched?',
    a: '1996',
    b: '1995',
    c: '1994',
    d: 'none of the above',
    correct: 'b',
  },
]

const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')

let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {
  deselectAnswers()

  const currentQuizData = quizData[currentQuiz]

  questionEl.innerText = currentQuizData.question
  a_text.innerText = currentQuizData.a
  b_text.innerText = currentQuizData.b
  c_text.innerText = currentQuizData.c
  d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
  answerEls.forEach((answerEl) => (answerEl.checked = false))
}

function getSelected() {
  let answer

  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id
    }
  })

  return answer
}

submitBtn.addEventListener('click', () => {
  const answer = getSelected()

  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++
    }

    currentQuiz++

    if (currentQuiz < quizData.length) {
      loadQuiz()
    } else {
      quiz.innerHTML = `
                <h2>You answered ${score}/${
        quizData.length
      } questions correctly</h2>

                <button onclick="location.reload()">Reload</button>
                <img src="${
                  score < 3
                    ? 'https://images.unsplash.com/photo-1697134065897-d262c9127bd6?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                    : 'https://images.unsplash.com/photo-1598693971597-1d53f843f626?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                }" width="600px">
            `
    }
  }
})

// const quiz = document.getElementById('quiz')
// const answerEls = document.querySelectorAll('.answer')

// const questionEl = document.getElementById('question')
// const a_text = document.getElementById('a_text')
// const b_text = document.getElementById('b_text')
// const c_text = document.getElementById('c_text')
// const d_text = document.getElementById('d_text')
// const submitBtn = document.getElementById('submit')

// let currentQuiz = 0
// let score = 0

// loadQuiz()

// function loadQuiz() {
//   deselectAnswers()
//   const currentQuizData = quizData[currentQuiz]
//   questionEl.innerHTML = currentQuizData.question
//   a_text.innerHTML = currentQuizData.a
//   b_text.innerHTML = currentQuizData.b
//   c_text.innerHTML = currentQuizData.c
//   d_text.innerHTML = currentQuizData.d
// }

// function deselectAnswers() {
//   answerEls.forEach((answerEl) => (answerEl.checked = false))
// }

// function getSelected() {
//   let answer
//   answerEls.forEach((answerEl) => {
//     if (answerEl.checked) {
//       answer = answerEl.id
//     }
//   })
//   return answer
// }

// submitBtn.addEventListener('click', () => {
//   const answer = getSelected()
//   if (answer) {
//     if (answer === quiz[currentQuiz].correct) {
//       score++
//     }
//   }
//   currentQuiz++

//   if (currentQuiz < quizData.length) {
//     loadQuiz()
//   } else {
//     quiz.innerHTML = `
//     <h2>You answered correctly ${score}/${quizData.length} questions correctly</h2>
//     <button onclick = 'location.reload()'>Reload</button>`
//   }
// })
