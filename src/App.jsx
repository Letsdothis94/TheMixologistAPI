import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import SingleCocktail from './components/SingleCocktail';
import About from './components/About';
import Footer from './components/Footer';

function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path={'/'} element={
          <>
            <Home />
            <Footer />
          </>
          } />
        <Route path={'/cocktail/:id'} element={
          <>
            <SingleCocktail />
            <Footer />
          </>
          } />
        <Route path={'/about'} element={<About />} />
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  )
}

export default App
