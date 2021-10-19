import './App.css';
import Input from './Input';
import React, { useState } from 'react';

function App() {
  const [user, setUser] = useState({
    name: 'Usuario'
  });

  return (
    <Input user={user} setUser={setUser} />
  );
}

export default App;

