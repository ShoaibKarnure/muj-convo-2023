import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "../style/login.css";
import curve from "../assets/Vector-curve.png";
import img1 from "../assets/DSC_5584 1.png";
import img2 from "../assets/DSC_5995 1.png";
import img3 from "../assets/DSC_5580 1.png";
import img4 from "../assets/image 5.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Login = () => {
  const navigate = useNavigate();
  const [role, setRole] = useState("student");
  const [email, setEmail] = useState("");
  const [regNo, setRegNo] = useState();
  const [newRegNo, setNewRegNo] = useState();
  const [password, setPassword] = useState();
  const [register, setRegister] = useState(false);
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 760 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  const { token, setToken, isuserloggedin, setIsuserloggedin } = useAuth();
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (role == "student") {
    }
    try {
      const result = await axios.post(
        "https://us-central1-muj-convocation-2023.cloudfunctions.net/app/auth/login",
        { role: role, reg_no: regNo, password: password }
      );
      console.log(result);
      if (result.data.success) {
        const stringifieddata = JSON.stringify({
          loginstatus: true,
          clienttoken: result.data.token,
        });
        localStorage.setItem("login", stringifieddata);
      }
      setToken(result.data.token);
      setIsuserloggedin(true);
      navigate("/");
    } catch (e) {
      console.log(e);
    }
  };
  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    if (role == "student") {
    }
    try {
      const result = await axios.post(
        "https://us-central1-muj-convocation-2023.cloudfunctions.net/app/auth/register",
        { role: "student", reg_no: newRegNo }
      );
      console.log(result);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    localStorage.clear();
  });
  return (
    <div className='login-full'>
      <div className='carousel-login'>
        <Carousel
          responsive={responsive}
          showDots
          arrows={false}
          autoPlay
          autoPlaySpeed={3000}
          infinite
          pauseOnHover={false}
        >
          <div>
            <img src={img4} alt='' />
          </div>
          <div>
            <img src={img2} alt='' />
          </div>
          <div>
            <img src={img1} alt='' />
          </div>
          <div>
            <img src={img3} alt='' />
          </div>
        </Carousel>
      </div>

      <div className='login-txt'>
        <div className='all-txt'>
          <h1>Registrations are now open!</h1>
          <p>Your passwords will be sent on the official e-mail id. </p>
          {!register ? (
            <>
              <form>
                <div className='container'>
                  <select
                    name=''
                    id=''
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                  >
                    <option value='student'>Student</option>
                    <option value='department'>Department</option>
                  </select>
                </div>
                <div className='container'>
                  {role == "student" ? (
                    <input
                      type='number'
                      placeholder='Registration No'
                      value={regNo}
                      onChange={(e) => setRegNo(e.target.value)}
                    />
                  ) : (
                    <input
                      type='email'
                      placeholder='Email'
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  )}
                </div>
                <div className='container'>
                  <input
                    type='password'
                    placeholder='Password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className='container sub-btn-container'>
                  <button
                    className='btn-all login-btn'
                    type='submit'
                    onClick={handleSubmit}
                  >
                    Submit
                  </button>
                </div>
              </form>
              <p className='login-p' onClick={() => setRegister(true)}>
                Don’t have an account?
                <span> Register Now</span>
              </p>
            </>
          ) : (
            <>
              <form>
                <div className='container'>
                  <input
                    type='number'
                    placeholder='Registration No'
                    value={newRegNo}
                    onChange={(e) => setNewRegNo(e.target.value)}
                  />
                </div>

                <div className='container sub-btn-container'>
                  <button
                    className='btn-all login-btn'
                    type='submit'
                    onClick={handleRegisterSubmit}
                  >
                    Submit
                  </button>
                </div>
              </form>
              <p className='login-p' onClick={() => setRegister(false)}>
                Already have an account?
                <span> Login Now</span>
              </p>
            </>
          )}
        </div>
      </div>
      <div className='wh-curve'>
        <img src={curve} alt='' className='curve' />
      </div>
    </div>
  );
};

export default Login;
