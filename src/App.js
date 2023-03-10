import { useState } from 'react';
import './App.css';
import Footer from './components/Footer/Footer';
import Home from './components//Home/Home';
import Section from './components/section/Section';
import Article from './components/article/Article';
import Cursor from './components/cursor';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
function App() {
  const [hover, setHover] = useState(false)

  return (
    <div className="App">
      <Cursor hoverState={hover} />
      <BrowserRouter>
        <Routes>
          <Route path='/' exact element={<Home setH={setHover} />} />
          <Route path='/article/:id' element={<Article />} />
          <Route path='/section/:id' element={<Section />} />
        </Routes>
      </BrowserRouter>
      <Footer setH={setHover} />
    </div>
  );
}

export default App;
