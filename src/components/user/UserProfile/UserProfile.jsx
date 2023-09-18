import { useRef, useState } from "react";
import "./UserProfile.css";
import {
  MdHome,
  MdAccountCircle,
  MdSettings,
  MdOutlineNotificationsNone,
} from "react-icons/md";
import isPasswordStrong from "../../../data/isPasswordStrong";
import toast from "react-hot-toast";
import axios from "axios";
import { useSearchParams } from "react-router-dom";
import {FaUserEdit} from "react-icons/fa";
import Editor from "./profilePic/Editor";

const sendResponse = async (
  Password,
  queryParameters1,
  setPassword,
  setPassword2
) => {
  const response = await axios.post(
    "http://localhost:5000/auth/changePass",
    { user_id: queryParameters1.get("Token"), Password },
    {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    }
  );
  toast.success(response.data.msg);
  setPassword("");
  setPassword2("");
};

const clickHandler = (
  Password,
  Password2,
  setPassword,
  setPassword2,
  queryParameters1
) => {
  Password === Password2
    ? (!isPasswordStrong(Password) &&
        toast.error(
          "Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one number!"
        )) ||
      sendResponse(Password, queryParameters1, setPassword, setPassword2)
    : toast.error("Passwords do not match!");
};

const UserProfile = () => {
  const [userName, setuserName] = useState("Admin");
  const [Password, setPassword] = useState("");
  const [Password2, setPassword2] = useState("");
  const [queryParameters1] = useSearchParams();
  const [isProfileHovered, setisProfileHovered] = useState(false);
  const [isBackgroundHovered, setisBackgroundHovered] = useState(false);
  const [isEditor,setIsEditor]=useState(false);
  
    // Function to toggle the hover state
    const handleHover = () => {
      setisProfileHovered(!isProfileHovered);
    }; 
  return (
    <div id="outer">
      <div>
        <div id="header">
          <div id="profile">
            <div>
              <MdHome className="icon bold"></MdHome>
              <div className="icon"> / Profile</div>
            </div>
            <div className="bold">User Profile</div>
          </div>
          <div id="right">
            <input id="search" type="text" placeholder="Search here" />
            <MdAccountCircle className="icons"></MdAccountCircle>
            <MdSettings className="icons"></MdSettings>
            <MdOutlineNotificationsNone className="icons"></MdOutlineNotificationsNone>
            <button id="logout">Log Out</button>
          </div>
        </div>
        <div id="background-pic">
          <img
            src="https://images.pexels.com/photos/547125/pexels-photo-547125.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="profile"
            id="background"
          ></img>
        </div>
        <div id="content">
          <div id="first">
            <div id="cover" onClick={()=>{
              setIsEditor(true);
            }}>
              <img
                src="https://react-material-dashboard-laravel.creative-tim.com/static/media/bruce-mars.8a606c4a6dab54c9ceff.jpg"
                alt="profile"
                id="profile-pic"
                onMouseEnter={handleHover}
                onMouseLeave={handleHover}
              />
              <FaUserEdit id="picEditIcon"  style={{zIndex:'2',color:'white',scale:'2',position:'absolute',marginTop:'28px',marginLeft:'-41px',visibility: isProfileHovered ? 'visible' : 'hidden'}} ></FaUserEdit>
            </div>
            <div id="first-right">
              <div className="bold">{userName}</div>
              <div>CEO / Co-Founder</div>
            </div>
          </div>
          <div className="info">
            <div className="infoDiv">
              <div className="heading">Name</div>
              <input
                type="text"
                className="fifty_percent"
                value={userName}
                onChange={(e) => {
                  setuserName(e.target.value);
                }}
              ></input>
            </div>
            <div className="infoDiv">
              <div className="heading">Email</div>
              <input
                type="text"
                placeholder="admin@jsonapi.com"
                value="admin@jsonapi.com"
                onChange={() => {}}
                className="fifty_percent"
              ></input>
              <div className="snip">
                In the demo version the email can not be updated
              </div>
            </div>
          </div>
          <div className="info">
            <div className="infoDiv">
              <div className="heading">New Password</div>
              <input
                type="password"
                className="fifty_percent"
                placeholder="New Password"
                value={Password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              ></input>
            </div>
            <div className="infoDiv">
              <div className="heading">Password Confirmation</div>
              <input
                type="password"
                placeholder="Confirm Password"
                className="fifty_percent"
                value={Password2}
                onChange={(e) => {
                  setPassword2(e.target.value);
                }}
              ></input>
              <div className="snip">
                In the demo version the email can not be updated
              </div>
            </div>
          </div>
          <div>
            <button
              id="third"
              onClick={() => {
                clickHandler(
                  Password,
                  Password2,
                  setPassword,
                  setPassword2,
                  queryParameters1
                );
              }}
            >
              Save Changes
            </button>
          </div>
        </div>
      </div>
            <Editor/>
    </div>
  );
};

export default UserProfile;
