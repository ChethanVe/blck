import React from 'react'
import { Link } from 'react-router-dom'
import s from './nav_foo.module.css'
import c from '../assets/custom.module.css'
function Navbar() {
    return (
        <>
            <nav className={`${s.navbar}`}>
                <div className={`${s.navElements}`}>
                    <div className={s.left}>
                        <span style={{ cursor: 'pointer' }}><img src={require('../../xd-imports/flag-btn.png')} alt="Flag btn" width={24} height={24} /></span>
                        <Link to={'/'}>Luxury Cars</Link>
                        <Link>Yachts/Jets/Copters</Link>
                    </div>
                    <div className={s.middle}>
                        <Link to={'/'}><img src={require('../../xd-imports/logo.png')} alt="Logo" width={80} height={40} /></Link>
                    </div>
                    <div className={s.right}>
                        <Link to={'/contactus'}>Contact Us</Link>
                        <span style={{ cursor: 'pointer' }}><img src={require('../../xd-imports/search-icon.png')} alt="Search Icon" width={24} height={24} /></span>
                        <div className={s.profileIcon}>
                        </div>
                        <button className={s.btn}><div className={s.locationImg}></div>Bangalore</button>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar