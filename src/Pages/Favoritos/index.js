import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './favoritos.css';
import { toast } from 'react-toastify';

export default function Favoritos(){

  const [filmes, setFilmes ] = useState([]);

  useEffect( () => {
    //Recebendo filmes do localStorage
    const minhaLista = localStorage.getItem('filmes');
    //recebendo e convertendo json para array
    setFilmes(JSON.parse(minhaLista) || []); 

  }, []);

  function handleDelete(id){
    let filtroFilmes = filmes.filter( (item) => {
      return (item.id !== id )
    })

    //Atualizando o state 
    setFilmes(filtroFilmes);
    //Convertendo pra JSON e atualizando o localStorage
    localStorage.setItem('filmes', JSON.stringify(filtroFilmes));
    toast.success('Filme excluido com sucesso!');
  }

    return(
        <div className="meus-filmes">
          <h1>Meus Filmes</h1>  

        {filmes.length === 0 && <span>Você não possui nenhum filme salvo :(</span> } 

          <ul>
            {filmes.map( (item) => {
              return(
                <li key={item.id}>
                  <span>{item.nome}</span>

                  <div>
                    <Link to={`/filme/${item.id}`}>Ver detalhes</Link>
                    <button onClick={ () => handleDelete(item.id) }>Excluir</button>
                  </div>
                </li>
              )
            })}
          </ul>
        </div>
    );
}