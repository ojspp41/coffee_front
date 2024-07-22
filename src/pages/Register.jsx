import './Register.css';
import { useState } from 'react';
import { publicRequest } from '../hooks/requestMethod';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loginSuccess } from '../redux/userSlice';

const Register = () => {
  const [user, setUser] = useState({
    username: '',
    email: '',
    password: ''
  });

  const [matchedPassword, setMatchedPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    if (matchedPassword !== user.password) {
      setError('Passwords do not match');
      return;
    }

    try {
      const res = await publicRequest.post('/auth/register', user);
      dispatch(loginSuccess(res.data));
      navigate('/');
      setError(null); // Clear any previous errors
    } catch (err) {
      setError('Registration failed. Please try again.');
    }
  };

  return (
    <div className="register">
      <div className="registerWrapper">
        <h1 className="registerTitle">Create an account</h1>
        <form className="registerForm" onSubmit={handleRegister}>
          <input
            type="text"
            className="registerInput"
            placeholder="Username"
            name="username"
            onChange={handleChange}
          />
          <input
            type="text"
            className="registerInput"
            placeholder="Email"
            name="email"
            onChange={handleChange}
          />
          <input
            type="password"
            className="registerInput"
            placeholder="Password"
            name="password"
            onChange={handleChange}
          />
          <input
            type="password"
            className="registerInput"
            placeholder="Password Again"
            onChange={(e) => setMatchedPassword(e.target.value)}
          />
          {error && <span style={{ color: "crimson" }}>Password should be matched ... </span>}
          <span className="agreement">
            By creating an account, I consent to the processing of my personal data in accordance with the <b>Privacy Policy</b>
          </span>
          <button className="registerBtn" type="submit">Create</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
