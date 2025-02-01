import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ListEmployeeComponent from './Components/ListEmployeeComponent';
import AddEmployeeComponent from './Components/AddEmployeeComponent';
import UpdateEmployeeComponent from './Components/UpdateEmployeeComponent';
import HeaderComponent from './Components/HeaderComponent';
import FooterComponent from './Components/FooterComponent';

function App() {
  return (
    <BrowserRouter>
      <HeaderComponent />
      <Routes>
        <Route path="/" element={<ListEmployeeComponent />} />
        <Route path="/add-employee" element={<AddEmployeeComponent />} />
        <Route path="/edit-employee/:id" element={<UpdateEmployeeComponent />} />
      </Routes>
      <FooterComponent />
    </BrowserRouter>
  );
}

export default App;
