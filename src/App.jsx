import { BrowserRouter ,Route,Routes } from 'react-router-dom'
import PassReset from './components/passReset/changePass.jsx';
import UserProfile from './components/user/UserProfile/UserProfile';
import SignUp from './components/user/SignUp/SignUp.jsx';
import SignIn from './components/user/LogIn/SignIn.jsx';
import PassResetMail from './components/passReset/passResetMail/PassResetMail.jsx';

function App() {

  return (
    <BrowserRouter>
      <Routes>
      <Route path="/resetPass" element={<PassReset></PassReset>}/>
      <Route path="/resetPassMail" element={<PassResetMail></PassResetMail>}/>
      <Route path="/userProfile" element={<UserProfile></UserProfile>}/>
      <Route path="/signUp" element={<SignUp/>}/>
      <Route path="/signIn" element={<SignIn/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
