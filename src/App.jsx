import React from 'react';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import RebrandBanner from './components/RebrandBanner';

const App = () => (
  <div className="App">
    <Header />
    <Main />
    <Footer />
    <RebrandBanner />
  </div>
);

export default App;
