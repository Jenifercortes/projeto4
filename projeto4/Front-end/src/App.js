import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Destinos from './components/pages/Destinos';
import Promocoes from './components/pages/Promocoes';
import Contatos from './components/pages/Contatos';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './components/pages/Home';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}> Home  </Route>
        <Route path="/Destinos" element={<Destinos />}>  Destinos  </Route>
        <Route path="/Promocoes" element={<Promocoes />}>  Promoções  </Route>
        <Route path="/Contatos" element={<Contatos />}>   Contato </Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
