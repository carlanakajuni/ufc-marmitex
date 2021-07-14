import './App.css';
import LoginPage from './pages/login-page';
import HomePage from './pages/home-page';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import logo from './assets/logo-ufc-small.png'
import RegisterPage from './pages/register-page';
import RegisterDonor from './pages/register-Donor';

function App() {
  return (
    <div className="main">
      <h1>Deploy direto</h1>
      <header className="header">
       {/*  <h1>UFC-Marmitex</h1> */}
       <img src={logo} alt='logo UFC-Marmitex' className='logo'/>
      </header>
      <BrowserRouter>
        <Switch>
          <Route path="/register-donor" component={RegisterDonor} />
          <Route path="/register" component={RegisterPage} />
          <Route path="/home" component={HomePage} />
          <Route path="/" component={LoginPage} />
        </Switch>
      </BrowserRouter>
      <footer className="footer">
        <small>&copy; Copyright 2021, UFC-Marmitex dev-team</small>
      </footer>
    </div>
  );
}

export default App;
