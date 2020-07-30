import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import BodyWrapper from './components/CommonWrapper/BodyWraper';
import Game from './components/Game/Game';

const App = () => {
  return (
    <div className='app_container'>
      <Header />
      <Navbar />
      <BodyWrapper>
        <Game />
      </BodyWrapper>
    </div>
  );
};

export default App;
