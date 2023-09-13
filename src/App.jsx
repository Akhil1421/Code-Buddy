import { BrowserRouter ,Route,Routes } from 'react-router-dom'
import PassReset from './components/passReset/changePass.jsx';
import UserProfile from './components/user/UserProfile/UserProfile';

function App() {

  return (
    <BrowserRouter>
      <Routes>
      <Route path="/resetPass" element={<PassReset></PassReset>}/>
      <Route path="/userProfile" element={<UserProfile></UserProfile>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
