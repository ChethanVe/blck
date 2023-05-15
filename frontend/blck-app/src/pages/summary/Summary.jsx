/* eslint-disable eqeqeq */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState, useContext } from 'react'
import s from './summary.module.css'
import c from '../../assets/css/custom.module.css'
import { indFormat } from '../../helpers/IndCurrencyFormat'
import axios from '../../helpers/Axios'
import feesData from '../../fees.json'
import { aws_bucket_url, json_server_url } from '../../helpers/base_url'
import { PrevUrl } from '../../helpers/context'
import { useLocation, useNavigate } from 'react-router-dom'
function Summary() {
  let nav = useNavigate()
  const [prevUrl, setPrevUrl] = useContext(PrevUrl)
  const [loaded, setLoaded] = useState(false)
  const [priceData, setPriceData] = useState()
  const [finalPrice, setFinalPrice] = useState()
  const [gst, setGst] = useState()
  const [Gstin, setGstin] = useState(false)
  const [agreedToTerms, setAgreedToTerms] = useState(false)
  const [user, setUser] = useState([])
  const [userData, setUserData] = useState([])
  let location = useLocation()
  useEffect(() => {

    axios.get(`${json_server_url}/login`)
    .then((res)=>{
      setUser(res.data[0])
      axios.get(`/getusers?id=${res.data[0].userId}`)
      .then((res)=>{setUserData(res.data.user[0])})
      .catch((err)=>{console.log(err);})
    })
    .catch((err)=>{console.log(err);})

    axios.get(`${json_server_url}/summary`)
      .then((res) => {
        setPriceData(res.data[0])
        let gst = parseInt(((
          res.data[0].totalPrice +
          (res.data[0].additionalKms * (res.data[0].totalPrice * feesData.fees[0].extraKms)) +
          (res.data[0].additionalHrs * (res.data[0].totalPrice * feesData.fees[0].extraHrs)) +
          res.data[0].allowance
        ) * feesData.fees[0].gstChauffeur));
        let price = parseInt(
          (
            res.data[0].totalPrice +
            (res.data[0].additionalKms * (res.data[0].totalPrice * feesData.fees[0].extraKms)) +
            (res.data[0].additionalHrs * (res.data[0].totalPrice * feesData.fees[0].extraHrs)) +
            res.data[0].allowance
          )
        )
        setGst(parseInt(gst))
        setFinalPrice(parseInt(
          gst + price
        ))
      })
      .then(() => { setLoaded(true) })
      .catch((err) => {
        console.log(err);
      })
  }, [])

  // console.log(priceData);
  // console.log(finalPrice);
  // console.log(calci);
  // console.log(data);
  // console.log(fees);
  console.log(user);
  console.log(userData);

  return (
    loaded ?
      <main className={s.summaryMain}>
        <div className={s.leftSide}>
          <div className={`${s.summarySection}`}>
            <div className={`${s.summaryHeader}`}>
              <span className={`${c.bigText}`}>Summary</span>
              <span className={`${c.smallText}`}>Booking details</span>
            </div>
            <div className={`${s.carDetailsSection}`}>
              <img src={`${aws_bucket_url}/${priceData.img}`} alt="carImage" />
              <div>
                <span className={`${c.bigText} ${s.bigText}`}>{priceData.name}</span>
                <span className={`${c.smallText}`}>{priceData.date || 'Mar 30, 2023'} &emsp; {priceData.time || '11:15AM'}</span>
                <span className={`${c.smallText}`}>Standard - 8Hr 80Kms</span>
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
                <span className={`${c.tinyText}`}>*   Any cancellation/modification to be informed only via email between 9am to 7pm on all working days and minimum 4 hours prior to the scheduled timer directly</span>
                <span className={`${c.tinyText}`}>*   Any cancellation under 24hrs of the scheduled time will attract 100% charges standard cancellation charges until last 24hrs of scheduled time will be 25%</span>
                <span className={`${c.tinyText}`}>*   Payment Gateway charges are not refunded on any platforms for any type of booking cancellations</span>
              </div>
            </div>
          </div>
        </div>
        <div className={`${s.rightSide}`}>
          <div className={`${s.rightSideHeader}`}>
            <span className={`${c.extraSmallText}`}>Price Breakup</span>
            <span className={`${c.mediumText}`}>Chauffeur Driven</span>
          </div>
          <div className={`${s.priceDetails}`}>
            <div>
              <span className={`${c.extraSmallText}`} style={{ color: 'gray' }}>Base Price</span>
              <span className={`${c.extraSmallText}`}>{indFormat.format(priceData.totalPrice)}</span>
            </div>
            <div>
              <span className={`${c.extraSmallText}`} style={{ color: 'gray' }}>Driver Allowance</span>
              <span className={`${c.extraSmallText}`}>{indFormat.format(priceData.allowance)}</span>
            </div>
            <div>
              <span className={`${c.extraSmallText}`} style={{ color: 'gray' }}>Extra Km ({priceData.additionalKms})</span>
              <span className={`${c.extraSmallText}`}>{indFormat.format(priceData.additionalKms * (priceData.totalPrice * feesData.fees[0].extraKms))}</span>
            </div>
            <div>
              <span className={`${c.extraSmallText}`} style={{ color: 'gray' }}>Extra Hr ({priceData.additionalHrs})</span>
              <span className={`${c.extraSmallText}`}>{indFormat.format(priceData.additionalHrs * (priceData.totalPrice * feesData.fees[0].extraHrs))}</span>
            </div>
            <div>
              <span className={`${c.extraSmallText}`} style={{ color: 'gray' }}>GST @12%</span>
              <span className={`${c.smallText}`} style={{ color: 'white' }}>
                {indFormat.format(gst)}
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
                {indFormat.format(finalPrice)}
              </span> : <>...</>}
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
                <input type="checkbox" onChange={() => { setAgreedToTerms(!agreedToTerms) }} />
              </label>
              <span className={c.extraSmallText}>I agree to the <span className={c.secondaryColor}><a target={'_blank'} href={'/terms-and-conditions'} rel="noreferrer">Terms & Conditions</a></span></span>
            </span>
            <div className={`${c.split} ${s.buttons}`}>
              <button className={c.primaryBtnFilled}
                onClick={() => {
                  if (!agreedToTerms) alert('Please agree with our terms and Conditions.');
                  else {
                    if (user.auth == true) {
                      alert('Payment Success!')
                    }
                    else {
                      setPrevUrl(location.pathname)
                      nav('/login')
                    }
                  }
                }}>Pay Now</button>
              <button className={c.primaryBtnRed}>Edit</button>
            </div>
          </div>
        </div>
      </main> : <>Loading...</>
  )
}
export default Summary