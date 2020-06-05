import React from 'react';
import logo from './logo.svg';
import Button, {ButtonType, ButtonSize} from './components/Button/button'
import './App.css';

const  App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Button autoFocus btnType={ButtonType.Primary} size={ButtonSize.Small} disabled>Hello</Button>
        <Button btnType={ButtonType.Primary} >Hello</Button>
        <Button btnType={ButtonType.Primary} size={ButtonSize.Large}>Hello</Button>
        <Button btnType={ButtonType.Link}>Baidu Link</Button>
        <Button btnType={ButtonType.Default}>Baidu Link</Button>
        <Button btnType={ButtonType.Danger}>Baidu Link</Button>
      </header> 
    </div>
  );
}

export default App;
