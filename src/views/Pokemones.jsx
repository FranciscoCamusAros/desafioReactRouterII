import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

export default function Pokemones() {

  const [lista, setLista] = useState([]);
  const [pokemonSeleccionado, setPokemonSeleccionado] = useState('');
  const navigate = useNavigate();
  const url_api = "https://pokeapi.co/api/v2/pokemon/";


  useEffect(() => {
    consultarListado();
    console.log(lista)
  }, []);

  const consultarListado = async () => {
    const response = await fetch(url_api)
    const data = await response.json()
    setLista(data.results);
  }

  const verDetallePokemon = () => {
    navigate(`/pokemones/${pokemonSeleccionado}`);
  };

  return (
    <section className="container m-10 seccionPokemones">
      <section className="contenedorSeleccionador">
        <h1 className="h1Lista font-face-gm">Selecciona un Pokemón</h1>
        <Container className="containerPokes">
            <Form.Select className="formSelect" aria-label="Default select example" onChange={(e) => { setPokemonSeleccionado(e.target.value) }}>
              <option>Elige tu Pokemón</option>
              {lista.map((poke) => { return <option value={poke.name} key={poke.name}>{poke.name.charAt(0).toUpperCase() + poke.name.slice(1)}</option> })}
            </Form.Select>
            <Button variant="secondary" className="btnDetalle" onClick={verDetallePokemon}>Ver detalle</Button>
        </Container>
      </section>
    </section>
  );
}