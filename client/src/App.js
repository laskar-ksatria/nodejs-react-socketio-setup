import React from 'react';
import './App.css';

import { io } from 'socket.io-client';
const ENDPOINT = 'http://localhost:4000';
let Io;

function App() {


  const handleClick = () => {
    Io.emit("click", "from click button")
  }

  React.useEffect(() => {
    Io = io(ENDPOINT);
    Io.on('send', args => {
      alert(args);
    })
  }, [ENDPOINT])

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={handleClick}>Send</button>
      </header>
    </div>
  );
}

export default App;
