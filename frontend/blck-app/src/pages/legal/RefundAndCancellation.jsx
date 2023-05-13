import React from 'react'
import s from './refund.module.css'
function RefundAndCancellation() {
  return (
    <main className={s.main}>
        <div className={s.header}>
            <span>Refund And Cancellations</span>
        </div>
        <div className={s.content}>
            <section>
                <p>
                BLCK Luxury takes pride in operating a transparent process with its customers. Although we do not want you to cancel our service, in terms of any unavoidable circumstance, we can address any cancellation/modification request initiated through My Bookings on the website/app. 
                </p>
                <p>We request you to read our Refund/Cancellation Policy carefully before using or ordering any service provided by our website, www.blckluxury.com. Your cancellation/modification request will be entertained depending on our <b>Refund Policy</b> expressed below. </p>
                <ol>
                    <li>The BLCK Luxury team will only accept/reject your request only between 10 a.m. to 7 p.m. on all working days and a minimum of 4 hours prior to the scheduled time. </li>
                    <li>Any cancellation request in less than 4 hrs prior to reporting time shall be counted as a no-show.</li>
                </ol>
            </section>
            <section>
                <p>Customers can cancel their booking/trip at any time by contact with us on the basis of some charges applicable to the booking according to the conditions below:</p>
                <ol>
                    <li>24hrs prior to the start of the trip - 10% of the Total Booking Amount.</li>
                    <li>Between 4hrs - 24hrs prior to the start of the trip - 50% of the Total Booking Amount.</li>
                    <li>Less than 4hrs prior to the start of the trip - 100% of the Total Booking Amount.</li>
                </ol>
            </section>
            <section>
                <p className={s.subHeader}>Refund Policy</p>
                <p>Refunds are subject to further evaluation and post-deduction of applicable charges.</p>
                <ul>
                    <li>Payment Gateway (PG) charges are not refunded on any platform for any type of booking cancellation, as the sole discretion lies with the PG service provider.</li>
                    <li>In Self Driven cars, a Refund of the Security Deposit shall happen post invoicing and might take up to 7 working days to reflect in the customer's account.</li>
                    <li>Customers can also opt for a Credit note or Gift Card in place of a Refund for their future bookings with us.</li>
                    <li>Cancellations/modification for Yachts and Private jets is not permitted for whatsoever reason & in case of any cancellations, the entire booking amount shall be forfeited.</li>
                    <li>Cancellations/modification for customised booking is not permitted for whatsoever reason & in case of any cancellations, the entire booking amount shall be forfeited.</li>
                </ul>
            </section>
            <section>
            <p className={s.subHeader}>Safety Policy</p>
            <ul>
                <li>The safety of our vehicle, Chauffeur, and passengers is of utmost importance to us. If we feel the contractual terms or safety standards are compromised for whatsoever reason, we may retrieve the car and Chauffeur unconditionally.</li>
                <li>In case of any communal riots, natural disasters, or any other threats that our chauffeurs encounter during the trip, we may call back the car without prior notice to the customer.</li>
                <li>In case the car is used for any illegal activities, the customer will be completely responsible for the entire issue, including the compensation to us.</li>
                <li>Cars are issued only to those who contact and send details to BLCK. If, at any point in time, we find that the car is being driven by a different person or used for an unknown purpose, we can cancel the trip abruptly and recall the vehicle without any refunds.</li>
                <li>We reserve the right to refuse bookings or onboarding of customers without any explanation as per our safety and security standards, even if the booking has been received.</li>
            </ul>
            </section>
            <section>
            <p className={s.subHeader}>Other Policies</p>
            <ul>
                <li>These T&Cs are constantly updated, and the latest conditions are applied even if it is not available in the invoice at the time of booking.</li>
                <li>In Chauffeur driven cars, the maximum driving duration is for 12Hrs and 300 Km only [whichever occurs first]. We reserve the right to stop the journey as it is unhealthy for the Chauffeur and the car for long trips.</li>
                <li>Our chauffeurs must be treated with respect, dignity, and humility. Abusing them in any manner might lead to legal action against the customer</li>
                <li>The customer name used in the Booking invoice will finally be responsible for all T&Cs mentioned here to return the car in the given condition.</li>
                <li>Any damages caused or violation of traffic rules may result in a profuse delay in refunds.</li>
            </ul>
            </section>
            <section>
                <p>In cases of passenger default, such as undue delays, BLCK Luxury will not be liable for any refunds. The BLCK Luxury management reserves the authority to revise the Terms and Conditions without advance notice.</p>
                <p>Disputes are subject to the laws and regulations of India and to the jurisdiction of Bangalore. </p>
                <p>The requested refund, as applicable according to the cancellation/refund policy, will be processed to the user's account through the same mode of payment within 7-10 business days. </p>
            </section>
        </div>
    </main>
  )
}

export default RefundAndCancellation