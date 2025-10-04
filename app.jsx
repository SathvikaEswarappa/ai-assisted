import { useState, useRef } from 'react';
import Canvas from './components/Canvas';
import AIButton from './components/AIButton';
import Login from './components/Login';
import Dashboard from './components/Dashboard';

function App() {
  const [token, setToken] = useState(localStorage.getItem('token'));
  const canvasRef = useRef(null);
  const socket = new WebSocket('ws://localhost:8000/ws');

  if (!token) return <Login setToken={setToken} />;

  return (
    <div>
      <Canvas socket={socket} ref={canvasRef} />
      <AIButton canvasRef={canvasRef} token={token} />
      <Dashboard token={token} />
    </div>
  );
}

export default App;

