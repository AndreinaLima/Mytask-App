import Menu from "./components/Menu";
import Ajuda from "./pages/Ajuda";
import Cadastro from "./pages/Cadastro";
import Home from "./pages/Home";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import EditarTarefa from "./pages/EditarTarefa"
import NovaTarefa from "./pages/NovaTarefa"
import Tarefas from "./pages/Tarefas"
import Politicas from "./pages/Politicas"
import Rodape from "./components/Rodape"

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast"

import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase/config";
import { UsuarioContext } from "./contexts/UsuarioContext";


function App() {
  // O estado de usuario indica se ele está logado ou não na aplicação
  // null = deslogado
  const [usuarioLogado, setUsuarioLogado] = useState(null)

  useEffect(() => {
    // Monitora/detecta o usuario conectado/desconcetado
    onAuthStateChanged(auth, (user) => {
      setUsuarioLogado(user)
    })
  }, [])

  return (
    <>
      <UsuarioContext.Provider value={usuarioLogado}>
        <BrowserRouter>
          <Menu />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/cadastro" element={<Cadastro />} />
            <Route path="/ajuda" element={<Ajuda />} />
            <Route path="/tarefas" element={<Tarefas />} />
            <Route path="/tarefas/adicionar" element={<NovaTarefa />} />
            <Route path="/tarefas/editar/:id" element={<EditarTarefa />} />
            <Route path="/politicas" element={<Politicas />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Rodape />
        </BrowserRouter>
        <Toaster position="bottom-right" />
      </UsuarioContext.Provider>
    </>
  )
}

export default App;