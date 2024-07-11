import { Accordion, Container, Tab, Tabs } from "react-bootstrap";

function Politicas() {
  return (
    <main>
      <Container className="mt-5 mb-5">
        <h1>Políticas de privacidade</h1>
        <Tabs
          defaultActiveKey="profile"
          id="uncontrolled-tab-example"
          className="mb-3"
        >
          <Tab eventKey="sobre" title="Sobre">
            Uma política de privacidade é um documento que explica como um
            website lida com toda a informação coletada dos seus utilizadores
            e/ou clientes. É uma boa prática dizer aos utilizadores como os
            sites armazenam e fazem uso desses dados.
          </Tab>
          <Tab eventKey="importancia" title="Importância">
            As políticas de privacidade podem ser exigidas por lei, dependendo
            de onde você opera. Em qualquer caso, é uma boa prática ter uma
            política de privacidade de proteção de dados, especialmente se você
            colectar qualquer tipo de dados privados de seus usuários (por
            exemplo, dados de cookies, detalhes de pagamento, endereço e número
            de telefone).
          </Tab>
          <Tab eventKey="contact" title="Contact">
            politica@gmail.com
          </Tab>
        </Tabs>
        <div className="d-flex gap-5 mt-5 mb-5">
          <h4>Perguntas frequentes: </h4>
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                O que é política de privacidade?
              </Accordion.Header>
              <Accordion.Body>
                Uma política de privacidade é um documento que explica como um
                website lida com toda a informação coletada dos seus
                utilizadores e/ou clientes. É uma boa prática dizer aos
                utilizadores como os sites armazenam e fazem uso desses dados.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>
                Quanto tempo demora para criar uma política de privacidade?
              </Accordion.Header>
              <Accordion.Body>
                Usando o nosso gerador, pode gerar uma política de privacidade
                em menos de 30 segundos. Simplesmente indique as suas
                informações e carregue no botão.
              </Accordion.Body>
            </Accordion.Item>
          <Accordion.Item eventKey="2">
              <Accordion.Header>
                É obrigatório um site ter política de privacidade?
              </Accordion.Header>
              <Accordion.Body>
                Não, não é exigido por lei ter uma política de privacidade. Contudo, algumas empresas podem exigir para que tenha uma para ter uma relação com elas.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </Container>
    </main>
  )
}

export default Politicas;