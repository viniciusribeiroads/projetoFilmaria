//https://sujeitoprogramador.com/r-api/?api=filmes/
import './styles.css';
import Routes from "./routes";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';



export default function App(){
  return(
    <div className="app">
      <Routes />
      <ToastContainer autoclose={3000} />
    </div>
  );
}
