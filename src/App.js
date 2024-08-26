import './App.css';
import Header from './components/Header';
import React from 'react';
import MainContainer from './components/MainContainer';
import Courses from './components/Courses';
import Footer from './components/Footer';
import Technologo from './components/Technologo';
import { useState,useEffect } from 'react';
import LoadingScreen from './components/LoadingScreen';
import ScrollableHero from './components/ScrollableHero';
import Text from './components/Text';
function App() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Loading duration (3 seconds)
    return () => clearTimeout(timer);
  }, []);

  return (

<div className="App">
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <>
          <Header />
          <Text/>
         <ScrollableHero/>
          <MainContainer />
          <Courses />
          <Technologo />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;


