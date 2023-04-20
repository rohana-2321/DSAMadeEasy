import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router, Route } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";
import "./index.css";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import LandingPage from './components/Login/LandingPage';
import LoginPage from './components/Login/LoginPage';
import RegisterPage from './components/Login/RegisterPage';
import ForgetPasswordPage from './components/Login/ForgetPasswordPage';
import TopicCard from './components/TopicCard/TopicCard';
import ProtectedRoute from "./components/ProtectedRoute";
import { UserAuthContextProvider } from "./context/userAuthContextProvider";


ReactDOM.render(
	
       <UserAuthContextProvider>
		<Router>
			
			
			<Route exact path="/" component={LandingPage}></Route>
			<Route path="/login" component={ LoginPage } />
			<Route path="/register" component={ RegisterPage } />
			<Route path="/forget-password" component={ ForgetPasswordPage } />
			<Route path="/app" component={App} />
		</Router>
		</UserAuthContextProvider>


	
	,document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
