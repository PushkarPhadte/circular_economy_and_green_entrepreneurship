const quizQuestions = [
    {
        question: "What is the projected market value of India's circular economy by 2050?",
        options: ["$500 billion", "$1 trillion", "$2 trillion", "$5 trillion"],
        correct: 2,
        explanation: "India's circular economy is projected to be worth $2 trillion by 2050, creating nearly 10 million green jobs in the process."
    },
    {
        question: "What percentage of India's PET plastic waste is recycled?",
        options: ["50%", "70%", "90%", "100%"],
        correct: 2,
        explanation: "India recycles nearly 90% of its PET plastic waste, significantly beating the global average, thanks to strong informal sector support and regulatory frameworks."
    },
    {
        question: "How many jobs is India's circular economy expected to create by 2050?",
        options: ["1 million", "5 million", "10 million", "20 million"],
        correct: 2,
        explanation: "The circular economy transition in India is expected to create approximately 10 million green jobs by 2050."
    },
    {
        question: "What does EPR stand for in waste management?",
        options: ["Environmental Protection Rules", "Extended Producer Responsibility", "Economic Production Recycling", "Energy and Pollution Reduction"],
        correct: 1,
        explanation: "EPR stands for Extended Producer Responsibility, a policy approach where producers take responsibility for the treatment or disposal of post-consumer products."
    },
    {
        question: "What is the main principle of a circular economy?",
        options: ["Maximum production", "Linear consumption", "Minimizing waste and reusing resources", "Increasing imports"],
        correct: 2,
        explanation: "The circular economy focuses on minimizing waste and maximizing resource reuse through repair, refurbishment, and recycling rather than disposal."
    },
    {
        question: "Which city in India has transformed waste management with large-scale composting?",
        options: ["Mumbai", "Delhi", "Indore", "Bangalore"],
        correct: 2,
        explanation: "Indore's large-scale composting and plastic recycling operations have set national benchmarks for waste management in India."
    },
    {
        question: "How much plastic packaging waste has been recycled in India since Feb 2022?",
        options: ["50 lakh tonnes", "100 lakh tonnes", "157 lakh tonnes", "200 lakh tonnes"],
        correct: 2,
        explanation: "Since February 2022, over 157 lakh tonnes (15.7 million tonnes) of plastic packaging waste have been recycled under India's EPR framework."
    },
    {
        question: "What percentage of household consumption contributes to global greenhouse gas emissions?",
        options: ["30%", "50%", "72%", "90%"],
        correct: 2,
        explanation: "Household consumption is responsible for up to 72% of global greenhouse gas emissions, highlighting the importance of sustainable consumption patterns."
    },
    {
        question: "Which Mumbai-based startup supports waste workers through digital recycling?",
        options: ["WasteHub", "ReCircle", "EcoConnect", "GreenCycle"],
        correct: 1,
        explanation: "ReCircle is an innovative Mumbai-based startup that collects, sorts, and recycles waste through a digital platform, supporting over 2,500 waste workers."
    },
    {
        question: "By what year will plastic recycling targets reach 80% in India?",
        options: ["2025", "2026", "2027", "2028"],
        correct: 3,
        explanation: "India's plastic recycling targets increase progressively from 50% in 2025 to 80% by 2028 for rigid and flexible plastics."
    },
    {
        question: "What is the expected global circular economy market value by 2029?",
        options: ["$400 billion", "$600 billion", "$798 billion", "$1 trillion"],
        correct: 2,
        explanation: "The global circular economy market is projected to reach $798.3 billion by 2029, growing at a CAGR of 11.4%."
    },
    {
        question: "How many producers are registered under India's EPR framework?",
        options: ["10,000+", "25,000+", "51,000+", "100,000+"],
        correct: 2,
        explanation: "Over 51,000 producers and 2,600 waste processors are registered under India's EPR framework, demonstrating widespread adoption."
    },
    {
        question: "What percentage of India's total waste remains unprocessed?",
        options: ["50%", "60%", "75%", "90%"],
        correct: 2,
        explanation: "India generates approximately 62 million tons of waste annually, with over 75% remaining unprocessed, presenting a significant opportunity for circular economy initiatives."
    },
    {
        question: "Which initiative promotes eco-friendly products in India?",
        options: ["Green India", "Mission LiFE", "Eco Warriors", "Clean Future"],
        correct: 1,
        explanation: "Mission LiFE (Lifestyle for Environment) and Eco-Mark Rules boost demand for environmentally friendly products and sustainable lifestyles across India."
    },
    {
        question: "What was the value of the UNDP and GEF initiative for electronics circular economy?",
        options: ["$50 million", "$80 million", "$120 million", "$200 million"],
        correct: 2,
        explanation: "In 2025, India, UNDP, and GEF launched a $120 million initiative to advance circular economy practices in the electronics sector."
    },
    {
        question: "What is India's plastic waste recycling capacity projected to be by 2033?",
        options: ["15 million tons", "20 million tons", "25.4 million tons", "30 million tons"],
        correct: 2,
        explanation: "India's plastic waste recycling capacity is set to grow from 10.9 million tons in 2024 to 25.4 million tons by 2033, representing a CAGR of 9.37%."
    },
    {
        question: "Which fashion brands in India remake textile waste into new products?",
        options: ["FabIndia & Biba", "Doodlage & Sirohi", "Myntra & Ajio", "Zara & H&M"],
        correct: 1,
        explanation: "Indian fashion brands like Doodlage and Sirohi remake textile waste into new apparel and lifestyle goods, creating circular systems in the fashion industry."
    },
    {
        question: "When was the National Plastic Waste Reporting Portal launched?",
        options: ["Republic Day 2025", "Independence Day 2025", "World Environment Day 2025", "Gandhi Jayanti 2025"],
        correct: 2,
        explanation: "The National Plastic Waste Reporting Portal was launched on World Environment Day 2025 to mandate online reporting for transparency in waste management."
    }
];

let currentQuestionIndex = 0;
let selectedQuestions = [];
let score = 0;
let userAnswers = [];
let shuffledOptions = [];

function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

function selectRandomQuestions() {
    const shuffled = shuffleArray(quizQuestions);
    return shuffled.slice(0, 10);
}

function initQuiz() {
    selectedQuestions = selectRandomQuestions();
    currentQuestionIndex = 0;
    score = 0;
    userAnswers = [];
    shuffledOptions = [];
}

function showScreen(screenId) {
    document.querySelectorAll('.quiz-screen').forEach(screen => {
        screen.classList.remove('active');
    });
    document.getElementById(screenId).classList.add('active');
}

function displayQuestion() {
    const question = selectedQuestions[currentQuestionIndex];
    const questionText = document.getElementById('question-text');
    const optionsContainer = document.getElementById('options-container');
    const questionCounter = document.getElementById('question-counter');
    const progressFill = document.getElementById('progress-fill');
    const nextBtn = document.getElementById('next-question-btn');

    questionText.textContent = question.question;
    questionCounter.textContent = `Question ${currentQuestionIndex + 1} of 10`;
    progressFill.style.width = `${((currentQuestionIndex + 1) / 10) * 100}%`;

    optionsContainer.innerHTML = '';
    nextBtn.disabled = true;

    const optionsWithIndex = question.options.map((opt, idx) => ({ text: opt, originalIndex: idx }));
    const shuffled = shuffleArray(optionsWithIndex);
    shuffledOptions[currentQuestionIndex] = shuffled;

    shuffled.forEach((option) => {
        const button = document.createElement('button');
        button.className = 'option-btn';
        button.textContent = option.text;
        button.dataset.index = option.originalIndex;

        button.addEventListener('click', () => selectOption(button, option.originalIndex));
        optionsContainer.appendChild(button);
    });
}

function selectOption(button, answerIndex) {
    const buttons = document.querySelectorAll('.option-btn');
    buttons.forEach(btn => btn.classList.remove('selected'));
    button.classList.add('selected');

    userAnswers[currentQuestionIndex] = answerIndex;
    document.getElementById('next-question-btn').disabled = false;
}

function nextQuestion() {
    const selectedAnswer = userAnswers[currentQuestionIndex];
    const correctAnswer = selectedQuestions[currentQuestionIndex].correct;

    if (selectedAnswer === correctAnswer) {
        score++;
    }

    currentQuestionIndex++;

    if (currentQuestionIndex < selectedQuestions.length) {
        displayQuestion();
    } else {
        showResults();
    }
}

function showResults() {
    const percentage = (score / 10) * 100;

    document.getElementById('final-score').textContent = `${score}/10`;
    document.getElementById('correct-answers').textContent = score;
    document.getElementById('incorrect-answers').textContent = 10 - score;
    document.getElementById('score-percentage').textContent = `${percentage}%`;

    let title, message;
    if (percentage >= 90) {
        title = "🏆 Outstanding!";
        message = "You're a Circular Economy expert! Your knowledge is exceptional.";
    } else if (percentage >= 70) {
        title = "🌟 Excellent!";
        message = "Great job! You have a strong understanding of circular economy principles.";
    } else if (percentage >= 50) {
        title = "👍 Good Job!";
        message = "You're on the right track! Keep learning about sustainability.";
    } else {
        title = "💪 Keep Learning!";
        message = "Don't worry! Review the content and try again to improve your knowledge.";
    }

    document.getElementById('result-title').textContent = title;
    document.getElementById('result-message').textContent = message;

    showScreen('quiz-result-screen');
}

function displayReview() {
    console.log('Selected Questions:', selectedQuestions);
    console.log('User Answers:', userAnswers);
    console.log('Shuffled Options:', shuffledOptions);
    
    const container = document.getElementById('review-questions-container');
    container.innerHTML = '';

    selectedQuestions.forEach((question, index) => {
        const userAnswer = userAnswers[index];
        const correctAnswer = question.correct;
        const isCorrect = userAnswer === correctAnswer;

        const card = document.createElement('div');
        card.className = `review-question-card ${isCorrect ? 'correct' : 'incorrect'}`;

        const header = document.createElement('div');
        header.className = 'review-question-header';

        const statusIcon = document.createElement('div');
        statusIcon.className = `review-status-icon ${isCorrect ? 'correct' : 'incorrect'}`;
        statusIcon.textContent = isCorrect ? '✓' : '✗';

        const questionNumber = document.createElement('span');
        questionNumber.className = 'review-question-number';
        questionNumber.textContent = `Question ${index + 1}`;

        header.appendChild(statusIcon);
        header.appendChild(questionNumber);

        const questionText = document.createElement('div');
        questionText.className = 'review-question-text';
        questionText.textContent = question.question;

        const optionsDiv = document.createElement('div');
        optionsDiv.className = 'review-options';

        let optionsToDisplay;
        if (shuffledOptions[index] && shuffledOptions[index].length > 0) {
            optionsToDisplay = shuffledOptions[index];
        } else {
            optionsToDisplay = question.options.map((opt, idx) => ({
                text: opt,
                originalIndex: idx
            }));
        }

        optionsToDisplay.forEach((option) => {
            const optionDiv = document.createElement('div');
            optionDiv.className = 'review-option';

            const isUserAnswer = option.originalIndex === userAnswer;
            const isCorrectOption = option.originalIndex === correctAnswer;

            if (isCorrectOption) {
                optionDiv.classList.add('correct-answer');
            }

            if (isUserAnswer) {
                optionDiv.classList.add('user-answer');
                optionDiv.classList.add(isCorrect ? 'correct' : 'wrong');
            }

            const icon = document.createElement('span');
            icon.className = 'review-option-icon';

            if (isCorrectOption) {
                icon.textContent = '✓';
            } else if (isUserAnswer && !isCorrect) {
                icon.textContent = '✗';
            } else {
                icon.textContent = '';
            }

            const text = document.createElement('span');
            text.textContent = option.text;

            optionDiv.appendChild(icon);
            optionDiv.appendChild(text);
            optionsDiv.appendChild(optionDiv);
        });

        const explanation = document.createElement('div');
        explanation.className = 'review-explanation';
        explanation.innerHTML = `<strong>Explanation:</strong> ${question.explanation}`;

        card.appendChild(header);
        card.appendChild(questionText);
        card.appendChild(optionsDiv);
        card.appendChild(explanation);

        container.appendChild(card);
    });

    showScreen('quiz-review-screen');

    container.scrollTop = 0;
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('start-quiz-btn').addEventListener('click', () => {
        initQuiz();
        showScreen('quiz-question-screen');
        displayQuestion();
    });

    document.getElementById('next-question-btn').addEventListener('click', nextQuestion);

    document.getElementById('retake-quiz-btn').addEventListener('click', () => {
        showScreen('quiz-start-screen');
    });

    document.getElementById('view-answers-btn').addEventListener('click', () => {
        displayReview();
    });

    document.getElementById('back-to-results-btn').addEventListener('click', () => {
        showScreen('quiz-result-screen');
    });
});