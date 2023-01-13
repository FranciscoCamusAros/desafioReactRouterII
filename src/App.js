import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/Navbar";
import Home from "./views/Home";
import Pokemones from "./views/Pokemones";
import Detalle from './views/Detalle';
import NotFound from './views/NotFound';
import 'bootstrap/dist/css/bootstrap.min.css';
import background from "./background_pokemon.png"


export default function App() {
  return (
    <div className="App" style={{ backgroundImage: `url(${background})`}}>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/pokemones/" element={<Pokemones />} />
          <Route path="/pokemones/:nombre" element={<Detalle />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}