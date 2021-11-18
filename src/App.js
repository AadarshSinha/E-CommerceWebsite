import './App.css';
import Home from './Home';
import Navbar from './Navbar'
import {Switch,Route} from 'react-router-dom'
import Products from './Products';
import Product from './Product';
import Cart from './cart';

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
