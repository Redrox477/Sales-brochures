import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '../signuplogin/FormContainer.css';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { setUsername, setEmail, setPassword } from '../redux/action'; // Make sure to provide the correct path for your actions

const UserOptions = () => {
  const username = useSelector((state) => state.username);
  const email = useSelector((state) => state.email);
  const password = useSelector((state) => state.password);
  const dispatch = useDispatch();

  const authHeader = `Basic ${btoa(`${username}:${password}`)}`;
  const header = {
    'Authorization': authHeader,
    'Content-Type': 'application/json',
  };

  const [isLoginFormVisible, setIsLoginFormVisible] = useState(true);
  const [isSignupFormVisible, setIsSignupFormVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const signupButton = document.getElementById("signup-button");
    const loginButton = document.getElementById("signin-button");
    const userForms = document.getElementById("user-options-form");

    const handleSignupClick = () => {
      userForms.classList.remove("bounceRight");
      userForms.classList.add("bounceLeft");
    };

    const handleLoginClick = () => {
      userForms.classList.remove("bounceLeft");
      userForms.classList.add("bounceRight");
    };

    signupButton.addEventListener("click", handleSignupClick);
    loginButton.addEventListener("click", handleLoginClick);

    return () => {
      signupButton.removeEventListener("click", handleSignupClick);
      loginButton.removeEventListener("click", handleLoginClick);
    };
  }, []);

  const apiUrl = 'http://localhost:8080/users'; // Base URL for user-related endpoints
  const signupUrl = `${apiUrl}/signup`;
  const loginUrl = `${apiUrl}/login`;

  const toggleForms = () => {
    setIsLoginFormVisible(!isLoginFormVisible);
    setIsSignupFormVisible(!isSignupFormVisible);
  };

  const handleSignupSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = {
      fullName: formData.get('name'),
      email: formData.get('email'),
      password: formData.get('password')
    };

    try {
      const response = await axios.post(signupUrl, data ,{ headers: header });
      console.log(response.data); // Handle the response data, e.g., display a success message
      toast.success('Signup Successful!');
    } catch (error) {
      console.error(error); // Handle errors, e.g., display an error message
      toast.error('Signup Failed!');
    }
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = {
      email: formData.get('email'),
      password: formData.get('password')
    };

    try {
      const response = await axios.post(loginUrl, data ,{headers: header });
      console.log(response.data); // Handle the response data, e.g., store authentication token
      toast.success('Login Successful!');
      setTimeout(() => {
        navigate('/dash');
      }, 1500);
    } catch (error) {
      console.error(error); // Handle errors, e.g., display an error message
      toast.error('Login Failed!');
    }
  };

  return (
    <section className="user" id="logsig">
      <div className="user-options">
        <div className="user-options-text">
          <div className="user-options-unregistered">
            <h2 className="user-unregis-title">Don't have an account?</h2>
            <p className="user-unregis-text">
              Learn how to register and create a blu account so you can start shopping today!
            </p>
            <a className="user-unregis-button" id="signup-button" onClick={toggleForms} href="#">
              Sign up
            </a>
          </div>

          <div className="user-options-registered">
            <h2 className="user-regis-title">Already have an account?</h2>
            <p className="user-regis-text">Learn how to sign in and start shopping today!</p>
            <a className="user-regis-button" id="signin-button" onClick={toggleForms} href="#">
              Login
            </a>
          </div>
        </div>
        <ToastContainer />
        <div className="user-options-form" id="user-options-form">
          {isLoginFormVisible && (
            <div className="user-form-login">
              <form className="forms-form" onSubmit={handleLoginSubmit}>
                <fieldset className="forms-fieldset">
                  <legend className="forms-legend">Login</legend>
                  <div className="forms-group">
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      className="forms-group-input"
                      value={email} // Use the email value from the Redux state
                      onChange={(e) => dispatch(setEmail(e.target.value))} // Dispatch action to update email
                      required
                    />
                  </div>
                  <div className="forms-group">
                    <input
                      type="password"
                      name="password"
                      placeholder="Password"
                      className="forms-group-input"
                      pattern=".{8,}"
                      value={password} // Use the password value from the Redux state
                      onChange={(e) => dispatch(setPassword(e.target.value))} // Dispatch action to update password
                      required
                      title="8 characters minimum"
                    />
                  </div>
                  <div className="forms-buttons">
                  <button type="button" className="forms-buttons-forgot">
                    Forgot your password?
                  </button>
                </div>
                <div className="forms-buttons">
                  <input type="submit" className="forms-buttons-submit" value={'LOGIN'} />
                </div>
                </fieldset>
                {/* ... */}
              </form>
            </div>
          )}

          {isSignupFormVisible && (
            <div className="user-form-signup">
              <form className="forms-form" onSubmit={handleSignupSubmit}>
                <fieldset className="forms-fieldset">
                  <legend className="forms-legend">Sign Up</legend>
                  <div className="forms-group">
                    <input
                      type="text"
                      name="name"
                      placeholder="Full Name"
                      className="forms-group-input"
                      value={username} // Use the username value from the Redux state
                      onChange={(e) => dispatch(setUsername(e.target.value))} // Dispatch action to update username
                      required
                    />
                  </div>
                  <div className="forms-group">
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      className="forms-group-input"
                      value={email} // Use the email value from the Redux state
                      onChange={(e) => dispatch(setEmail(e.target.value))} // Dispatch action to update email
                      required
                    />
                  </div>
                  <div className="forms-group">
                    <input
                      type="password"
                      name="password"
                      placeholder="Password"
                      className="forms-group-input"
                      pattern=".{8,}"
                      value={password} // Use the password value from the Redux state
                      onChange={(e) => dispatch(setPassword(e.target.value))} // Dispatch action to update password
                      required
                      title="8 characters minimum"
                    />
                  </div>
                  <div className="forms-buttons">
                  <input type="submit" value="Sign Up" className="forms-buttons-submit" />
                </div>
                </fieldset>
                {/* ... */}
              </form>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default UserOptions;
