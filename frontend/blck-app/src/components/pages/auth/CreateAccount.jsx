import React from 'react'
import s from './signup.module.css'
import c from '../assets/custom.module.css'
function CreateAccount() {
  return (
    <div className={`${s.signupSection}`}>
    <main className={`${s.container}`}>
      <div className={`${c.bigText} ${c.bold}`}>Create a New Account</div>
      <div className={`${s.detailsInput}`}>
        <span className={`${c.smallText}`}>Enter your details</span>
        <div className={`${s.inputs}`}>
          <div className={`${s.userDetails}`}>
            <input className={`${s.usernameInput}`} type="text" placeholder='Username' />
            <div className={`${s.splitInputs}`}>
              <input type="text" placeholder='First Name' />
              <input type="text" placeholder='Last Name' />
            </div>
            <div className={`${s.splitInputs}`}>
              <input type="text" placeholder='Password' />
              <input type="text" placeholder='Confirm Password' />
            </div>
            <input type="text" placeholder='Email' />
          </div>
          <div className={`${s.phone}`}>
            <input className={`${s.countryCode}`} type="text" name="countryCode" value={'+91'} />
            <input className={`${s.phoneInput}`} type="text" name="phone" placeholder='Mobile Number' />
          </div>
        </div>
      </div>
      <div className={`${s.bottomSection}`}>
        <div className={`${c.extraSmallText}`}>By continuing I accept the <span className={`${c.secondaryColor} ${c.bolder}`}>Terms & Conditions</span></div>
        <button className={`${c.primaryBtnFilled}`}>Get In Now</button>
        <div className={`${c.extraSmallText} ${c.end}`}><u>Already have an Account?</u></div>
      </div>
    </main>
  </div>
  )
}

export default CreateAccount