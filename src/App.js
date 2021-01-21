import './App.css';
import React from "react";
import Sidebar from './Sidebar';
import Chat from './Chat';

function App() {
  return (
    <div className="app">
      <div className="appBody">
      <Sidebar />
      <Chat/>
      </div>
    </div>
  );
}

export default App;
