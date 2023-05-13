import React, { useEffect, useState } from 'react'
import s from './summary.module.css'
import c from '../../assets/css/custom.module.css'
import { indFormat } from '../../helpers/IndCurrencyFormat'
import axios from 'axios'
import feesData from '../../fees.json'
import { aws_bucket_url, api_url, json_server_url } from '../../helpers/base_url'

function SummaryOutstation() {
  const [loaded, setLoaded] = useState(false)
  const [priceData, setPriceData] = useState({})
  const [Gstin, setGstin] = useState(false)
  const [totalPrice, setTotalPrice] = useState()
  useEffect(() => {
    async function gettingData() {
      await axios.get(`${json_server_url}/outStation`)
        .then((res) => {
          setPriceData(res.data[0])
          setLoaded(true)
          setTotalPrice(parseInt(
            (
              res.data[0].price +
              res.data[0].allowance +
              (res.data[0].extraKm * (res.data[0].stdPrice * feesData.fees[0].extraKms))
            ) +
            (
              res.data[0].price +
              res.data[0].allowance +
              (res.data[0].extraKm * (res.data[0].stdPrice * feesData.fees[0].extraKms))
            ) * feesData.fees[0].gstChauffeur
          ))
        })
        .catch((err) => {
          console.log(err);
        })
    }
    gettingData();
  }, [])

  // console.log(clean);
  // console.log(data);
  // console.log(priceData);
  console.log(totalPrice);

  return (
    <main className={s.summaryMain}>
      <div className={s.leftSide}>
        <div className={`${s.summarySection}`}>
          <div className={`${s.summaryHeader}`}>
            <span className={`${c.bigText}`}>Summary</span>
            <span className={`${c.smallText}`}>Booking details</span>
          </div>
          {loaded ?
            <div className={`${s.carDetailsSection}`}>
              <img src={`${aws_bucket_url}/${priceData.img}`} alt="carImage" />
              <div>
                <span className={`${c.bigText} ${s.bigText}`}>{priceData.name}</span>
                <span className={`${c.smallText}`}>{priceData.startDate || 'Mar 30, 2023'}{' | ' + priceData.startTime}&emsp;{priceData.endDate || '11:15AM'}{' | ' + priceData.endTime}</span>
                <span className={`${c.smallText}`}>Outstation 300Km - 12AM to 12AM</span>
                <span className={`${c.smallText}`}>{priceData.days}&nbsp;{priceData.days < 2 ? 'day' : 'days'}</span>
              </div>
            </div> : <></>}
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
            <textarea style={{ border: '1px solid blue' }} name="specialInstructions" cols="30" rows="3" placeholder='Enter Travel Itinerary details'></textarea>
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
          <span className={`${c.mediumText}`}>Chauffeur Driven</span>
        </div>
        <div className={`${s.priceDetails}`}>
          {<div>
            <span className={`${c.extraSmallText}`} style={{ color: 'gray' }}>Price ({priceData.days} {priceData.days < 2 ? ' day' : ' days'})</span>
            {loaded ? <span className={`${c.extraSmallText}`}>{indFormat.format(priceData.price)}</span> : <span className={c.tinyText}>Loading...</span>}
          </div>}
          <div>
            <span className={`${c.extraSmallText}`} style={{ color: 'gray' }}>Extra Km ({priceData.extraKm})</span>
            {loaded ? <span className={`${c.extraSmallText}`}>{indFormat.format(priceData.stdPrice * (priceData.extraKm * feesData.fees[0].extraKms))}</span> : <span className={c.tinyText}>Loading...</span>}
          </div>
          <div>
            <span className={`${c.extraSmallText}`} style={{ color: 'gray' }}>Driver Allowance ({priceData.days})</span>
            {loaded ? <span className={`${c.extraSmallText}`}>{indFormat.format(priceData.allowance)}</span> : <span className={c.tinyText}>Loading...</span>}
          </div>
          <div>
            <span className={`${c.extraSmallText}`} style={{ color: 'gray' }}>GST @12%</span>
            {loaded ? <span className={`${c.tinyText}`}>
              {indFormat.format(
                (priceData.price +
                  priceData.allowance +
                  (priceData.extraKm * (priceData.stdPrice * feesData.fees[0].extraKms))) *
                feesData.fees[0].gstChauffeur
              )}
            </span> : <span className={c.tinyText}>Loading...</span>}
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
              {indFormat.format(
                (
                  priceData.price +
                  priceData.allowance +
                  (priceData.extraKm * (priceData.stdPrice * feesData.fees[0].extraKms))
                ) +
                (
                  priceData.price +
                  priceData.allowance +
                  (priceData.extraKm * (priceData.stdPrice * feesData.fees[0].extraKms))
                ) * feesData.fees[0].gstChauffeur
              )}
            </span> : <span className={c.extrSmallText}>Loading...</span>}
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
export default SummaryOutstation