import React from 'react'
import s from '../details/details.module.css'
import c from '../../assets/css/custom.module.css'
function PleaseReadSection() {
    return (
        <>
            <div className={`${s.descHeader} ${c.headerText} ${c.prefixed}`}>
                Please Read*
            </div>
            <ol className={`${c.prefixed} ${c.paragraphText}`}>
                <li>The Distance and Time are calculated from garage to garage.</li>
                <li>Tolls, taxes and parking fees are as per actuals & additional to the above prices, payable by customers at the end of the trip.</li>
                <li>All cars carry comprehensive insurance & 24/7 Roadside assistance is provided</li>
                <li>Refund & Cancellation as per the policy. </li>
                <li>Any extra charges over and above the package limit need to be paid at the end of the trip. </li>
                <li>Fuel to be borne by the customer for all self drive bookings. </li>
            </ol>
        </>
    )
}

export default PleaseReadSection