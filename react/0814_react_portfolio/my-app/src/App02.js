import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const [disabled, setDisabled] = useState(false);

  return (
    <div className="App">
      <header className="App-header">
        {/* testid 속성은 데이터을 이용해 만들도록  되어있*/}
        {/* testid 라는 이름의 데이터셋을 */}
        <h3 data-testid="counter">{counter}</h3>
        <div>
          <button
            data-testid="minus-button"
            onClick={() => setCounter((count) => count - 1)}
            disabled={disabled}
          >
            -
          </button>
          <button
            data-testid="plus-button"
            onClick={() => setCounter((count) => count + 1)}
            disabled={disabled}
          >
            +
          </button>
        </div>
        <div>
          <button
            data-testid="on/off-button"
            style={{ backgroundColor: "blue" }}
            onClick={() => setDisabled((prev) => !prev)}
          >
            on/off
          </button>
        </div>
      </header>
    </div>
  );
}

export default App;