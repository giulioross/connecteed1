import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import HomePage from "./HomePage";   // ✅ aggiungi questo

import { ContactForm } from "./ContactPage";
import AziendaPage from "./AziendaPage.tsx";
import TerminiCondizioni from "./terminicondizioni.tsx";
import Comingsoon from "./Comingsoon";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />  {/* ✅ usa HomePage */}
        <Route path="/ContactPage" element={<ContactForm />} />
        <Route path="/Azienda" element={<AziendaPage />} />
        <Route path="/terminicondizioni" element={<TerminiCondizioni />} />
        <Route path="/Comingsoon" element={<Comingsoon />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
