import React from 'react';
import './index.scss';

const questions = [
  {
    title: 'Everything in React is a ...',
    variants: ['Module', 'Component', 'Class'],
    correct: 1,
  },
  {
    title: 'In which directory React Components are saved?',
    variants: ['Inside js/components/', 'Inside vendor/components/', 'Inside vendor/'],
    correct: 0,
  },
  {
    title: 'What is Babel?',
    variants: [
      'A Transpiler.',
      'A Compiler',
      'Both Compiler and Transpilar',
    ],
    correct: 2,
  },
  {
    title: 'How many elements does a react component return?',
    variants: [
      '1 Element',
      '2 Element',
      'Multiple Elements',
    ],
    correct: 2,
  },
  {
    title: 'What does the "webpack" command do?',
    variants: [
      'A module bundler',
      'Runs react local development server.',
      'Transpiles all the Javascript down into one file',
    ],
    correct: 0,
  },
  {
    title: 'What is ReactJS?',
    variants: [
      'Server-side Framework',
      'User-interface framework',
      'A Library for building interaction interfaces',
    ],
    correct: 2,
  },
];

function Result({correct}) {
  return (
    <div className="result">
      <img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" />
      <h2>You guessed {correct} out of {questions.length} answers</h2>
      <a href='/'>
        <button>Try again</button>
      </a>
    </div>
  );
}

function Game({step, question, onClickVariant}) {
  const percentage = Math.round(step/questions.length *100);
  console.log(percentage)
  return (
    <>
      <div className="progress">
        <div style={{ width: `${percentage}%` }} className="progress__inner"></div>
      </div>
      <h1>{question.title}</h1>
      <ul>
        {
          question.variants.map((text, index) => <li onClick={() => onClickVariant(index)} key={text}>{text}</li>)
        }
      </ul>
    </>
  );
}

function App() {
  const [step, setStep] = React.useState(0);
  const question = questions[step];
  const [correct, setCorrect] = React.useState(0)

  const onClickVariant = (index) => {
    if (question.correct == index) {
      setCorrect(correct + 1)
    }
    setStep(step + 1)
  }

  return (
    <div className="App">
      {
        step != questions.length ? <Game step={step} question = {question} onClickVariant={onClickVariant}/> : (
        <Result correct={correct} />
      )}
    </div>
  );
}

export default App;
