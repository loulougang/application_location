import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Apropos from './pages/Apropos';
import FicheLogement from './pages/FicheLogement';
import Error from './pages/Error';
import Layout from './components/Layout';
import "font-awesome/css/font-awesome.min.css";


function App() {
  return (
    <Router>
    <Layout>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Apropos" element={<Apropos />} />
      <Route path="/FicheLogement/:id" element={<FicheLogement />} />
      <Route path='/not-found' element={<Error />} />
      <Route
        path="*"
        element={<Navigate to="/not-found" replace />}
    />

    </Routes>
    </Layout>
  </Router>
  );
}

export default App;
