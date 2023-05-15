import React, { useEffect, useState } from 'react'
import s from './summary.module.css'
import c from '../../assets/css/custom.module.css'
import { indFormat } from '../../helpers/IndCurrencyFormat'
import axios from 'axios'
import feesData from '../../fees.json'
import { aws_bucket_url, json_server_url } from '../../helpers/base_url'

function SummarySelfDrive() {

  const [loaded, setLoaded] = useState(false)
  const [priceData, setPriceData] = useState()
  const [totalPrice, setTotalPrice] = useState()
  const [gst, setGst] = useState()
  const [Gstin, setGstin] = useState(false)

  useEffect(() => {
    axios.get(`${json_server_url}/selfDrive`)
      .then((res) => {
        setPriceData(res.data[0]);
        setGst(
          (res.data[0].price * (res.data[0].days <= 0 ? 1 : res.data[0].days) +
            (res.data[0].extraKm * (res.data[0].basePrice * feesData.fees[0].extraKms))) *
          feesData.fees[0].gstSelfDrive
        )
        setTotalPrice(parseInt(
          (
            res.data[0].price * (res.data[0].days <= 0 ? 1 : res.data[0].days) +
            (res.data[0].extraKm * (res.data[0].basePrice * feesData.fees[0].extraKms))
          ) +
          (
            res.data[0].price * (res.data[0].days <= 0 ? 1 : res.data[0].days) +
            (res.data[0].extraKm * (res.data[0].basePrice * feesData.fees[0].extraKms))
          ) * feesData.fees[0].gstSelfDrive +
          res.data[0].deposit
        )
        )
      })
      .then(() => { setLoaded(true) })
      .catch((err) => { console.log(err); })
  }, [])

  // console.log(clean);
  // console.log(priceData);
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
            {/* {loaded?<img src={require(`../../assets/images/carimages/${priceData.img}`)} alt="carImage" />:<>...</>} */}
            {loaded ? <img src={`${aws_bucket_url}/${priceData.img}`} alt="carImage" /> : <>...</>}

            <div>
              {loaded ? <span className={`${c.bigText} ${s.bigText}`}>{priceData.name}</span> : <>...</>}
              {loaded ? <span className={`${c.smallText}`}>{'From'}&emsp;{priceData.startDate || 'Mar 30, 2023'} &emsp; {priceData.startTime || '11:15AM'}</span> : <>...</>}
              {loaded ? <span className={`${c.smallText}`}>{'To'}&emsp;&emsp;&nbsp;{priceData.endDate || 'Mar 30, 2023'} &emsp; {priceData.endTime || '11:15AM'}</span> : <>...</>}
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
            <div className={`${s.reqDocuments}`}>
              <span className={`${c.extraSmallText}`}>Required Documents</span>
              <div className={`${s.split}`}>
                <div className={`${s.uploadSection}`}>
                  <div>
                    <span className={`${c.smallText}`}>Driver's License</span>
                    <span className={`${c.smallText} ${c.secondaryColor}`}>Add License</span>
                  </div>
                  <label className={s.fileUpload}>
                    <input type="file" />
                    <span>
                      <img src={require('../../assets/images/icons/camera-icon.png')} alt="cameraIcon" width={30} height={30} />
                    </span>
                  </label>
                </div>
                <div className={`${s.uploadSection}`}>
                  <div>
                    <span className={`${c.smallText}`}>Aadhar Card</span>
                    <span className={`${c.smallText} ${c.secondaryColor}`}>Aadhar Card</span>
                  </div>
                  <label className={s.fileUpload}>
                    <input type="file" />
                    <span>
                      <img src={require('../../assets/images/icons/camera-icon.png')} alt="cameraIcon" width={30} height={30} />
                    </span>
                  </label>
                </div>
              </div>
            </div>
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
          <span className={`${c.mediumText}`}>Self Drive</span>
        </div>
        <div className={`${s.priceDetails}`}>
          <div>
            <span className={`${c.extraSmallText}`} style={{ color: 'gray' }}>Price</span>
            {loaded ? <span className={`${c.extraSmallText}`}>{indFormat.format(priceData.price * (priceData.days <= 0 ? 1 : priceData.days))}</span> : <>...</>}
          </div>
          <div>
            {loaded ? <span className={`${c.extraSmallText}`} style={{ color: 'gray' }}>Extra Km ({priceData.extraKm})</span> : <>...</>}
            {loaded ? <span className={`${c.extraSmallText}`}>{indFormat.format(priceData.extraKm * (priceData.price * feesData.fees[0].extraKms))}</span> : <>...</>}
          </div>
          <div>
            <span className={`${c.extraSmallText}`} style={{ color: 'gray' }}>GST @18%</span>
            {loaded ? <span className={`${c.extraSmallText}`}>
              {indFormat.format(
                gst
              )}
            </span> : <>...</>}
          </div>
          <div>
            <span className={`${c.extraSmallText}`} style={{ color: 'gray' }}>Refundable Deposit</span>
            {loaded ? <span className={`${c.extraSmallText}`}>{indFormat.format(priceData.deposit)}</span> : <>...</>}
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
                totalPrice
              )}
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
export default SummarySelfDrive