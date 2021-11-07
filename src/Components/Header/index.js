import './header.css';
import { Link } from 'react-router-dom';

export default function Header(){
    return(
        <header>
            <Link className="logo" to="/">Filmaria v1</Link>
            <Link className="favoritos" to="/favoritos">Salvos</Link>

        </header>
    );
    
}