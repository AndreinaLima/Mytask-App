/* eslint-disable react/prop-types */
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { logout } from "../firebase/auth";
import { useContext } from "react";
import { UsuarioContext } from "../contexts/UsuarioContext";

// eslint-disable-next-line react/prop-types
function Menu() {
  const usuario = useContext(UsuarioContext)
  const navigate = useNavigate();

  function handleLogout() {
    logout().then(() => {
      navigate("/login");
    })
  }

  return (
    <header>
      <Navbar bg="warning" variant="light" expand="md">
        <Container fluid>
          <Link to="/">
            <img
              src="https://cdn.pixabay.com/photo/2017/09/29/00/30/checkmark-icon-2797531_640.png"
              width="32"
            />
          </Link>
          <Navbar.Toggle />
          <Navbar.Collapse>
            <Nav className="ms-auto">
              {usuario && (
                <Link className="nav-link" to="/tarefas">
                  Tarefas
                </Link>
              )}
              {!usuario && (
                <Link className="nav-link" to="/login">
                  Login
                </Link>
              )}
              {!usuario && (
                <Link className="nav-link" to="/cadastro">
                  Cadastro
                </Link>
              )}             
              <Link className="nav-link" to="/ajuda">
                Ajuda
              </Link>
              {usuario && <span className="text-dark nav-link">{usuario.displayName}</span>}
              {usuario && <Button variant="outline-dark" onClick={handleLogout}>
                Sair
              </Button>}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Menu;