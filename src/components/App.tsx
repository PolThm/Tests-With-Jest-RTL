import React from 'react';
import {CounterProvider} from '../context'
import './App.css';
import Header from "./Header";
import TestSection from "./Counter";

const App: React.FC = () => {
  return (
    <CounterProvider>
      <Header/>
      <TestSection/>
    </CounterProvider>
  );
};

export default App;
