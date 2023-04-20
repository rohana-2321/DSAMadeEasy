import React, { useState } from 'react';
import { Link , useHistory} from 'react-router-dom';
import { Alert } from "react-bootstrap";
import { useUserAuth } from '../../context/userAuthContextProvider';
import GoogleButton from "react-google-button";


import '../../App.css'

const LogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { logIn , googleSignIn } = useUserAuth();

  let history=useHistory();
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await logIn(email, password);
      history.push("/app");
    } catch (err) {
      setError(err.message);
    }
  };

  const handleGoogleSignIn = async (e) => {
    e.preventDefault();
    try {
      await googleSignIn();
      history.push("/app");
    } catch (error) {
      console.log(error.message);
    }
  };
    return (
        <html>
            <body class="login">
                <section  class=" animate__animated animate__flip ">
                        <div className="login-container text-center m-5-auto">
                            <div class="form">
                                <h2 class="title">Sign in</h2>
                                {error && <Alert variant="danger">{error}</Alert>}
                                    <form onSubmit={handleSubmit}>
                                        <p class="form-group">
                                            <label>Email address</label><br/>
                                            <input 
                                                class="in" 
                                                type="email" 
                                                name="first_name" 
                                                onChange={(e) => setEmail(e.target.value)}
                                                required />
                                        </p>
                                        <p class="form-group">
                                            <label>Password</label>
                                           
                                            <br/>
                                            <input 
                                            class="in" 
                                            type="password" 
                                            name="password"
                                            onChange={(e) => setPassword(e.target.value)} required />
                                        </p>
                                        <p>
                                            <button class="submit" id="sub_btn" type='submit'>Login</button>
                                        </p>
                                        <p>
                                        <GoogleButton onClick={handleGoogleSignIn}></GoogleButton>
                                        </p>
                                    </form>
                                    <footer>
                                      <p><Link to="/forget-password">Forgot Password?</Link></p>
      
                                        <p>First time? <Link to="/register">Create an account</Link>.</p>
                                        <p><Link to="/">Back to Homepage</Link>.</p>
                                    </footer>
                                </div>
                        </div>
                 </section>
            </body>
        </html>
    )
}
export default LogIn;