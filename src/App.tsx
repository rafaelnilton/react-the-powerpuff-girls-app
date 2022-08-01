import './App.css';
import Episode from './pages/Episode/Episode';
import List from './pages/List/List';
import 'antd/dist/antd.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<List />} />
          <Route path="/season/:season/number/:number" element={<Episode />} />
        </Routes>
      </BrowserRouter>
        
    </div>
  );
}

export default App;
