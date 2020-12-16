import React, {useState, useEffect} from 'react';
import Formulario from './components/Fomulario';
import ListadoImágenes from './components/Listado';

function App() {


  const [ busqueda, setBusqueda ] = useState('');
  const [ listaImg, setListaImg ] = useState([]);
  // Paginador
  const [ paginaactual, setPaginaactual ] = useState(1);
  const [ total, setTotal ] = useState(1);

  useEffect(() => {
    if(busqueda.trim() === '') return;

    const consultarAPI = async () => {

      const imgXPagina = 30;

    const key = '14230054-067879a573169104e75697013';
    const url = `https://pixabay.com/api/?key=${key}&q=${busqueda}&per_page=${imgXPagina}`;

    const respuesta = await fetch(url);
    const resultado = await respuesta.json();

    setListaImg(resultado.hits)

    const calcularTotal = Math.ceil(resultado.totalHits / 30)
    setTotal(calcularTotal)

    console.log(total)
    }
    consultarAPI()


  }, [busqueda])


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
          paddingTop: '3em'
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
      </div>
    </div>
  );
}

export default App;
