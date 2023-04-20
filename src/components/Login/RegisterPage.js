import React, { useState } from 'react';
import { Link,useHistory } from 'react-router-dom';
import { Alert } from "react-bootstrap";
import GoogleButton from "react-google-button";
import '../Login/RegisterPage.css';
import '../Login/LoginPage.css'
import { useUserAuth } from '../../context/userAuthContextProvider';




const SignUpPage=()=> {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { signUp } = useUserAuth();

  let history=useHistory();
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signUp(email, password);
      history.push("/login");
    } catch (err) {
      setError(err.message);
    }
  };


    return (
        <html>
            <body class="signup">
              <section  class=" animate__animated animate__flip ">
                  <div class="login-container text-center m-5-auto ">
                      <div class="form">
                          <h3 class="title">Sign Up </h3>
                          {error && <Alert variant="danger">{error}</Alert>}
                          <form  onSubmit={handleSubmit} >
                            <div class="form-group">
                              <input 
                                  type="email" 
                                  onChange={(e) => setEmail(e.target.value)}
                                  required/><label>Email</label>
                              </div>
                              <div class="form-group">
                              <input 
                                  type="password" 
                                  onChange={(e) => setPassword(e.target.value)}
                                  required/><label>Password</label>
                              </div>
                              <input type="submit"  value="Register" class="submit"/> 
                              <div class="row">
                              <p>Already Registered? <Link to="/login">Sign In</Link></p>
                             
                              </div>
                          </form>
                          </div>
                          
                  </div>
                </section>

            </body>
        </html>
    )

}
export default SignUpPage;