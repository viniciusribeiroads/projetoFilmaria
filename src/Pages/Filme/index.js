import { useEffect, useState } from 'react';
import './filme-info.css';
import { useParams } from 'react-router-dom';
import api from '../../services/api';

export default function Filme(){
    const { id } = useParams();
    const [ filme, setFilme] = useState([]);

    useEffect( () => {
        async function loadFilme(){
            const response = await api.get(`r-api/?api=filmes/${id}`);
            console.log(response.data)
        }

        loadFilme();
    }, []);

    return(
        <div>
            <h1>Pagina de Detalhes - {id}</h1>
        </div>
    );
}