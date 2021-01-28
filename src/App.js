import {BrowserRouter, Switch, Route} from 'react-router-dom';
import './App.css';
import Nav from './Comonents/nav';
import Home from './Comonents/Home';
import Form from './Comonents/form';



function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Nav/>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/register" component={Form}></Route>
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
