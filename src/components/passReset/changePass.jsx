import { useState } from 'react';
import './changePass.css'
import axios from 'axios';
import { useSearchParams } from 'react-router-dom';
import toast from 'react-hot-toast';



const ChangePass = () => {
  const [queryParameters] = useSearchParams();
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const isPasswordStrong = (password) => {
    const strongPasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
    return strongPasswordRegex.test(password);
  };
  const handleSubmit = async (e) => {
    try {
      if (newPassword !== confirmPassword) {
        e.preventDefault();
        toast.error("Passwords doesn't not match!");
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
  return (
    <div className="container">
      <div className="card">
        <div className="form">
          <h1>Reset Password</h1>
          <label htmlFor="newPassword">New Password:</label><br />
          <input value={newPassword} onChange={(e) => { setNewPassword(e.target.value) }} type="password" name="newPassword" id="newPassword"></input><br />
          <label htmlFor="text">Confirm Password:</label><br />
          <input value={confirmPassword} onChange={(e) => { setConfirmPassword(e.target.value) }} type="password" name="confirmPassword" id="confirmPassword" /><br />
          <button onClick={handleSubmit} className='reset-button' type="submit">Submit</button>
        </div>
      </div>
    </div>
  )
}

export default ChangePass