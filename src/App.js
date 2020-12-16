import React, {useState, useEffect} from 'react';
import Formulario from './components/Fomulario';
import ListadoImágenes from './components/Listado';
import { Button } from 'antd';

function App() {


  const [ busqueda, setBusqueda ] = useState('');
  const [ listaImg, setListaImg ] = useState([]);
  // Paginador
  const [ paginaactual, setPaginaactual ] = useState(1);
  const [ total, setTotal ] = useState(1);

  useEffect(() => {
    if(busqueda.trim() === '') return;

    const consultarAPI = async () => {

    const imgXPagina = 9;

    const key = '14230054-067879a573169104e75697013';
    const url = `https://pixabay.com/api/?key=${key}&q=${busqueda}&per_page=${imgXPagina}&page=${paginaactual}`;

    const respuesta = await fetch(url);
    const resultado = await respuesta.json();

    setListaImg(resultado.hits)

    const calcularTotal = Math.ceil(resultado.totalHits / 9)
    setTotal(calcularTotal)

    console.log(total)
    }
    consultarAPI()


  },[busqueda, paginaactual])

  const anterior = () => {
    const nuevaPaginaActual = paginaactual - 1

    if(nuevaPaginaActual === 0 ) return;

    setPaginaactual(nuevaPaginaActual)
  }


  const siguiente = () => {

    const nuevaPaginaActual = paginaactual + 1

    if(nuevaPaginaActual > total ) return;

    setPaginaactual(nuevaPaginaActual)
  }


  return (
    <div className="App">
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '10em',
          width: '1200px',
          margin: '0 auto',
          background: '#d7d7d7'
        }}
      >
        <h1> Buscador de imágenes API Pixabay</h1>
      </div>
      <div
        style={{
          width: '600px',
          margin: '0 auto',
          paddingTop: '3em',
          paddingLeft: '1em',
          paddingRight: '1em'
        }}
      >
        <Formulario
          setBusqueda={setBusqueda}
        />
      </div>
      <div
         style={{
          width: '600px',
          margin: '0 auto',
          paddingTop: '3em'
        }}
      >
        <ListadoImágenes
          listaImg={listaImg}
        />
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          padding: '1em'
        }}
      >
         <Button 
          type="primary"
          onClick={anterior}
          >&laquo; Back</Button>
        <Button 
          type="primary"
          onClick={siguiente}  
        >Next &raquo;</Button>
      </div>
       
      </div>
      
    </div>
  );
}

export default App;
