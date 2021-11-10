import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './Components/Header';
import Home from './Pages/Home';
import Filme from './Pages/Filme';
import Favoritos from './Pages/Favoritos';
import Erro from './Pages/Erro';

const Routes = () => {
    return(
        <BrowserRouter>
            <Header />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/filme/:id" component={Filme} />
                <Route excact path="/favoritos" component={Favoritos} />
                <Route path="*" component={Erro} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;