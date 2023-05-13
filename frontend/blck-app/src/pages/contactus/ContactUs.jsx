import React from 'react'
import s from './contactus.module.css'
import c from '../../assets/css/custom.module.css'
function ContactUs() {
  return (
    <main className={s.contactus}>
      <div className={s.contactusElements}>
        <div className={s.banner}>
          <span>Contact Us</span>
        </div>
        <div className={s.divide}>
          <div className={`${s.personalInfoSection}`}>
            <span className={`${s.bigText}`}>Get in touch!</span>
            <span className={`${s.mediumText}`}>Let us know more about you!</span>
            {/* <div className={`${s.infoForm}`}> */}
            <div className={`${s.split}`}>
              <input type="text" name='firstName' placeholder='First Name' />
              <input type="text" name='mobileNumber' placeholder='Mobile Number' />
            </div>
            <input type="text" name='email' placeholder='Email' />
            <input type="text" name='city' placeholder='City' />
            <textarea name="message" cols="30" rows="3" placeholder='Your Message'></textarea>
            <button className={`${c.primaryBtnFilled} ${s.selectDateBtn}`}>Send Message</button>
            {/* </div> */}
          </div>
          <div className={s.rightSide}>
            <span className={`${s.bigText}`}>Contact Information</span>
            <div className={s.cInfo}>
              <div className={s.phone}>
                <span>Phone: </span>
                <p><a href="tel:+919900085611">+91 9900085611</a></p>
                {/* <p>+91 9900085611</p>  */}
              </div>
              <div className={s.email}>
                <span>E-mail: </span>
                <p><a href="mailto:sales@blck.luxury">sales@blck.luxury</a></p>
                {/* <p>sales@blck.luxury</p> */}
              </div>
              <div className={s.address}>
                <span>Address: </span>
                <p>4405/A, A Ramanna Street, Devaraja Mohalla, Mysuru, Karnataka - 570001</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default ContactUs