import React, { useContext, useEffect, useState } from 'react'
import s from './loginpage.module.css'
import c from '../../assets/css/custom.module.css'
import { auth } from './firebase.config';
// import PhoneInput from "react-phone-input-2";
import OtpInput from "otp-input-react";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { ToastContainer, toast } from 'react-toastify';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { ContextLogin, UserId, PrevUrl } from '../../helpers/context'
import axios from '../../helpers/Axios';
import { json_server_url } from '../../helpers/base_url';

function LoginPage() {
  const [isLogged, setIsLogged] = useContext(ContextLogin)
  const [userId, setUserId] = useContext(UserId)
  const [prevUrl, setPrevUrl] = useContext(PrevUrl)
  const [data, setData] = useState({
    userId:0,
    auth:false,
  })
  //useStates
  const [showotp, setShowotp] = useState(false)
  const [otp, setOtp] = useState("");
  const [ph, setPh] = useState("");
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [clean, setClean] = useState([])

  let nav = useNavigate()

  function onCaptchVerify() {
    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier(
        "recaptcha-container",
        {
          size: "invisible",
          callback: (response) => {
            onSignup();
          },
          "expired-callback": () => { },
        },
        auth
      );
    }
  }


  const [userData, setUserData] = useState(null)
  console.log(ph);
  console.log(userData);
  console.log(data);
  // useEffect(() => {
  //   axios.get(`/users?phone=${ph}`)
  //     .then((res) => { setUserData(res.data); })
  //     .catch((err) => { console.log(err); })
  // }, [ph])

  function onSignup() {
    setLoading(true);
    onCaptchVerify();

    const appVerifier = window.recaptchaVerifier;

    // const formatPh = +917676240515;
    const formatPh = "+" + "91" + ph;
    console.log(formatPh)
    console.log(otp)


    signInWithPhoneNumber(auth, formatPh, appVerifier)
      .then((confirmationResult) => {
        window.confirmationResult = confirmationResult;
        setLoading(false);
        // setShowOTP(true);

      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }

  useEffect(()=>{
    axios.get(`${json_server_url}/login`)
    .then((res) => {setClean(res.data)})
    .catch((err)=>{console.log(err);})
  },[])

  function postLoginData() {
    for (let i = 0; i < clean.length; i++) {
      try {
        axios.delete(`${json_server_url}/login/${clean[i].id}`)
      } catch (error) {
        console.log('not deleted');
      }
    }
    axios.post(`${json_server_url}/login`, {...data, auth:true})
      .then(() => { nav(prevUrl) })
      .catch((err) => { console.log(err); })
  }

  function onOTPVerify() {

    setLoading(true);
    console.log("clicked otpverify")
    console.log(otp)

    window.confirmationResult

      .confirm(otp)
      .then(async (res) => {
        setUser(res.user);
        setLoading(false);
        console.log("otp verified")
        setIsLogged(true)
        setUserId(userData.id)
        sessionStorage.setItem('auth', true)
        postLoginData();
        // nav(prevUrl)
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
        console.log("failed")
        alert('Wrong OTP!')
      });
  }

  const showToastMessageempty = () => {
    toast.error("Please Fill All Details", {
      position: toast.POSITION.TOP_CENTER,
      toastId: "1",
    });
  };

  return (
    <div className={`${s.logingSection}`}>
      <main className={`${s.container}`}>
        <div className={`${c.bigText} ${c.bold}`}>Login to your account</div>
        <div className={`${s.phoneInput}`}>
          <span className={`${c.smallText}`}>Enter mobile number</span>
          <div className={`${s.inputs}`}>
            <input className={`${s.input1}`} value={'+91'} />
            <input value={ph} onChange={(e) => {
              setPh(e.target.value);
              axios.get(`/getusers?phone=${e.target.value}`)
                .then((res) => { setUserData(res.data.user[0]); setData({...data, userId:res.data.user[0].id}) })
                .catch((err) => { console.log(err); })
            }} country={"in"} className={`${s.input2}`} type="text" name="phone" placeholder='Enter Mobile Number' />
          </div>
        </div>
        <div className={`${s.bottomSection}`}>
          <button onClick={(e) => {
            ;
            if (ph === "") {
              alert("Enter Phone Number Pls")
              showToastMessageempty()

            } else {
              setShowotp(!showotp)
              setTimeout(() => {
                onSignup()
              }, 2000)

            }
          }} className={`${c.primaryBtnFilled}`}>Send OTP</button>
          {
            showotp ?
              <div className={`${s.otpinputs}`}>
                <OtpInput defaultValue={""} value={otp} onChange={setOtp} type="text" name="otp" OTPLength={6} otpType="number" />
              </div>
              : <></>
          }
          <div
            id="recaptcha-container"
            className="justify-center flex"
          >
            {/* <!-- Recaptcha Widget will be rendered here --> */}
          </div>
          <button onClick={onOTPVerify} className={`${c.primaryBtnFilled}`}>Login</button>
          <div className={`${c.smallText} ${c.center}`} onClick={() => { nav('/signup') }} style={{ cursor: 'pointer' }}><u>No account? Create one</u></div>
        </div>
      </main>
    </div>
  )
}

export default LoginPage