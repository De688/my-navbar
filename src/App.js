import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Navbar from './components/navbar';
import Home from "./pages/home";
import About from "./pages/about";
import Mail from "./pages/mail";
import Sells from "./pages/sells";
import Shop from "./pages/shop";
import Products from "./pages/products";

function App() {

  const pushcontent = () => {
    document.getElementById('id').style.marginLeft = '180px';
    document.getElementById('id').style.transition = '0.6s ';
  }
  const notpushcontent = () => {
    document.getElementById('id').style.margin = '0px';
    document.getElementById('id').style.transition = '0.6s ';
  }
  return (
    <>
    <Router>
      <div className="main-app-container">
      <div className="App">
        <Navbar pushcontent={pushcontent} notpushcontent={notpushcontent}/>
      </div>
      <div className="center-container" id='id'>
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/about' element={<About />}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/mail' element={<Mail/>}/>
        <Route path='/shop' element={<Shop/>}/>
        <Route path='/sells' element={<Sells/>}/>
      </Routes>
      </div>
      </div>
   
    </Router>
    </>
  );
}

export default App;
