import { useState } from "react";
import "./SignIn.css"; 
import {FaFacebookSquare,FaGithub,FaGoogle} from "react-icons/fa" 
import { Link } from "react-router-dom";

const SignIn = () => {
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  return (
    <div id="logInOuter">
      <div>
        <div id="loginImgcont">
          <img id="loginImg" src="https://images.unsplash.com/photo-1511300636408-a63a89df3482?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="background-img" />
        </div>
      </div>
      <div id="logInCard">
        <div id="logInHere">
          <div className="logInText">Sign In</div>
          <div id="icnLogCont">
            <FaFacebookSquare className="logInIcons"/>
            <FaGithub className="logInIcons"/>
            <FaGoogle className="logInIcons"/>
          </div>
          <div className="logInText">OR</div>
        </div>
      <div id="logInBottom">
      <div className="logInAddText">Log In using Email and Password</div>
        <div id="logInQueries">
          <div>
            <input type="email" placeholder="Email*" className="logInInput" onChange={(e)=>{
              setemail(e.target.value);
            }}/>
          </div>
          <div>
            <input type="password" placeholder="Password*" className="logInInput" onChange={(e)=>{
              setpassword(e.target.value);
            }}/>
          </div>
        </div>
      </div> 
      <div>
        <button id="logInButton" onClick={(e)=>{
          e.preventDefault();
          // signUp();
        }}>Sign Up</button>
      </div>
      <div className="logInAddText1">
       <span className="logInAddText"> Forgot your password? </span><Link id="logInLink" to="/resetPass">Reset It Here</Link>
      </div>
      <div className="logInAddText1">
        <span className="logInAddText"> Don&apos;t have an account? </span><Link id="logInLink" to="/signUp">Sign Up</Link>
      </div>
      </div>
    </div>
  )
}

export default SignIn
