// 1. Define the quiz questions and answers
const quizData = [
    {
        question: "What does HTML stand for?",
        options: ["Hyper Text Markup Language", "High Tech Machine Language", "Hyperlink and Text Markup Language"],
        correctAnswer: "Hyper Text Markup Language"
    },
    {
        question: "Which data structure uses LIFO (Last In, First Out)?",
        options: ["Queue", "Array", "Stack"],
        correctAnswer: "Stack"
    },
    {
        question: "What is a 'bug' in computer science?",
        options: ["A hardware component", "An error in a program", "A type of virus"],
        correctAnswer: "An error in a program"
    }
];

// 2. Set up variables to track the game state
let currentQuestionIndex = 0;
let score = 0;

// 3. Grab the HTML elements we need to manipulate
const questionElement = document.getElementById("question");
const optionsContainer = document.getElementById("options-container");
const quizContent = document.getElementById("quiz-content");
const resultElement = document.getElementById("result");
const scoreElement = document.getElementById("score");
const totalElement = document.getElementById("total");

// 4. Function to display the current question
function loadQuestion() {
    // Clear out any old buttons
    optionsContainer.innerHTML = "";
    
    // Get the current question data
    const currentQuizData = quizData[currentQuestionIndex];
    
    // Update the question text
    questionElement.innerText = currentQuizData.question;
    
    // Create a button for each option
    currentQuizData.options.forEach(option => {
        const button = document.createElement("button");
        button.innerText = option;
        // When a button is clicked, check the answer
        button.addEventListener("click", () => checkAnswer(option, currentQuizData.correctAnswer));
        optionsContainer.appendChild(button);
    });
}

// 5. Function to check if the clicked answer is correct
function checkAnswer(selectedOption, correctAnswer) {
    if (selectedOption === correctAnswer) {
        score++;
    }
    
    currentQuestionIndex++;
    
    // Check if we have more questions, or if the quiz is over
    if (currentQuestionIndex < quizData.length) {
        loadQuestion();
    } else {
        showResults();
    }
}

// 6. Function to hide the quiz and show the final score
function showResults() {
    quizContent.classList.add("hidden");
    resultElement.classList.remove("hidden");
    scoreElement.innerText = score;
    totalElement.innerText = quizData.length;
}

// Start the quiz when the file loads
loadQuestion();
