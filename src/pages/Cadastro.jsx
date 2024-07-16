import { Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { cadastrarUsuario, entrarGoogle } from "../firebase/auth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom"

function Cadastro() {
  const {register, handleSubmit, formState: {errors}} = useForm();
  const navigate = useNavigate();


  function cadastrar(data) {
    cadastrarUsuario(data.nome, data.email, data.senha).then(() => {
      toast.success(`Bem-vindo (a)! ${data.nome}`);
      navigate("/tarefas")
    }).catch((error) => {
      toast.error("Um erro aconteceu!" + error.code)
    })
  }

  function handleEntrarGoogle() {
    entrarGoogle().then(() => {
      toast.success("Bem-vindo (a)!")
       navigate("/tarefas")
    })
  }

  return (
    <main>
      <form className="form-section mt-5" onSubmit={handleSubmit(cadastrar)}>
        <h1>Cadastro</h1>
        <hr />
        <div>
          <label htmlFor="nome">Nome</label>
          <input type="text" id="nome" className="form-control" {...register("nome", {required: "O nome é obrigatório!", maxLength: {value: 150, message: "Máximo de caractere: 150"}})} />
          {errors.nome && <small className="invalid">{errors.nome.message}</small>}
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input type="text" id="email" className="form-control" {...register("email", {required: "O email é obrigatório!"})} />
          {errors.email && <small className="invalid">{errors.email.message}</small>}
        </div>
        <div>
          <label htmlFor="senha">Senha</label>
          <input type="password" id="senha" className="form-control" {...register("senha", {required: "A senha é obrigatória!", minLength: {value: 6, message: "Mínimo de 6 caracteres"}})} />
          {errors.senha && <small className="invalid">{errors.senha.message}</small>}
        </div>
        <Button variant="primary" className="mt-2 mb-1 w-100" type="submit">
          Cadastrar
        </Button>
        <Button variant="warning" className="mt-1 mb-5 w-100" type="submit" onClick={handleEntrarGoogle}>
          Entrar com o google
        </Button>
      </form>
    </main>
  )
}

export default Cadastro;