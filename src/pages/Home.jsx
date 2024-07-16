import hands from "../assets/hands.jpg"
import { Button, Card } from "react-bootstrap"

function Home() {
  return (
    <main className="container mt-5 mb-5">
      <div className="row row-cols-1 row-cols-md-3 g-4">
        <div className="col mb-5">
          <Card style={{ width: "18rem" }} className="mx-auto" border="primary" bg="primary">
            <Card.Img variant="top" src={hands} />
            <Card.Body>
              <Card.Title>Organize Seu Dia</Card.Title>
              <Card.Text>
                Adicione suas tarefas diárias e mantenha o foco no que realmente
                importa.
              </Card.Text>
              <Button variant="warning">Saber mais</Button>
            </Card.Body>
          </Card>
        </div>
        <div className="col mb-5">
          <Card style={{ width: "18rem" }} className="mx-auto" border="warning" bg="warning">
            <Card.Img variant="top" src={hands} />
            <Card.Body>
              <Card.Title>Priorize Suas Atividades</Card.Title>
              <Card.Text>
                Defina suas tarefas mais importantes e conquiste seus objetivos!
              </Card.Text>
              <Button variant="primary">Saber mais</Button>
            </Card.Body>
          </Card>
        </div>
        <div className="col mb-5">
          <Card style={{ width: "18rem" }} className="mx-auto" border="primary" bg="primary">
            <Card.Img variant="top" src={hands} />
            <Card.Body>
              <Card.Title>Checklist do Dia</Card.Title>
              <Card.Text>
                Marque as tarefas concluídas e sinta a satisfação de um dia
                produtivo.
              </Card.Text>
              <Button variant="warning">Saber mais</Button>
            </Card.Body>
          </Card>
        </div>
        <div className="col mb-5">
          <Card style={{ width: "18rem" }} className="mx-auto" border="warning" bg="warning">
            <Card.Img variant="top" src={hands} />
            <Card.Body>
              <Card.Title>Minhas Tarefas</Card.Title>
              <Card.Text>
                Anote tudo que precisa ser feito e nunca esqueça.
              </Card.Text>
              <Button variant="primary">Saber mais</Button>
            </Card.Body>
          </Card>
        </div>
        <div className="col mb-5">
          <Card style={{ width: "18rem" }} className="mx-auto" border="primary" bg="primary">
            <Card.Img variant="top" src={hands} />
            <Card.Body>
              <Card.Title>Planeje e Execute</Card.Title>
              <Card.Text>
                Divida suas tarefas em etapas e realize cada uma com eficiência.
              </Card.Text>
              <Button variant="warning">Saber mais</Button>
            </Card.Body>
          </Card>
        </div>
        <div className="col mb-5">
          <Card style={{ width: "18rem" }} className="mx-auto" border="warning" bg="warning">
            <Card.Img variant="top" src={hands} />
            <Card.Body>
              <Card.Title>Tarefas Pendentes</Card.Title>
              <Card.Text>
                Mantenha-se no controle do que precisa ser feito.
              </Card.Text>
              <Button variant="primary">Saber mais</Button>
            </Card.Body>
          </Card>
        </div>
      </div>
    </main>
  )
}

export default Home
