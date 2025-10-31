const quizQuestions = [
  {
    question: "How many recognized startups does India have as of January 2024?",
    options: ["50,000+", "80,000+", "112,718+", "150,000+"],
    correct: 2,
    explanation: "India is home to over 112,718 recognized startups, making it the third-largest startup ecosystem globally."
  },
  {
    question: "What is the value of IIMC Innovation Park's Cleantech and Sustainability Fund?",
    options: ["₹10 crore", "₹25 crore", "₹50 crore", "₹100 crore"],
    correct: 2,
    explanation: "IIMC Innovation Park launched a ₹50 crore Cleantech and Sustainability Fund to nurture 20-25 green startups annually."
  },
  {
    question: "How many cleantech startups were operating in India as of December 2023?",
    options: ["3,000+", "4,500+", "6,600+", "10,000+"],
    correct: 2,
    explanation: "As of December 2023, India had over 6,600 startups in the cleantech sector covering renewable energy, green technology, and waste management."
  },
  {
    question: "What is ReNew Power's operational renewable energy capacity?",
    options: ["5 GW", "8 GW", "13+ GW", "20 GW"],
    correct: 2,
    explanation: "ReNew Power, founded by Sumant Sinha, operates over 13 GW of renewable energy capacity, making it one of India's largest renewable energy companies."
  },
  {
    question: "India's entrepreneurial activity rate jumped from 5.3% in 2020 to what percentage in 2021?",
    options: ["8.5%", "11.2%", "14.4%", "18.7%"],
    correct: 2,
    explanation: "According to the GEM India Report, India's entrepreneurial activity rate jumped dramatically from 5.3% in 2020 to 14.4% in 2021."
  },
  {
    question: "Which startup commissioned Asia's largest BioCNG plant?",
    options: ["Phool.co", "GPS Renewables", "Varaha", "Euler Motors"],
    correct: 1,
    explanation: "GPS Renewables commissioned Asia's largest BioCNG plant in Indore, which powers 400 city buses daily with biogas."
  },
  {
    question: "What award did Phool.co win for recycling temple flower waste?",
    options: ["Forbes 30 Under 30", "UN Young Leader Award", "Both awards", "TIME Climate Leader"],
    correct: 2,
    explanation: "Phool.co won both the UN Young Leader Award and Forbes 30 Under 30 for their innovative work recycling temple flower waste into incense and fertilizer."
  },
  {
    question: "How much funding did Varaha raise in 2024?",
    options: ["$3.5 million", "$5.2 million", "$8.7 million", "$12 million"],
    correct: 2,
    explanation: "Varaha, a climate-tech platform helping farmers adopt regenerative agriculture, raised $8.7 million in 2024."
  },
  {
    question: "What is the projected value of India's green economy by 2030?",
    options: ["$50 billion", "$75 billion", "$100+ billion", "$150 billion"],
    correct: 2,
    explanation: "India's green economy is expected to be worth over $100 billion by 2030, presenting massive opportunities for green entrepreneurs."
  },
  {
    question: "How much funding can the Atal Incubation Centre (AIC) provide to startups?",
    options: ["₹5 crore", "₹10 crore", "₹15 crore", "₹20 crore"],
    correct: 1,
    explanation: "The Atal Incubation Centre provides funding of up to ₹10 crore to support entrepreneurs in developing sustainable technologies and business models."
  },
  {
    question: "How many unicorns does India have in its startup ecosystem?",
    options: ["75", "92", "111", "130"],
    correct: 2,
    explanation: "India has 111 unicorns valued at $350+ billion, making it one of the world's leading startup ecosystems."
  },
  {
    question: "What is the maximum loan amount available through MSME Business Loans in 59 Minutes?",
    options: ["₹50 lakh", "₹75 lakh", "₹1 crore", "₹2 crore"],
    correct: 2,
    explanation: "The MSME Business Loans in 59 Minutes scheme provides quick access to loans of up to ₹1 crore for sustainable businesses."
  },
  {
    question: "How many startups has IIMC Innovation Park mentored to date?",
    options: ["500+", "1,000+", "2,000+", "3,000+"],
    correct: 2,
    explanation: "IIMC Innovation Park has mentored over 2,000 startups and seed-funded 130 ventures with a combined portfolio valuation of around ₹8,000 crore."
  },
  {
    question: "Which company does Euler Motors provide electric three-wheelers to?",
    options: ["Amazon and Swiggy", "Flipkart and BigBasket", "Zomato and Dunzo", "Myntra and Meesho"],
    correct: 1,
    explanation: "Euler Motors transforms last-mile delivery by providing electric three-wheelers to companies like Flipkart, BigBasket, and Udaan."
  },
  {
    question: "What does Varaha's platform help farmers create?",
    options: ["Organic fertilizer", "Solar energy", "Carbon credits", "Biogas"],
    correct: 2,
    explanation: "Varaha's climate-tech platform helps farmers adopt regenerative agriculture and creates carbon credits that businesses buy to offset emissions."
  },
  {
    question: "When was ReNew Power founded?",
    options: ["2008", "2011", "2014", "2017"],
    correct: 1,
    explanation: "ReNew Power was founded by Sumant Sinha in 2011 and has grown to become India's largest renewable energy company."
  },
  {
    question: "What does BIRAC stand for?",
    options: ["Bio Research and Analysis Center", "Biotechnology Industry Research Assistance Council", "Bio Innovation Research and Acceleration Council", "Biotechnology Investment and Resource Agency Council"],
    correct: 1,
    explanation: "BIRAC (Biotechnology Industry Research Assistance Council) provides funding and support to biotechnology startups focused on environmental sustainability."
  },
  {
    question: "Who made TIME's 100 Climate List from Varaha?",
    options: ["Ankita Garg", "Vishal Kuchanur", "Madhur Jain", "All three founders"],
    correct: 2,
    explanation: "Varaha CEO Madhur Jain made TIME's 100 Climate List for the company's work in helping farmers adopt regenerative agriculture."
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
    message = "You're a Green Entrepreneurship expert! Your knowledge is exceptional.";
  } else if (percentage >= 70) {
    title = "🌟 Excellent!";
    message = "Great job! You have a strong understanding of green entrepreneurship in India.";
  } else if (percentage >= 50) {
    title = "👍 Good Job!";
    message = "You're on the right track! Keep learning about sustainable business.";
  } else {
    title = "💪 Keep Learning!";
    message = "Don't worry! Review the content and try again to improve your knowledge.";
  }
  
  document.getElementById('result-title').textContent = title;
  document.getElementById('result-message').textContent = message;
  
  showScreen('quiz-result-screen');
}

function displayReview() {
  const container = document.getElementById('review-questions-container');
  container.innerHTML = '';
  
  if (!selectedQuestions || selectedQuestions.length === 0) {
    container.innerHTML = '<p style="text-align: center; padding: 40px; color: #f44336;">No quiz data available. Please take the quiz first!</p>';
    showScreen('quiz-review-screen');
    return;
  }
  
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