import { useEffect } from 'react';
import './App.css';
import Header from './components/header/header';
import Button from './components/button/button';
import React from 'react';

import {useTelegram} from './hooks/useTelegram'



function App() {
  
  const {onToggleButton, tg} = useTelegram();

  useEffect(() => {
    tg.ready();
  }, []);



  return (
    
    <div className="App">
      <Header />
      <Button onClick={onToggleButton}>toggle</Button>
    </div>
  );
}

export default App;
