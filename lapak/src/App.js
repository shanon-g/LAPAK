import React from 'react'; 
import Sidebar from './components/Sidebar';
import HelpPage from './pages/HelpPage';
import './App.css'; 

const App = () => {
  return (
    <div className="app-container">
      <Sidebar />
      <HelpPage />
    </div>
  );
};

export default App;