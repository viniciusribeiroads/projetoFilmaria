import axios from 'axios';

//base url > //https://sujeitoprogramador.com/

//https://sujeitoprogramador.com/r-api/?api=filmes/

// r-api/?api=filmes/ (todos os filmes)
// r-api/?api=filmes/123 (Filme com Id 123)

const api = axios.create({
    baseURL: 'https://sujeitoprogramador.com'
});

export default api;