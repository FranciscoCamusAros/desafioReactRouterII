import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Card from 'react-bootstrap/Card';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Accordion from 'react-bootstrap/Accordion';
import Badge from 'react-bootstrap/Badge';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Detalle() {
  const url_api = "https://pokeapi.co/api/v2/pokemon/";

  const { nombre } = useParams();
  const [info, setInfo] = useState([]);


  useEffect(() => {
    consultarInformacion(nombre);
  }, []);

  const consultarInformacion = async (nombre) => {
    const response = await fetch(url_api + nombre)
    const data = await response.json()
    const obj_info_pokemon = [{
      name: data.name.charAt(0).toUpperCase() + data.name.slice(1),
      hp: data.stats[0].base_stat,
      attack: data.stats[1].base_stat,
      defense: data.stats[2].base_stat,
      special_attack: data.stats[3].base_stat,
      special_defense: data.stats[4].base_stat,
      speed: data.stats[5].base_stat,
      type: data.types[0].type.name.charAt(0).toUpperCase() + data.types[0].type.name.slice(1),
      img: data.sprites.other.dream_world.front_default,
      img_mini: data.sprites.front_default
    }]
    setInfo(obj_info_pokemon)
  }

  return (
    <div className="seccionDetalle">
      {
        (!nombre) ?
          <p>No hay valor</p> :
          <div className="cardPoke">
            {info.map((poke) => {
              return <div key={poke.name}>
                <Card className="mt-5 text-center" border="info" >
                  <Card.Header className="headerPoke font-face-gm">{poke.name} <img src={poke.img_mini} alt="" /></Card.Header>
                  <Card.Body>
                    <Card.Img className="imgCard" variant="top" src={poke.img} />
                    <Card.Text className="mt-4">
                      <h4>
                        Type: {' '}
                        <Badge bg="primary">
                          {poke.type}
                        </Badge>
                      </h4>
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer className="text-muted">
                    <Accordion>
                      <Accordion.Item eventKey="0">
                        <Accordion.Header>Stats</Accordion.Header>
                        <Container>
                          <Accordion.Body>
                            <Row>
                              <Col xs={3}>HP</Col>
                              <Col>
                                <ProgressBar className="my-1">
                                  <ProgressBar striped variant="success" now={poke.hp} key={poke.name} label={poke.hp}/>
                                </ProgressBar>
                              </Col>
                            </Row>
                            <Row>
                              <Col xs={3}>Attack</Col>
                              <Col>
                                <ProgressBar className="my-1">
                                  <ProgressBar striped variant="info" now={poke.attack} key={poke.name} label={poke.attack}/>
                                </ProgressBar>
                              </Col>
                            </Row>
                            <Row>
                              <Col xs={3}>Defense</Col>
                              <Col>
                                <ProgressBar className="my-1">
                                  <ProgressBar striped variant="primary" now={poke.defense} key={poke.name} label={poke.defense}/>
                                </ProgressBar>
                              </Col>
                            </Row>
                            <Row>
                              <Col xs={3}>Special Attack</Col>
                              <Col>
                                <ProgressBar className="my-1">
                                  <ProgressBar striped variant="danger" now={poke.special_attack} key={poke.name} label={poke.special_attack}/>
                                </ProgressBar>
                              </Col>
                            </Row>
                            <Row>
                              <Col xs={3}>Special Defense</Col>
                              <Col>
                                <ProgressBar className="my-1">
                                  <ProgressBar striped variant="warning" now={poke.special_defense} key={poke.name} label={poke.special_defense}/>
                                </ProgressBar>
                              </Col>
                            </Row>
                            <Row>
                              <Col xs={3}>Speed</Col>
                              <Col>
                                <ProgressBar className="my-1">
                                  <ProgressBar striped variant="dark" now={poke.speed} key={poke.name} label={poke.speed}/>
                                </ProgressBar>
                              </Col>
                            </Row>
                          </Accordion.Body>
                        </Container>
                      </Accordion.Item>
                    </Accordion>
                  </Card.Footer>
                </Card>
              </div>
            })}
          </div>
      }
    </div>
  )
}