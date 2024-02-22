import React from "react";
import './App.css';
import {HashRouter as Router, Switch, Route, } from "react-router-dom" ;
import SignUp from './SignUp'
import Nous from "./Nous";
import FaireEnvoi from './FaireEnvoi.js'
import FormPage from "./FormPage";
import NosServices from "./NosServices";
import ConseilsPratiques from './ConseilsPratiques.js'
import Accueil from './Accueil.js'
import Footer from "./Footer";
import Test from "./Test";
import Envois from './Envois'
import Manifeste from './Manifeste'
import Maniheader from './Maniheader'
import Gererenvois from './Gererenvois'
import LoginForm from './LoginForm'
import SignSide from './SignSide'
import Logout from './Components/Logout'
import Single from './Components/Posts/single';
import Search from './Components/Posts/search';
import Admin from './Admin';
import Create from './Components/admin/create';
import Edit from './Components/admin/edit';
import Delete from './Components/admin/delete';
import App1 from './App1'
import Posts from "./Components/admin/posts";
import Register from './Components/auth/register'
function App() {
  return (
    <Router>
      <React.StrictMode>
      <div className="App">
      <Switch>
      <Route path="/Gererenvois">
          <Maniheader />
          <Admin />
        </Route>

        
        <Route exact path="/admin" component={Admin} />
				<Route exact path="/admin/create" component={Create} />
				<Route exact path="/admin/edit/:id" component={Edit} />
				<Route exact path="/admin/delete/:id" component={Delete} />
        <Route path="/post/:author" component={Single} />
        <Route path="/Logout" component={Logout} />
				<Route path="/search">
          <Maniheader/>
          <Search/>
        </Route>



        <Route path="/envois">
          <Maniheader />
          <FaireEnvoi />
        </Route>

        <Route path="/register">
          <Test />
          <Register />
        </Route>

        <Route path="/Posts">
          <Maniheader />
          <Posts />
        </Route>
        <Route path="/Nous">
          <Test />
          <Nous />
        </Route>
        <Route path="/SignUp">
          <Test />
          <SignUp />
        </Route>
        <Route path="/FormPage">
          <Test />
          <FormPage/>
        </Route>
        <Route path="/LoginForm">
          <Test />
          <LoginForm />
        </Route>

        <Route path="/SignSide">
          <Test/>
          <SignSide/>
          
        </Route>

        <Route path="/FaireEnvoi">
          <Test />
          <FaireEnvoi />
        </Route>

        <Route path="/NosServices">
          <Test />
         <NosServices />
        </Route>

        <Route path="/Envois">
          <Test />
          <Envois />
        </Route>
        <Route path="/ConseilsPratiques">
          <Test/>
          <ConseilsPratiques/>      
        </Route>  
             

        <Route path="/">
          <Test />
          <Accueil />
        </Route>
      </Switch>
      </div>
    <Footer/>  
    </React.StrictMode>
    </Router>
  );
}

export default App;
