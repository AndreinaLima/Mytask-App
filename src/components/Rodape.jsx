
import { Link } from "react-router-dom"

function Rodape() {
  return (
    <footer className="bg-warning text-light py-2">
      <div className="container d-flex flex-column justify-content-center align-items-center">
        <Link to="/" className="mb-3">
          <img
            src="https://cdn.pixabay.com/photo/2017/09/29/00/30/checkmark-icon-2797531_640.png"
            alt="Checkmark Icon"
            width="32"
          />
        </Link>
        <p className="mb-0">
          Desenvolvido por{" "}
          <a href="https://www.linkedin.com/in/andreinalima/" target="blank" className="link-footer">Andreina Lima</a> com a ©SoulCode.
          Todos os direitos reservados
        </p>
        <ul className="list-unstyled d-flex mt-3">
          <li className="me-3">
            <Link className="text-light" to="/politicas">
              Políticas de Privacidade
            </Link>
          </li>
          <li>
            <Link className="text-light" to="/">
              Home
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  )
}

export default Rodape
