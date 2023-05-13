import React, { useContext, useReducer, useRef, useState } from 'react'
import s from './outStationModal.module.css'
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router";
import c from '../../../assets/css/custom.module.css'
import { indFormat } from '../../../helpers/IndCurrencyFormat';
import axios from 'axios';
import feesData from '../../../fees.json'
import { Context, ContextLogin } from '../../../helpers/context'
import dayjs from 'dayjs';
import { MobileTimePicker } from '@mui/x-date-pickers/MobileTimePicker';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import { TextField } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { aws_bucket_url, api_url, json_server_url } from '../../../helpers/base_url';

function OutStationDateModal({ setIsModalOpen, carName, selectedPackage, rent, useType, thisPackage, details }) {
    const darkTheme = createTheme({
        palette: {
            mode: 'dark',
        },
    });
    let nav = useNavigate()
    const location = useContext(Context)
    let modal = useRef()
    let startTimeRef = useRef()
    let startDateRef = useRef()
    let endTimeRef = useRef()
    let endDateRef = useRef()
    let showDays = useRef()
    let priceRef = useRef()
    const loc = useLocation();
    const [fees, setFees] = useState(feesData.fees[0])
    const [clean, setClean] = useState([])
    const [startLead, setStartLead] = useState(false)
    const [endLead, setEndLead] = useState(false)
    const [goaDate, setGoaDate] = useState()
    const [data, setData] = useState({
        startDate: dayjs().$d.toLocaleDateString().split('/').join('-'),
        endDate: dayjs().$d.toLocaleDateString().split('/').join('-'),
        startTime: dayjs().$d.toTimeString().toString().split(' ')[0],
        endTime: dayjs().$d.toTimeString().toString().split(' ')[0],
        extraKm: 0,
        deposit: details.package.outstation[0].deposit,
        price: details.package.outstation[0].price,
        allowance: details.package.standard[0].price * fees.driverAllowance,
        basePrice: details.package.outstation[0].price,
        stdPrice: details.package.standard[0].price,
        days: '',
        name: details.car.car_brand + '-' + details.car.car_model,
        carId: details.car.id,
        img: details.car.car_image
    })
    const [newDate, setNewDate] = useState(dayjs().$H >19?dayjs().add(1,'day'):dayjs())
    const [newEndDate, setNewEndDate] = useState(dayjs().$H >19?dayjs().add(1,'day'):dayjs())
    const [newTime, setNewTime] = useState(dayjs().$H >19?dayjs():dayjs().add(4, 'hour'))
    const [newEndTime, setNewEndTime] = useState(dayjs().$H >19?dayjs():dayjs().add(4, 'hour'))
    const [timeStamp, setTimeStamp] = useState({
        lead4hrs: ''
    })
    const [daysCount, setDaysCount] = useState()

    useEffect(() => {
        window.scrollTo(0, 0);
        try {
            modal.current.classList.remove(`${s.slideOutTop}`);
            modal.current.classList.add(`${s.slideInTop}`);
        } catch (error) { }

        axios.get(`${json_server_url}/outStation`)
            .then((res) => { setClean(res.data) })
            .catch((err) => { console.log(err); })

        return () => {
            document.body.style.overflowY = 'scroll';
        }
    }, [loc]);

    useEffect(() => {
        setDaysCount(parseInt(newEndDate.diff(newDate, 'day')) + 1)
        console.log(parseInt(newEndDate.$D - newDate.$D) + 1);
        //-----
        //setting driver allowance
        if (newTime.$H >= 13 && newTime.$H <= 24 || newTime.$H >= 0 && newTime.$H < 8) {
            setData({ ...data, allowance: details.package.standard[0].price * fees.driverAllowance });
        }
        else { setData({ ...data, allowance: 0 }); }
        //-----
        
        //handling early morning bookings
        if(dayjs().$D+1 == newDate.$D && newTime.$H>0 && newTime.$H <7){
            if(dayjs().$H >=22 && dayjs().$H <24 && newTime.$H>0 && newTime.$H <7){
                    startTimeRef.current.innerHTML = 'Early morning booking not possible! select time after 7 AM.'
            }
            setData({...data, time:''})
        } 
        else{startTimeRef.current.innerHTML = ''}
        //-----

        if (newDate.$D == newEndDate.$D && newTime > newEndTime) endTimeRef.current.innerHTML = "End Time Cannot be less than Start time"
        else endTimeRef.current.innerHTML = ""
        if (newDate > newEndDate) {
            showDays.current.style = "visibility:hidden";
            priceRef.current.style = "visibility:hidden";

        }
        else {
            showDays.current.style = "visibility:visible";
            priceRef.current.style = "visibility:visible";
        }

        //-----
    }, [newDate, newTime, newEndDate, newEndTime, daysCount, data.startDate, data.endDate, data.startTime, data.endTime])

    useEffect(() => {
        setData({ ...data, days: daysCount, price: details.package.outstation[0].price * daysCount })
    }, [daysCount])

    function postdata() {
        if (data.startDate == '') startDateRef.current.innerHTML = 'Enter Start Date!'
        else if (data.endDate == '') endDateRef.current.innerHTML = 'Enter End Date!'
        else if (data.startTime == '') startTimeRef.current.innerHTML = 'Enter Start Time'
        else if (data.endTime == '') endTimeRef.current.innerHTML = 'Enter End Time'
        else if (startLead) startTimeRef.current.innerHTML = 'Lead Time Of 4 Hrs is needed!'
        else if (endLead) startTimeRef.current.innerHTML = 'Lead Time Of 4 Hrs is needed!'
        else if (newTime > newEndTime) endTimeRef.current.innerHTML = "End Time Cannot be less than Start time"
        else {
            for (let i = 0; i < clean.length; i++) {
                try {
                    axios.delete(`${json_server_url}/outStation/${clean[i].id}`)
                        .then((res) => { })
                        .catch((err) => { console.log(err) })
                } catch (error) { console.log('Not deleted!'); }
            }

            try {
                axios.post(`${json_server_url}/outStation`, data)
                    .then((res) => { nav(`/summary-outstation/${details.car.id}`) })
                    .catch((err) => { console.log(err) })
            } catch (error) { console.log('Not Sent!'); }
        }
    }
    // console.log(newDate);
    // console.log(newEndDate);
    // console.log(newEndDate.$D-newDate.$D+1);
    // console.log(details);
    console.log(data);


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
                                setTimeout(() => { setIsModalOpen(false); }, 200)
                            }}>
                            <img src={require('../../../assets/images/icons/close-btn-white.png')} alt="Close-btn" width={48} height={48} />
                        </div>
                    </div>
                    <div className={`${s.modalLandingImage}`}>
                        <img src={`${aws_bucket_url}/${details.car.car_image}`} alt="" />
                    </div>
                </div>
                <div className={s.bottomSection}>
                    <div className={s.carInfoDetails}>
                        <div className={s.nameInfo}>
                            <span className={`${c.bigText} ${c.b500}`}>{carName}</span>
                            <span className={c.smallText}>{selectedPackage || 'Standard - 8 Hr 80Kms'}</span>
                            <span ref={showDays} className={`${c.secondaryColor}`}>{daysCount} {daysCount > 1 ? 'days' : 'day'}</span>
                        </div>
                        <div ref={priceRef} className={`${s.priceInfo} ${c.secondaryColor}`}>
                            {indFormat.format(
                                ((details.package.outstation[0].price +
                                    (details.package.standard[0].price * fees.driverAllowance)) * daysCount) +
                                (data.extraKm * (details.package.standard[0].price * fees.extraKms))
                            )}
                        </div>
                    </div>
                    <div className={s.dateTimeSection}>
                        <div>
                            <span className={c.smallText}>Select Start Date</span>
                            <ThemeProvider theme={darkTheme}>
                                <MobileDatePicker
                                    value={newDate}
                                    format="DD-MM-YYYY"
                                    disablePast
                                    minDate={dayjs().$H >19 ? dayjs().add(1,'day'):dayjs()}
                                    renderInput={(params) => <TextField{...params} fullWidth />}
                                    onChange={(newValue) => {
                                        setNewDate(newValue);
                                        setData({ ...data, startDate: dayjs(newValue).$d.toLocaleDateString().split('/').join('-') })
                                        if (newValue.$D == dayjs().$D && newTime < dayjs().add(4, 'hour')) {
                                            setNewTime(dayjs().add(4, 'hour'))
                                        }
                                    }}
                                />
                            </ThemeProvider>
                            <div ref={startDateRef} className={`${c.tinyText} ${c.secondaryColor}`}></div>
                        </div>
                        <div>
                            <span className={c.smallText}>Select Start Time</span>
                            <ThemeProvider theme={darkTheme}>
                                <MobileTimePicker
                                    value={newTime}
                                    disablePast={newDate <= dayjs() ? true : false}
                                    minutesStep={15}
                                    minTime={newDate <= dayjs() ? dayjs().add(4, 'hour') : false}
                                    ampm={false}
                                    renderInput={(params) => <TextField{...params} fullWidth />}
                                    onChange={(newValue) => {
                                        setNewTime(newValue);
                                        setData({ ...data, startTime: dayjs(newValue).$d.toTimeString().toString().split(' ')[0] })
                                    }} />
                            </ThemeProvider>
                            <div ref={startTimeRef} className={`${c.tinyText} ${c.secondaryColor}`}></div>
                        </div>
                        <div>
                            <span className={c.smallText}>Select End Date</span>
                            <ThemeProvider theme={darkTheme}>
                                <MobileDatePicker
                                    defaultValue={newEndDate}
                                    format="DD-MM-YYYY"
                                    disablePast
                                    minDate={dayjs().$H >19 ? dayjs().add(1,'day'):dayjs()}
                                    renderInput={(params) => <TextField{...params} fullWidth />}
                                    onChange={(newValue) => {
                                        setNewEndDate(newValue);
                                        setData({ ...data, endDate: dayjs(newValue).$d.toLocaleDateString().split('/').join('-') })
                                        if (newValue.$D == dayjs().$D && newEndTime < dayjs().add(4, 'hour')) {
                                            setNewEndTime(dayjs().add(4, 'hour'))
                                        }
                                    }}
                                />
                            </ThemeProvider>
                            <div ref={endDateRef} className={`${c.tinyText} ${c.secondaryColor}`}></div>
                        </div>
                        <div>
                            <span className={c.smallText}>Select End Time</span>
                            <ThemeProvider theme={darkTheme}>
                                <MobileTimePicker
                                    value={newEndTime}
                                    disablePast={newEndDate <= dayjs() ? true : false}
                                    minutesStep={15}
                                    minTime={newEndDate <= newDate ? dayjs().add(4, 'hour') : false}
                                    ampm={false}
                                    renderInput={(params) => <TextField{...params} fullWidth />}
                                    onChange={(newValue) => {
                                        setNewEndTime(newValue);
                                        setData({ ...data, endTime: dayjs(newValue).$d.toTimeString().toString().split(' ')[0] })
                                    }} />
                            </ThemeProvider>
                            <div ref={endTimeRef} className={`${c.tinyText} ${c.secondaryColor}`}></div>
                        </div>
                        <div>
                            <input type="text" placeholder='Add Additional Kms?' name="additionalKms"
                                onChange={(e) => { 
                                    e.target.value === '' ?
                                    setData({ ...data, extraKm: parseInt(0) }) 
                                    :
                                    setData({ ...data, extraKm: parseInt(e.target.value) })  
                                }} />
                        </div>
                    </div>
                    <div className={s.btnSection}>
                        <div className={c.extraSmallText}>* Driver Batta applicable for rides between <span className={c.secondaryColor}>9 pm – 7 am</span></div>
                        <di className={c.extraSmallText}>* Distance and Time is calculated from garage to garage.</di>                        <div>
                            <button className={`${c.primaryBtnFilled}`} onClick={() => {
                                if (data.date === '') alert('Enter date')
                                else if (data.time === '') alert('Enter time')
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

export default OutStationDateModal