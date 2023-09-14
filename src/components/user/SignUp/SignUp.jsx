import { useState } from "react";
import "./SignUp.css"; 
import {FaFacebookSquare,FaGithub,FaGoogle} from "react-icons/fa" 
import { Link } from "react-router-dom";

const SignUp = () => {
  const [firstName, setfirstName] = useState('');
  const [lastName, setlastName] = useState('');
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const [confirmPassword, setconfirmPassword] = useState('');
  return (
    <div id="signUpOuter">
      <div>
        <div id="imgcont">
          <img id="img" src="https://images.pexels.com/photos/1525041/pexels-photo-1525041.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="background-img" />
        </div>
      </div>
      <div id="signUpCard">
        <div id="joinUs">
          <div className="signUpText">Join Us Today</div>
          <div id="icnCont">
            <FaFacebookSquare className="signUpIcons"/>
            <FaGithub className="signUpIcons"/>
            <FaGoogle className="signUpIcons"/>
          </div>
          <div className="signUpText">OR</div>
        </div>
      <div id="signUpBottom">
      <div className="signUpAddText">Sign Up using Email and Password</div>
        <div id="signUpQueries">
          <div>
            <input type="text" placeholder="First Name*" className="signUpInput" onChange={(e)=>{
              setfirstName(e.target.value);
            }}/>
          </div>
          <div>
            <input type="text" placeholder="Last Name" className="signUpInput" onChange={(e)=>{
              setlastName(e.target.value);
            }}/>
          </div>
          <div>
            <input type="email" placeholder="Email*" className="signUpInput" onChange={(e)=>{
              setemail(e.target.value);
            }}/>
          </div>
          <div>
            <input type="password" placeholder="Password*" className="signUpInput" onChange={(e)=>{
              setpassword(e.target.value);
            }}/>
          </div>
          <div>
            <input type="password" placeholder="Confirm Password*"className="signUpInput" onChange={(e)=>{
              setconfirmPassword(e.target.value);
            }}/>
          </div>
        </div>
      </div> 
      <div>
        <button id="signUpButton" onClick={(e)=>{
          e.preventDefault();
          // signUp();
        }}>Sign Up</button>
      </div>
      <div >
       <span className="signUpAddText"> Already have an account? </span><Link id="signInLink" to="/signIn">Sign In</Link>
      </div>
      </div>
    </div>
  )
}

export default SignUp
