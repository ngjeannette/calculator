import React, { useState } from 'react';
import './App.css';

function App() {
  const [result, setResult] = useState('0');
  const [valid, setValid] = useState('valid');

  let add = (character) => {
    let resultString = result.toString();

    if(result == '0') {
      resultString = character;
    } else if (resultString.length < 12) {
      resultString += character;
    }
    setResult(resultString);
  }

  let calculate = (str) => {
    let resultString = result;
    try {
      setValid('valid')
      eval(resultString);
      let calculatedResult = eval(resultString)
      setResult(calculatedResult);

    } catch (e) {
      if (e instanceof SyntaxError) {
        setResult(`${e.name}😭`);
        setValid('invalid')
      }
    }
  }

  let restart = () => {
    setValid('valid')
    setResult('0');
  }

  return (
    <>
      <div className="navBar">
        <h1>Project 2: Calculator</h1>
      </div>
      <div className="centering">
      <div className="calculator-container">
        <div className="calculator">
          <div className="screen-section">
            <span className={valid}>{result}</span>
            {valid == 'invalid' && <span className={valid}>Try again, click AC</span>}
          </div>
          <div className="button-section">
            <div className="row1 row">
              <button type="button" className="button" onClick={() => { restart()} }>AC</button>
              <button type="button" className="button" onClick={() => { add('(') }}>(</button>
              <button type="button" className="button" onClick={() => { add(')') }}>)</button>
              <button type="button" className="button" onClick={() => { add('/') }}>/</button>
            </div>
            <div className="row2 row">
              <button type="button" className="button" onClick={() => { add('7') }}>7</button>
              <button type="button" className="button" onClick={() => { add('8') }}>8</button>
              <button type="button" className="button" onClick={() => { add('9') }}>9</button>
              <button type="button" className="button" onClick={() => { add('*') }}>x</button>
            </div>
            <div className="row3 row">
              <button type="button" className="button" onClick={() => { add('4') }} >4</button>
              <button type="button" className="button" onClick={() => { add('5') }}>5</button>
              <button type="button" className="button" onClick={() => { add('6') }}>6</button>
              <button type="button" className="button" onClick={() => { add('-') }}>-</button>
            </div>
            <div className="row4 row">
              <button type="button" className="button" onClick={() => { add('1') }}>1</button>
              <button type="button" className="button" onClick={() => { add('2') }}>2</button>
              <button type="button" className="button" onClick={() => { add('3') }}>3</button>
              <button type="button" className="button" onClick={() => { add('+') }}>+</button>
            </div>
            <div className="row5 row">
              <button type="button" className="button double" onClick={() => { add('0') }} >0</button>
              <button type="button" className="button" onClick={() => { add('.') }}>.</button>
              <button type="button" className="button" onClick={() => { calculate()}}>=</button>
            </div>
          
          </div>

        </div>
      </div>
    </div>
    </>
  );
}

export default App;
