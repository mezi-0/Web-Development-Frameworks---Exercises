import React from 'react';
import './App.css';
import ExtraTopics from './components/ExtraTopics';
import MainNavigation from './components/MainNavigation';
import MainTopic from './components/MainTopic';
import SecondNavigation from './components/SecondNavigation';
import SecondTopics from './components/SecondTopics';



function App() {
  return (
    <div>
      <MainNavigation />
      <SecondNavigation />
      <ExtraTopics />
      <MainTopic />
      <SecondTopics />
    </div>
  );
}

export default App;
