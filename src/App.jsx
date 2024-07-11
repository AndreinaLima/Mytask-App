import Menu from "./components/Menu";
import Ajuda from "./pages/Ajuda";
import Cadastro from "./pages/Cadastro";
import Home from "./pages/Home";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Politicas from "./pages/Politicas";
import Rodape from "./components/Rodape";
import NovaTarefa from "./pages/NovaTarefa";

// BrowserRouter: componente essencial para conduzir o roteamento no navegador.

function App() {
  return (
    <>
      <BrowserRouter>
        <Menu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/ajuda" element={<Ajuda />} />
          <Route path="/novatarefa" element={<NovaTarefa />} />
          <Route path="/politicas" element={<Politicas />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Rodape />
      </BrowserRouter>
    </>
  )
}

export default App;