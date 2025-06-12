import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router';
import Navbar from './components/Navbar';
import WelcomeScreen from './components/WelcomeScreen';
import CardBuilder from './components/CardBuilder';
import GratitudeWall from './components/GratitudeWall';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

function App() {
  const [cards, setCards] = useState([]);

  
  useEffect(() => {
    fetch('https://thanks-dad-server.onrender.com/api/cards')
      .then(res => res.json())
      .then(data => setCards(data))
      .catch(err => console.error('Failed to fetch cards:', err));
  }, []);

  return (
    <div className="min-h-screen bg-blue-100 text-gray-800">
      <Navbar />
      <ToastContainer position="top-center" autoClose={3000}/>
      <div className="px-4 py-8 max-w-5xl mx-auto">
        <Routes>
          <Route path="/" element={<WelcomeScreen />} />
          <Route path="/create" element={<CardBuilder setCards={setCards} />} />
          <Route path="/wall" element={<GratitudeWall cards={cards} />} />
        </Routes>
      </div>
    </div>
  )
}

export default App;