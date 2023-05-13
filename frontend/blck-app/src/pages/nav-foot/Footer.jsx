import React from 'react'
import { Link } from 'react-router-dom'
import s from './nav_foo.module.css'
function Footer() {
    return (
        <footer className={s.footer}>
            <div className={s.fooElements}>
                <div className={`${s.section} ${s.logoSection}`}>
                    <img src={require('../../assets/images/logo/logo-big.png')} alt="" />
                    <p>Copyright &#169; 2023</p>
                </div>
                <div className={`${s.section} ${s.companySection}`}>
                    <span>Company</span>
                    <ul>
                        <li>About</li>
                        <li>Careers</li>
                        <li>Partner With Us</li>
                        <li>Feedback</li>
                        <li>Partnerships</li>
                        <li>News</li>
                    </ul>
                </div>
                <div className={`${s.section} ${s.helpSection}`}>
                    <span>Help & Legal</span>
                    <ul>
                        <li>Contact Us</li>
                        <li><Link to={'/terms-and-conditions'}>Terms & Conditions</Link></li>
                        <li><Link to={'/refund-and-cancellations'}>Refund & Cancellation Policy</Link></li>
                        <li><Link to={'/privacy-policy'}>Privacy Policy</Link></li>
                        <li>Cookies</li>
                    </ul>
                </div>
                <div className={`${s.section} ${s.followSection}`}>
                    <span>Follow Us</span>
                    <ul>
                        <li>LinkedIn</li>
                        <li>Facebook</li>
                        <li>Instagram</li>
                        <li>Twitter</li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer