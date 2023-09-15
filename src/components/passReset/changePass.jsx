import { useState } from 'react';
import './changePass.css'
import axios from 'axios';
import { useSearchParams } from 'react-router-dom';
import toast from 'react-hot-toast';
import isPasswordStrong from '../../data/isPasswordStrong';
import { isJwt } from './../../data/isPasswordStrong';


const ChangePass = () => {

  const [queryParameters] = useSearchParams();
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = async (e) => {
    try {
      if (newPassword !== confirmPassword) {
        e.preventDefault();
        toast.error("Passwords doesn't  match!");
        return;
      }
      if (!isPasswordStrong(newPassword)) {
        e.preventDefault();
        toast.error("Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one number!");
        return;
      }
      e.preventDefault();
      const response = await axios.post('http://localhost:5000/auth/changePass', { user_id: queryParameters.get('Token'), newPassword, }, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });
      setConfirmPassword('');
      setNewPassword('');
      toast.success(response.data.msg);
    } catch (err) {
      toast.error(err?.response?.data?.msg);
    }
  }
  return  isJwt(queryParameters.get('Token')) && (
      <div className="container">
        <div>
          <div id="resetPassImgCont">
            <img id="resetPassImg" src="https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="background-img" />
          </div>
        </div>
        <div className="card">
          <div className="form">
            <div id="resetPass">Reset Password</div>
            <input className='resetPassIn' value={newPassword} placeholder="New Password" onChange={(e) => { setNewPassword(e.target.value) }} type="password" name="newPassword" id="newPassword"></input>
            <input className="resetPassIn" value={confirmPassword} placeholder="Confirm Password" onChange={(e) => { setConfirmPassword(e.target.value) }} type="password" name="confirmPassword" id="confirmPassword" /><br />
            <button onClick={handleSubmit} className='reset-button' type="submit">Submit</button>
          </div>
        </div>
      </div>)
}

export default ChangePass;

