import { useEffect } from 'react';
import './App.css';
import Header from './components/header/header';
import Button from './components/button/button';
import React from 'react';

import {useTelegram} from './hooks/useTelegram'
import { Route, Routes } from 'react-router-dom';
import ProductList from './components/productList/productList';
import Form from './components/form/form';



function App() {
  
  const {onToggleButton, tg} = useTelegram();

  useEffect(() => {
    tg.ready();
  }, []);



  return (
    
    <div className="App">
      <Routes>
        <Route index element={<ProductList/>}/>
        <Route path={'/form'} element={<Form/>}/>
      </Routes>
    </div>
  );
}

export default App;
