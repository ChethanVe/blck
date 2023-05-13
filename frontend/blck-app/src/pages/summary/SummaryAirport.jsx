import React, { useEffect, useState } from 'react'
import s from './summary.module.css'
import c from '../../assets/css/custom.module.css'
import { indFormat } from '../../helpers/IndCurrencyFormat'
import axios from 'axios'
import feesData from '../../fees.json'
import { aws_bucket_url, api_url, json_server_url } from '../../helpers/base_url'

function SummaryAirport() {
  const [loaded, setLoaded] = useState(false)
  const [priceData, setPriceData] = useState({})
  const [totalPrice, setTotalPrice] = useState()
  const [Gstin, setGstin] = useState(false)
  useEffect(() => {
    axios.get(`${json_server_url}/airport`)
      .then((res) => {
        setPriceData(res.data[0])
        setTotalPrice(parseInt(
          (
            (
              res.data[0].price +
              res.data[0].driverAllowance +
              res.data[0].parking +
              res.data[0].toll
            ) +
            (
              res.data[0].price +
              res.data[0].driverAllowance +
              res.data[0].parking +
              res.data[0].toll
            ) * feesData.fees[0].gstChauffeur
          )
        ))
      })
      .then(() => { setLoaded(true) })
      .catch((err) => { console.log(err); })
  }, [])

  // console.log(clean);
  // console.log(priceData);
  // console.log(totalPrice);
  // console.log(data);

  return (
    <main className={s.summaryMain}>
      <div className={s.leftSide}>
        <div className={`${s.summarySection}`}>
          <div className={`${s.summaryHeader}`}>
            <span className={`${c.bigText}`}>Summary</span>
            <span className={`${c.smallText}`}>Booking details</span>
          </div>
          <div className={`${s.carDetailsSection}`}>
            {loaded ? <img src={`${aws_bucket_url}/${priceData.img}`} alt="carImage" /> : <></>}
            <div>
              <span className={`${c.bigText} ${s.bigText}`}>{priceData.name}</span>
              <span className={`${c.smallText}`}>Airport - {priceData.pickupDrop} Date : {priceData.date} (YYYY-MM-DD)</span>
              <span className={`${c.smallText}`}>Airport - {priceData.pickupDrop} Time : {priceData.time} (HH-MM)</span>
            </div>
          </div>
        </div>
        <div className={`${s.personalInfoSection}`}>
          <span className={`${c.bigText}`}>Personal Information</span>
          <div className={`${s.infoForm}`}>
            <div className={`${c.split}`}>
              <input type="text" name='firstName' placeholder='First Name' />
              <input type="text" name='mobileNumber' placeholder='Mobile Number' />
            </div>
            <input type="text" name='email' placeholder='Email' />
            <textarea name="pickUpAddress" cols="30" rows="3" placeholder='Pick up Address'></textarea>
            <textarea name="dropOffAddress" cols="30" rows="3" placeholder='Drop Off Address (Optional)'></textarea>
            <textarea name="specialInstructions" cols="30" rows="3" placeholder='Mention any special instructions.'></textarea>
            <div className={`${s.paragraphSection}`}>
              <span className={`${c.tinyText}`}>*   Any cancellation/modification to be informed only via email between 10am to 7pm on all working days and minimum 4 hours prior to the scheduled timer directly</span>
              <span className={`${c.tinyText}`}>*   Any cancellation under 24hrs of the scheduled time will attract 100% charges standard cancellation charges until last 24hrs of scheduled time will be 25%</span>
              <span className={`${c.tinyText}`}>*   Payment Gateway charges are not refunded on any platforms for any type of booking cancellations</span>
            </div>
          </div>
        </div>
      </div>
      <div className={`${s.rightSide}`}>
        <div className={`${s.rightSideHeader}`}>
          <span className={`${c.tinyText}`}>Price Breakup</span>
          <span className={`${c.mediumText}`}>Chauffeur Driven - Airport Pickup / Drop</span>
        </div>
        <div className={`${s.priceDetails}`}>
          <div>
            <span className={`${c.extraSmallText}`} style={{ color: 'gray' }}>Base Price</span>
            <span className={`${c.extraSmallText}`}>{indFormat.format(priceData.price)}</span>
          </div>
          <div>
            <span className={`${c.extraSmallText}`} style={{ color: 'gray' }}>Driver Allowance</span>
            <span className={`${c.extraSmallText}`}>{indFormat.format(priceData.price * feesData.fees[0].driverAllowance)}</span>
          </div>
          <div>
            <span className={`${c.extraSmallText}`} style={{ color: 'gray' }}>Parking Fee</span>
            <span className={`${c.extraSmallText}`}>{indFormat.format(priceData.parking)}</span>
          </div>
          <div>
            <span className={`${c.extraSmallText}`} style={{ color: 'gray' }}>Toll Fee</span>
            <span className={`${c.extraSmallText}`}>{indFormat.format(priceData.toll)}</span>
          </div>
          <div>
            <span className={`${c.extraSmallText}`} style={{ color: 'gray' }}>GST @12%</span>
            <span className={`${c.extraSmallText}`}>
              {indFormat.format(
                (
                  priceData.price +
                  priceData.driverAllowance +
                  priceData.parking +
                  priceData.toll
                ) * feesData.fees[0].gstChauffeur
              )}
            </span>
          </div>
        </div>
        <div className={`${s.totalPrice}`}>
          <div>
            <input id={s.totalPriceInput} type="text" placeholder='Enter Coupon Code' />
            <button className={c.primaryBtnFilled}>Apply</button>
          </div>
          <div className={s.total}>
            <span className={c.bigText}>Total</span>
            {loaded ? <span className={`${c.bigText} ${c.secondaryColor}`}>
              {indFormat.format(totalPrice)}
            </span> : <>Loading...</>}
          </div>
        </div>
        <div className={s.readSection}>
          <span>*   Convenience charges will be added based on mode of payment</span>
          <span>*   Wedding package will attract additional charges</span>
          <span>*   In case of further additional Hours / Kms you can pay your chauffeur directly</span>
          <span>*   GST applicable on all our services, if you have a GSTIN you can quote the same below.</span>
        </div>
        <div className={s.payButtonSection}>
          <span className={s.gstSection}>
            <label>
              <input type="checkbox" onChange={(e) => { setGstin(!Gstin) }} />
            </label>
            <div className={c.extraSmallText}>GSTIN</div>
          </span>
          {Gstin ?
            <div>
              <input id={s.totalPriceInput} style={{ height: '40px' }} type="text" name='gstNumber' placeholder='Enter GST Number' />
              <input id={s.totalPriceInput} style={{ height: '40px' }} type="text" name='companyName' placeholder='Enter Company Name' />
            </div> : <></>}
          <span>
            <label>
              <input type="checkbox" />
            </label>
            <span className={c.extraSmallText}>I agree to the <span className={c.secondaryColor}>Terms & Conditions</span></span>
          </span>
          <div className={`${c.split} ${s.buttons}`}>
            <button className={c.primaryBtnFilled}>Pay Now</button>
            <button className={c.primaryBtnRed}>Edit</button>
          </div>
        </div>
      </div>
    </main>
  )
}
export default SummaryAirport