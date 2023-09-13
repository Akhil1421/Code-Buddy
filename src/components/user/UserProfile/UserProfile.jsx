import { useState } from "react";
import "./UserProfile.css";
import {
  MdHome,
  MdAccountCircle,
  MdSettings,
  MdOutlineNotificationsNone,
} from "react-icons/md";

const UserProfile = () => {
  const [userName, setuserName] = useState("Admin");
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
            <div id="cover">
              <img
                src="https://react-material-dashboard-laravel.creative-tim.com/static/media/bruce-mars.8a606c4a6dab54c9ceff.jpg"
                alt="profile"
                id="profile-pic"
              />
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
                type="text"
                className="fifty_percent"
                placeholder="New Password"
              ></input>
            </div>
            <div className="infoDiv">
              <div className="heading">Password Confirmation</div>
              <input
                type="text"
                placeholder="Confirm Password"
                className="fifty_percent"
              ></input>
              <div className="snip">
                In the demo version the email can not be updated
              </div>
            </div>
          </div>
          <div>
            <button id="third">Save Changes</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
