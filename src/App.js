import './App.css';
import Home from './features/Home';
import Navbar from './features/Navbar'
import {Switch,Route} from 'react-router-dom'
import Products from './features/Products';
import Product from './features/Product';

function App() {
  return (
    <div>
     <Navbar/>
     <Switch>
       <Route exact path ="/" component={Home}/>
       <Route exact path ="/products" component={Products}/>
       <Route exact path ="/products/:id" component={Product}/>
     </Switch>
    </div>
  );
}

export default App;
