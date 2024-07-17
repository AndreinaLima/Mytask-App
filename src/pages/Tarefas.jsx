import { Badge, Button, Card, Container } from "react-bootstrap";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { deleteTarefa, getTarefasUsuario } from "../firebase/tarefas";
import { useContext, useEffect, useState } from "react";
import Loader from "../components/Loader";
import toast from "react-hot-toast";
import { UsuarioContext } from "../contexts/UsuarioContext";

function Tarefas() {
  const [tarefas, setTarefas] = useState(null);
  // Recuperamos a informação do usuário (se está logado ou não)
  const usuario = useContext(UsuarioContext);

  const navigate = useNavigate();

  function carregarDados() {
    // O then devolve a lista de tarefas da coleção
    if (usuario) {
      getTarefasUsuario(usuario.uid).then((resultados) => {
        setTarefas(resultados)
      })
    }
  }

  function deletarTarefa(id) {
    // true -> apagar a tarefa, false -> não fazer nada
    const deletar = confirm("Tem certeza?")
    if (deletar) {
      deleteTarefa(id).then(() => {
        toast.success("Tarefa removida com sucesso")
        // Trazer a lista de tarefas atualizada
        carregarDados()
      })
    }
  }

  // Executar uma função quando o componente
  // é renderizado a primeira vez
  useEffect(() => {
    carregarDados()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  //Se o usuário não está logado
  if(usuario === null) {
    // Navegar para outra página
    return <Navigate to="/login" />
  }

  return (
    <main>
      <Container className="mt-5">
        <h1>Suas tarefas</h1>
        <hr />
        <Link className="btn btn-primary" to="/tarefas/adicionar">
          Adicionar tarefa
        </Link>
        {tarefas ? (
          <section className="mt-2 mb-4">
            {tarefas.map((tarefa) => {
              return (
                <Card key={tarefa.id} className="mb-2">
                  <Card.Body>
                    <Card.Title>{tarefa.titulo}</Card.Title>
                    <Card.Text>{tarefa.descricao}</Card.Text>
                    <div className="mb-2">
                      <Badge bg="dark" className="me-2">
                        {tarefa.categoria}
                      </Badge>
                      {tarefa.concluido ? (
                        <Badge bg="success" className="me-2">
                          Concluído
                        </Badge>
                      ) : (
                        <Badge bg="warning" className="me-2">
                          Pendente
                        </Badge>
                      )}
                      <Badge bg="primary">
                        {new Date(tarefa.dataConclusao).toLocaleDateString()}
                      </Badge>
                    </div>
                    <div className="d-flex gap-2">
                      <Button
                        variant="primary"
                        className="p-1 d-flex align-items-center gap-1"
                        onClick={() => {
                          navigate(`/tarefas/editar/${tarefa.id}`)
                        }}
                      >
                        <span className="material-symbols-outlined">edit</span>
                        Editar
                      </Button>
                      <Button
                        variant="danger"
                        className="p-1 d-flex align-items-center gap-1"
                        onClick={() => deletarTarefa(tarefa.id)}
                      >
                        Excluir
                        <span className="material-symbols-outlined">
                          delete
                        </span>
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              )
            })}
          </section>
        ) : (
          <Loader />
        )}
      </Container>
    </main>
  )
}

export default Tarefas
