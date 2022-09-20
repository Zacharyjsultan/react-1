import * as React from 'react';
import Button from '@mui/material/Button';

import './App.css';
import Monkeys from './Components/Monkeys';

function App() {
  return (
    <>
      <div> REACT! </div>
      <Monkeys name="Chongo" age={99} />
      <Monkeys name="Aburido" age={2} />
      <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
      
    </>
  );
}

export default App;
