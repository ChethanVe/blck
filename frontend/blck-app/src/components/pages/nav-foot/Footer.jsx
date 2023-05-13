import React from 'react'
import s from './nav_foo.module.css'
function Footer() {
    return (
        <footer className={s.footer}>
            <div className={s.fooElements}>
                <div className={`${s.section} ${s.logoSection}`}>
                    <img src={require('../../xd-imports/logo.png')} alt="" />
                    <p>Copyright &#169; 2023</p>
                </div>
                <div className={`${s.section} ${s.companySection}`}>
                    <span>Company</span>
                    <ul>
                        <li>About</li>
                        <li>Gallery</li>
                        <li>Careers</li>
                        <li>Catalog</li>
                        <li>Feedback</li>
                    </ul>
                </div>
                <div className={`${s.section} ${s.helpSection}`}>
                    <span>Help</span>
                    <ul>
                        <li>Customer Support</li>
                        <li>Contact</li>
                    </ul>
                </div>
                <div className={`${s.section} ${s.legalSection}`}>
                    <span>Legal</span>
                    <ul>
                        <li>Terms</li>
                        <li>Privacy</li>
                        <li>Cookies</li>
                    </ul>
                </div>
                <div className={`${s.section} ${s.followSection}`}>
                    <span>Follow Us</span>
                    <ul>
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