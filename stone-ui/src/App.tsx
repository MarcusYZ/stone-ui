import React from 'react';
import Button, {ButtonType, ButtonSize} from './components/Button/button'
import Menu from './components/Menu/menu'
import MenuItem from './components/Menu/menuItem';
import './App.css';

const App: React.FC = () => {
  return (
    <div>
      <header className="App-header">
        <Menu defaultIndex={0}>
          <MenuItem index={0}>
            cool link
          </MenuItem>
          <MenuItem index={1}>
            cool link1
          </MenuItem>
          <MenuItem index={2}>
            cool link2
          </MenuItem>
        </Menu>
        <Button autoFocus btnType={ButtonType.Primary} size={ButtonSize.Small} disabled>Hello</Button>
        <Button btnType={ButtonType.Primary} >Hello</Button>
        <Button btnType={ButtonType.Primary} size={ButtonSize.Large}>Hello</Button>
        <Button btnType={ButtonType.Link}>Baidu Link</Button>
        <Button btnType={ButtonType.Default}>Baidu Link</Button>
        <Button btnType={ButtonType.Danger}>Baidu Link</Button>
      </header>
    </div>
  )
}

export default App;

