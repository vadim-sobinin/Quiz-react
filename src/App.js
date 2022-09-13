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

function Result() {
  return (
    <div className="result">
      <img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" />
      <h2>You guessed 3 out of 10 answers</h2>
      <button>Try again</button>
    </div>
  );
}

function Game() {
  return (
    <>
      <div className="progress">
        <div style={{ width: '50%' }} className="progress__inner"></div>
      </div>
      <h1>Everything in React is a ...</h1>
      <ul>
        <li>Module</li>
        <li>Component</li>
        <li>Class</li>
      </ul>
    </>
  );
}

function App() {
  return (
    <div className="App">
      <Game />
      {/* <Result /> */}
    </div>
  );
}

export default App;
