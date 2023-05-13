import React, { useRef } from 'react'
import s from './selectDate.module.css'
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router";
import c from '../../assets/custom.module.css'

function SelectDate({ setIsModalOpen }) {
    // let nav = useNavigate()
    let nav = useNavigate()
    let modal = useRef()
    const location = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
        try {
            modal.current.classList.remove(`${s.slideOutTop}`);
            modal.current.classList.add(`${s.slideInTop}`);
        } catch (error) {}
    }, [location]);
    
    return (
        <div className={s.mainSection}>
            <div ref={modal} className={s.modalSection}>
                <div className={s.topSection}>
                    <div className={`${c.prefixed} ${s.modalHeading}`}>
                        <u>Chauffeur Driven</u>
                        <div className={`${s.closeBtn}`}
                            onClick={() => {
                                try {
                                    modal.current.classList.remove(`${s.slideInTop}`)
                                    modal.current.classList.add(`${s.slideOutTop}`)
                                } catch (error) {}
                                setTimeout(()=>{
                                    setIsModalOpen(false);
                                },200)
                            }}>
                            <img src={require('../../../xd-imports/close-btn-white.png')} alt="Close-btn" width={48} height={48} />
                        </div>
                    </div>
                    <div className={`${s.modalLandingImage}`}>
                        <img src={require('../../../images/black-premium-city-crossover-white-background-3d-rendering.png')} alt="" />
                    </div>
                </div>
                <div className={s.bottomSection}>
                    <div className={s.carInfoDetails}>
                        <div className={s.nameInfo}>
                            <span className={`${c.bigText} ${c.b500}`}>Kia Seltos</span>
                            <span className={c.smallText}>Standard - 8 Hr 80Kms</span>
                        </div>
                        <div className={`${s.priceInfo} ${c.secondaryColor}`}> 
                            ₹10,245
                        </div>
                    </div>
                    <div className={s.dateTimeSection}>
                        <div>
                            <input type="date" />
                        </div>
                        <div>
                            <input type="time" />
                        </div>
                        <div>
                            <input type="text" placeholder='Add Additional Kms?' />
                            <span className={c.tinyText}>Extra Km ₹302</span>
                        </div>
                        <div>
                            <input type="text" placeholder='Add Additional hrs?'/>
                            <span className={c.tinyText}>Extra Hr ₹3,024</span>
                        </div>
                    </div>
                    <div className={s.btnSection}>
                        <span className={c.extraSmallText}>* Driver Batta applicable for rides between <span className={c.secondaryColor}>9 pm – 6 am</span></span>
                        <div>
                            <button className={`${c.primaryBtnFilled}`} onClick={()=>{
                                nav('/summary/1')
                            }}>Continue</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SelectDate