import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import LeftNavbar from './components/LeftNavbar';
import Container from './components/Container';
import Carrinho from './components/Carrinho';

function App() {
  // menu 
  const [open, setOpen] = React.useState(false);

  return (
    <BrowserRouter>
      <Header open={open} setOpen={setOpen} />
      <LeftNavbar open={open} setOpen={setOpen}/>
      <main>
        <Switch>
          <Route path="/" exact component={Container} />
          <Route path="/carrinho" exact component={Carrinho} />
        </Switch>
      </main>
    </BrowserRouter>
  );
}

export default App;
