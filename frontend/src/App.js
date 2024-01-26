import React from 'react';
import Upload_page from './pages/Upload_page.jsx'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/upload" element={<Upload_page />} />
      </Routes>
    </Router>
  );
}

export default App;
