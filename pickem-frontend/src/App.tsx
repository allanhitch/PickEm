import React from 'react';
import logo from './logo.svg';
import './App.css';
import ScoreCard from './components/ScoreCard';
import { Divider } from '@mui/material';
import ScoreCardList from './components/ScoreCardList';

function App() {
  return (
    <div className="App">
      <ScoreCardList/>
    </div>
  );
}

export default App;
