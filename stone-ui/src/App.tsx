import React from 'react';
import Button, {ButtonType, ButtonSize} from './components/Button/button'
import './App.css';

const App: React.FC = () => {
  return (
    <div>
      <header className="App-header">
        <Button autoFocus btnType={ButtonType.Primary} size={ButtonSize.Small} disabled>Hello</Button>
      </header>
    </div>
  )
}

export default App;

