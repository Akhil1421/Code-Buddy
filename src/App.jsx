import { BrowserRouter, Route, Routes } from "react-router-dom";
import PassReset from "./components/passReset/changePass.jsx";
import UserProfile from "./components/user/UserProfile/UserProfile";
import SignUp from "./components/user/SignUp/SignUp.jsx";
import SignIn from "./components/user/LogIn/SignIn.jsx";
import PassResetMail from "./components/passReset/passResetMail/PassResetMail.jsx";
import Sidebar from "./components/sidebar/sidebar.jsx";
import './UserProfileRoute.css';
import Editor from "./components/user/UserProfile/profilePic/Editor.jsx";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/resetPass" element={<PassReset></PassReset>} />
        <Route
          path="/resetPassMail"
          element={<PassResetMail></PassResetMail>}
        />
        <Route path="/userProfile" element={<div id="outerRight"><div id="outerRightBar"><Sidebar/></div><UserProfile className="OuterRight"></UserProfile></div>} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/sideBar" element={<Sidebar />} />
        <Route path="/imageEditor" element={<Editor/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
