/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable eqeqeq */
/* eslint-disable no-mixed-operators */
/* eslint-disable no-unused-vars */
import React, { useRef, useState } from 'react'
import s from './airportModal.module.css'
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router";
import c from '../../../assets/css/custom.module.css'
import { indFormat } from '../../../helpers/IndCurrencyFormat';
import axios from '../../../helpers/Axios';
import feesData from '../../../fees.json'
import dayjs from 'dayjs';
import { MobileTimePicker } from '@mui/x-date-pickers/MobileTimePicker';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import { TextField } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { aws_bucket_url, json_server_url } from '../../../helpers/base_url';

function AirportDateModal({ setIsModalOpen, carName, selectedPackage, useType, details }) {
    const darkTheme = createTheme({
        palette: {
            mode: 'dark',
        },
    });

    let nav = useNavigate()
    let modal = useRef()
    let leadTime = useRef()
    const location = useLocation();
    const [fees, setFees] = useState(feesData.fees[0])
    const [data, setData] = useState({
        "date": "",
        "time": "",
        "flightNo": "",
        "pickupDrop": "",
        "price": details.package.price,
        "deposit": details.package.deposit,
        "driverAllowance": 0,
        "toll": details.package.toll_fee,
        "parking": details.package.parking_fee,
        "name": details.car.car_brand + '-' + details.car.car_model,
        "carId": details.car.id,
        "img": details.car.car_image
    })
    const [timeStamp, setTimeStamp] = useState({
        lead4hrs: ''
    })
    const [clean, setClean] = useState([])
    const [refDate, setRefDate] = useState(dayjs())
    const [newDate, setNewDate] = useState(dayjs().$H > 19 ? dayjs().add(1, 'day') : dayjs())
    const [newTime, setNewTime] = useState(dayjs().add(4, 'hour'))
    const [early, setEarly] = useState(false)
    const [lead, setLead] = useState(false)

    useEffect(() => {
        window.scrollTo(0, 0);
        try {
            modal.current.classList.remove(`${s.slideOutTop}`);
            modal.current.classList.add(`${s.slideInTop}`);
        } catch (error) { }

        // document.body.style.overflow = 'hidden';

        axios.get(`${json_server_url}/airport`)
            .then((res) => {
                setClean(res.data)
            })

        return () => {
            document.body.style.overflowY = 'scroll';
        }
    }, [location]);

    useEffect(() => {
        // adding lead time of 4 hrs to timestamp
        setTimeStamp({ ...timeStamp, lead4hrs: refDate.add(4, 'hour') });
        //-----
        //setting driver allowance
        if (newTime.$H >= 13 && newTime.$H <= 24 || newTime.$H >= 0 && newTime.$H < 8) {
            setData({ ...data, allowance: details.package.price * fees.driverAllowance });
        }
        else { setData({ ...data, allowance: 0 }); }
        //-----
        //handling early morning bookings
        if (dayjs().$D + 1 == newDate.$D && newTime.$H > 0 && newTime.$H < 7) {
            if (dayjs().$H >= 22 && dayjs().$H < 24 && newTime.$H > 0 && newTime.$H < 7) {
                leadTime.current.innerHTML = 'Early morning booking not possible! select time after 7 AM.'
            }
            setData({ ...data, time: '' })
        }
        else { leadTime.current.innerHTML = '' }
        //-----
 
    }, [newDate, newTime])

    function postdata() {
        for (let i = 0; i < clean.length; i++) {
            try {
                axios.delete(`${json_server_url}/summary/${clean[i].id}`)
            } catch (error) {
                console.log('not deleted');
            }
        }
        if (data.date == '') alert('Enter Date!')
        else if (newDate.$D < dayjs().$D) alert("Selected Date Cannot be less than today's")
        else if (data.time == '') alert('Enter Time!')
        else if (lead) alert("Give 4 Hrs Lead Time")
        else if (early) alert("Early morning booking is not possible after 10 PM.")
        else {
            axios.post(`${json_server_url}/summary`, data)
                .then(() => { nav(`/summary/${details.car.id}`) })
                .catch((err) => { console.log(err); })
        }
    }

    return (
        <div className={s.mainSection}>
            <div ref={modal} className={s.modalSection}>
                <div className={s.topSection}>
                    <div className={`${c.prefixed} ${s.modalHeading}`}>
                        <u>{useType}</u>
                        <div className={`${s.closeBtn}`}
                            onClick={() => {
                                try {
                                    modal.current.classList.remove(`${s.slideInTop}`)
                                    modal.current.classList.add(`${s.slideOutTop}`)
                                } catch (error) { }
                                setTimeout(() => {
                                    setIsModalOpen(false);
                                }, 200)
                            }}>
                            <img src={require('../../../assets/images/icons/close-btn-white.png')} alt="Close-btn" width={48} height={48} />
                        </div>
                    </div>
                    <div className={`${s.modalLandingImage}`}>
                        {/* <img src={require(`../../../assets/images/carimages/${details.car.car_image}`)} alt="Car-Image" /> */}
                        <img src={`${aws_bucket_url}/${details.car.car_image}`} alt="Car-Image" />

                    </div>
                </div>
                <div className={s.bottomSection}>
                    <div className={s.carInfoDetails}>
                        <div className={s.nameInfo}>
                            <span className={`${c.bigText} ${c.b500}`}>{carName}</span>
                            <span className={c.smallText}>{selectedPackage || 'Airport Pickup/Drop'}</span>
                        </div>
                        <div className={`${s.priceInfo} ${c.secondaryColor}`}>{
                            indFormat.format(
                                data.price +
                                data.driverAllowance +
                                data.parking +
                                data.toll)
                        }</div>
                    </div>
                    <div className={s.dateTimeSection}>
                    <div>
                            <span className={c.smallText}>Select Date</span>
                            <ThemeProvider theme={darkTheme}>
                                <MobileDatePicker
                                    value={newDate}
                                    format="DD-MM-YYYY"
                                    disablePast
                                    minDate={dayjs().$H >19 ? dayjs().add(1,'day'):dayjs()}
                                    renderInput={(params) => <TextField{...params} fullWidth />}
                                    onChange={(newValue) => {
                                        setNewDate(newValue);
                                        setData({ ...data, date: dayjs(newValue).$d.toLocaleDateString().split('/').join('-') })
                                        if(newValue.$D == dayjs().$D && newTime < dayjs().add(4, 'hour')){
                                            setNewTime(dayjs().add(4, 'hour'))
                                        }
                                    }}
                                />
                            </ThemeProvider>
                        </div>
                        <div>
                            <span className={c.smallText}>Select Time</span>
                            <ThemeProvider theme={darkTheme}>
                                <MobileTimePicker
                                    value={newTime}
                                    disablePast={newDate <= dayjs() ? true : false}
                                    minutesStep={15}
                                    minTime={newDate <= dayjs() ? timeStamp.lead4hrs : false}
                                    ampm={false}
                                    renderInput={(params) => <TextField{...params} fullWidth />}
                                    onChange={(newValue) => {
                                        setNewTime(newValue);
                                        setData({ ...data, time: dayjs(newValue).$d.toTimeString().toString().split(' ')[0] })
                                    }} />
                            </ThemeProvider>
                            <div ref={leadTime} className={`${c.tinyText} ${c.secondaryColor}`}></div>
                        </div>
                        <div className={s.radioInput}>
                            <input type="radio" name='airportPickupDrop' value={'Pickup'}
                                onChange={(e) => {
                                    setData({ ...data, pickupDrop: e.target.value })
                                }} style={{ height: '20px', width: '20px' }} />
                            <label htmlFor="airportPickupDrop">Airport Pickup</label>
                        </div>
                        <div className={s.radioInput}>
                            <input type="radio" name='airportPickupDrop' value={'Drop'}
                                onChange={(e) => {
                                    setData({ ...data, pickupDrop: e.target.value })
                                }} style={{ height: '20px', width: '20px' }} />
                            <label htmlFor="airportPickupDrop">Airport Drop</label>
                        </div>
                    </div>
                    <div className={s.flightNumberInput}>
                        <input type="text" name='flightNumber' onChange={(e) => { setData({ ...data, flightNo: e.target.value }) }} placeholder='Enter Flight Number' />
                    </div>
                    <div className={s.btnSection}>
                        <div className={c.extraSmallText}>* Driver Batta applicable for rides between <span className={c.secondaryColor}>9 pm – 7 am</span>.</div>
                        <di className={c.extraSmallText}>* Distance and Time is calculated from garage to garage.</di>
                        <div>
                            <button className={`${c.primaryBtnFilled}`} onClick={() => {
                                if (data.date === '') alert('Enter date!')
                                else if (data.time === '') alert('Enter time!')
                                else {
                                    localStorage.setItem('price', JSON.stringify(data));
                                    postdata()
                                }
                            }}>Continue</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AirportDateModal