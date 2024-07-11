import rosa from "../assets/flor.jpg"
import fresia from "../assets/fresia.jpg"
import girassol from "../assets/girassol.jpg"
import ipe from "../assets/ipe.jpg"
import gerbera from "../assets/gerbera.png"
import erva from "../assets/erva.png"
import { Button, Card } from "react-bootstrap"

function Home() {
  return (
    <main className="container mt-5 mb-5">
      <div className="row row-cols-1 row-cols-md-3 g-4">
        <div className="col mb-5">
          <Card style={{ width: "18rem" }} className="mx-auto" border="warning">
            <Card.Img variant="top" src={rosa} />
            <Card.Body>
              <Card.Title>Rosa amarela</Card.Title>
              <Card.Text>
                A rosa amarela é uma variedade encantadora e distinta dentro da
                vasta família das rosas.
              </Card.Text>
              <Button variant="warning">Saber mais</Button>
            </Card.Body>
          </Card>
        </div>
        <div className="col mb-5">
          <Card style={{ width: "18rem" }} className="mx-auto" border="warning">
            <Card.Img variant="top" src={fresia} />
            <Card.Body>
              <Card.Title>Frésia</Card.Title>
              <Card.Text>
                Originais do continente africano, a frésia possui flores
                perfumadas e delicadas. Também é muito usada como flor de corte
                para arranjos e buquês.
              </Card.Text>
              <Button variant="warning">Saber mais</Button>
            </Card.Body>
          </Card>
        </div>
        <div className="col mb-5">
          <Card style={{ width: "18rem" }} className="mx-auto" border="warning">
            <Card.Img variant="top" src={girassol} />
            <Card.Body>
              <Card.Title>Girassol</Card.Title>
              <Card.Text>
                O girassol aparenta ter uma única flor, mas essa estrutura é
                formada por cerca de centenas a milhares de pequenas flores.
                Responsáveis por proteger as inflorescências no miolo, as
                famosas pétalas simbolizam energia e força.
              </Card.Text>
              <Button variant="warning">Saber mais</Button>
            </Card.Body>
          </Card>
        </div>
        <div className="col mb-5">
          <Card style={{ width: "18rem" }} className="mx-auto" border="warning">
            <Card.Img variant="top" src={ipe} />
            <Card.Body>
              <Card.Title>Ipê de jardim</Card.Title>
              <Card.Text>
                Com aspecto rústico, o ipê-de-jardim pode ser encontrado com
                facilidade em todo o território nacional. O ipê-de-jardim é um
                arbusto que floresce o ano todo, principalmente em períodos mais
                quentes.
              </Card.Text>
              <Button variant="warning">Saber mais</Button>
            </Card.Body>
          </Card>
        </div>
        <div className="col mb-5">
          <Card style={{ width: "18rem" }} className="mx-auto" border="warning">
            <Card.Img variant="top" src={gerbera} />
            <Card.Body>
              <Card.Title>Gérbera</Card.Title>
              <Card.Text>
                Em espaços internos, as gérberas podem contribuir com a limpeza
                de gases tóxicos. Assim como o girassol, as pétalas da gérbera
                protegem as inflorescências no miolo.
              </Card.Text>
              <Button variant="warning">Saber mais</Button>
            </Card.Body>
          </Card>
        </div>
        <div className="col mb-5">
          <Card style={{ width: "18rem" }} className="mx-auto" border="warning">
            <Card.Img variant="top" src={erva} />
            <Card.Body>
              <Card.Title>Erva de São João</Card.Title>
              <Card.Text>
                As flores amarelas da erva-de-são-joão lembram o formato de
                estrelas. A erva-de-são-joão é conhecida por suas propriedades
                medicinais, principalmente na preparação de chás calmantes e
                propriedades antidepressivas.
              </Card.Text>
              <Button variant="warning">Saber mais</Button>
            </Card.Body>
          </Card>
        </div>
      </div>
    </main>
  )
}

export default Home
