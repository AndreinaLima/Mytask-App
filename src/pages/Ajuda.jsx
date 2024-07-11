import { Container, Accordion, Button, Alert } from "react-bootstrap";

function Ajuda() {
  return (
    <main className="mt-3">
      <Container>
        <h1>Ajuda</h1>
        <hr />
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>Sobre o nosso sistema</Accordion.Header>
            <Accordion.Body>
              Mytask é um sistema para gerenciamento de tarefas pessoais. Nesta
              aplicação você pode gerenciar todos os seus afazeres.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Sobre a empresa</Accordion.Header>
            <Accordion.Body>
              Esta empresa desenvolve soluções focadas em produtividade e
              bem-estar.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>Sobre os serviços</Accordion.Header>
            <Accordion.Body>
              Esta empresa desenvolve soluções focadas em produtividade e
              bem-estar.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        <Button className="mt-5 me-5">Entre em contato</Button>
        <Button className="mt-5 me-5" variant="outline-dark">
          Reclame aqui
        </Button>
        <Alert className="mt-5" variant="warning">
          Atenção! Estamos em manutenção.
        </Alert>
      </Container>
    </main>
  )
}

export default Ajuda;