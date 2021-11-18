import './App.css';
import Home from './features/Home';
import Navbar from './features/Navbar'
import {Switch,Route} from 'react-router-dom'
import Products from './features/Products';
import Product from './features/Product';
import Cart from './features/cart';

function App() {
  return (
    <div>
     <Navbar/>
     <Switch>
       <Route exact path ="/" component={Home}/>
       <Route exact path ="/products" component={Products}/>
       <Route exact path ="/products/:id" component={Product}/>
       <Route exact path ="/cart" component={Cart}/>
     </Switch>
    </div>
  );
}

export default App;
