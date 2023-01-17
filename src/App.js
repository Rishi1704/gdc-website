import { useState } from 'react';
import './App.css';
import Footer from './Footer';
import Home from './Home';
import Cursor from './components/cursor';

function App() {
  const [hover, setHover] = useState(false)

  return (
    <div className="App">
      <Cursor hoverState={hover} />
      <Home setH={setHover} />
      <Footer setH={setHover} />
    </div>
  );
}

export default App;
