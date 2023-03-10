import React, { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import { Button } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';

function App() {
  const [count, setCount] = useState(0);

  return (
    <React.Fragment>
      <CssBaseline />
      <div className='App'>
        <div>
          <a href='https://vitejs.dev' target='_blank'>
            <img src='/vite.svg' className='logo' alt='Vite logo' />
          </a>
          <a href='https://reactjs.org' target='_blank'>
            <img src={reactLogo} className='logo react' alt='React logo' />
          </a>
        </div>
        <h1>Vite + React</h1>
        <div className='card'>
          <Button
            variant='contained'
            onClick={() => setCount((count) => count + 1)}
          >
            count is {count}
          </Button>
          <p>
            Edit <code>src/App.jsx</code> and save to test HMR
          </p>
        </div>
        <p className='read-the-docs'>
          Click on the Vite and React logos to learn more
        </p>
      </div>
    </React.Fragment>
  );
}

export default App;
