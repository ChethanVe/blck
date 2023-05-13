import React, { useContext } from 'react'
import s from './loginpage.module.css'
import c from '../../assets/css/custom.module.css'
import { useNavigate } from 'react-router-dom'
import { ContextLogin, UserId } from '../../helpers/context'
function LoginPage() {
  let nav = useNavigate()
  const [isLogged, setIsLogged] = useContext(ContextLogin)
  const [userId, setUserId] = useContext(UserId)
  // console.log(userId);
  // console.log(isLogged);
  return (
    <div className={`${s.logingSection}`}>
      <main className={`${s.container}`}>
        <div className={`${c.bigText} ${c.bold}`}>Login to your account</div>
        <div className={`${s.phoneInput}`}>
          <span className={`${c.smallText}`}>Enter mobile number</span>
          <div className={`${s.inputs}`}>
            <input className={`${s.input1}`} type="text" name="countryCode" value={'+91'} />
            <input className={`${s.input2}`} type="text" name="phone" placeholder='Mobile Number' />
          </div>
        </div>
        <div className={`${s.bottomSection}`}>
          <button className={`${c.primaryBtnFilled}`} onClick={()=>{nav('/homepage');setIsLogged(true)}}>Login</button>
          <div className={`${c.smallText} ${c.center}`} style={{cursor:'pointer'}} onClick={()=>{nav('/signup')}}>No account? Create one</div>
        </div>
      </main>
    </div>
  )
}

export default LoginPage