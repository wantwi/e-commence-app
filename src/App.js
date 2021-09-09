
import './App.css';
import Homepage from './pages/HomePage/HomePage';
import Shop from './pages/shop/Shop';
import {Switch,Route} from "react-router-dom"
import Header from './components/header-component/Header';
import Account from './pages/Accout/Account';

function App() {
  return (
    <div>
      <Header/>
      <Switch>

        <Route exact path="/" component={Homepage}/>
        <Route  path="/shop" component={Shop}/>
        <Route  path="/signin" component={Account}/>
      </Switch>

    
    </div>
  );
}

export default App;
