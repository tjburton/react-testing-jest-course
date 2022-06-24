import './App.css';
import {useState} from "react";

function App() {
  const [buttonColour, setButtonColour] = useState('red');
  const [disabled, setDisabled] = useState(false);

  const handleChangeButton = () => {
    return buttonColour === 'red' ? setButtonColour('blue') : setButtonColour('red')
  }

  return (
    <div>
      <button
        disabled={disabled}
        onClick={handleChangeButton}
        style={{ backgroundColor: buttonColour, color: 'white' }}>
        Change to { buttonColour === 'red' ? 'blue' : 'red' }
      </button>
      <input
        onClick={e => setDisabled(e.target.checked)}
        type='checkbox'
      />
    </div>
  );
}

export default App;
