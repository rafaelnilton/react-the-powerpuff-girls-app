import './App.css';
import Episode from './pages/Episode/Episode';
import List from './pages/List/List';
import 'antd/dist/antd.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/Header/Header';
import Context from './Context';
import { useState } from 'react';

function App() {
  const [episode, setEpisode] = useState<any>({});
  return (
    <div className="App">
      <Context.Provider value={[episode, setEpisode]}>
        <BrowserRouter>
          <Header/>
          <Routes>
            <Route path="/" element={<List />} />
            <Route path="/season/:season/number/:number" element={<Episode />} />
          </Routes>
        </BrowserRouter>
      </Context.Provider>
        
    </div>
  );
}

export default App;
