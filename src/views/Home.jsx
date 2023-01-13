import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

export default function Home() {

  return (
    <Container className="contenedor-principal">
     <Row>
        <h1 className='h1 font-face-gm'>Bienvenido a la PokemónApp</h1>
      </Row>
      <Row>
        <img className="fondoAsh" src="/fondoAsh.png" alt="Ash y Pikachu"/>
      </Row>
    </Container>
  );
}