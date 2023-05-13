import React from 'react'
import s from '../details/details.module.css'
import c from '../../assets/css/custom.module.css'

function NoteSection() {
    return (
        <>
            <div className={`${s.descHeader} ${c.headerText} ${c.prefixed}`}>
                Note*
            </div>
            <p className={`${c.prefixed} ${c.paragraphText}`}>
                - Colour, variants and features may vary.<br />
                - All cars are in the best possible condition. <br />
                - If the selected car model is unavailable a similar car shall be sent over.<br />
                - Full payment is required upfront for confirmation of services and we do not accept anything in the form of cash. <br />
                - All disputes are subject to Karnataka jurisdiction only.<br />
                - BLCK shall not be responsible or liable for any loss or damage, however caused or suffered by the User arising out of the use of the Services or due to BLCK’s failure to provide the Services at all, for any reason whatsoever whether or not beyond the control of BLCK.
            </p>
        </>
    )
}

export default NoteSection