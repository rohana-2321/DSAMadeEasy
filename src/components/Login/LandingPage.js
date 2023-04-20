import React from 'react'
import { Link } from 'react-router-dom'
import Login from './LoginPage'
import 'animate.css';
import '.././Login/Landingpage.css'
import App from '../../App';


export default function LandingPage() {
    
    
 
    return (
        <html >
            <head>
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous"/>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4" crossorigin="anonymous"></script>
            </head>
            <body class="parallex"> 
          
                
            
                    
                    <div class="context">
                    
                        <h1 className=" main animate__animated animate__backInDown "  >Login / Register </h1>
                                
                        <p className=" sub  animate__animated animate__zoomInDown">Our website consists of 400+ DSA questions with each topic related video content which builds your confidence in Data Structures and Algorithmss</p>
                        <p className=" sub  animate__animated animate__zoomInDown">Start your DSA preparation with us and don't waste your time</p>
                            
                        <span>
                            <div className="text-center">
                                    <Link to="/login" >
                                            <button class="b animate__animated animate__flip">LOGIN</button>
                                    </Link>
                                    <Link to="/register">
                                            <button class="b animate__animated animate__flip" ><span>REGISTER</span></button>
                                    </Link>
                            </div>
                        </span>  
                    </div>
                    <div class="area" >
                        <ul class="circles">
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                        </ul>
                    </div >
                </body>
        </html>
    )
}

