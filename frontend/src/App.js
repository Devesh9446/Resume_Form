import React from 'react';
import Upload_page from './pages/Upload_page.js'
import Form_page from './pages/Form_page.js'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/upload" element={<Upload_page />} />
        <Route path="/form" element={<Form_page/>} />
      </Routes>
    </Router>
  );
}

export default App;
