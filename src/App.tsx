import React from 'react';
import './App.css';
import CustomRoutes from './components/Router';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <CustomRoutes />
    </div>
  );
}

export default App;
