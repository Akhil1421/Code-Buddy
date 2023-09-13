import { BrowserRouter ,Route,Routes } from 'react-router-dom'
import PassReset from './components/passReset/changePass.jsx';
import UserProfile from './components/user/UserProfile/UserProfile'

function App() {

  return (
    <>
     <UserProfile></UserProfile>
    </>
    <BrowserRouter>
      <Routes>
      <Route path="/resetPass" element={<PassReset></PassReset>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
