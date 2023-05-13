import React, { useContext, useReducer, useRef, useState } from 'react'
import s from './outStationModal.module.css'
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router";
import c from '../../../assets/css/custom.module.css'
import { indFormat } from '../../../helpers/IndCurrencyFormat';
import axios from 'axios';
import feesData from '../../../fees.json'
import { Context, ContextLogin } from '../../../helpers/context'
import { aws_bucket_url, api_url, json_server_url } from '../../../helpers/base_url';
import dayjs from 'dayjs';
import { MobileTimePicker } from '@mui/x-date-pickers/MobileTimePicker';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import { TextField } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';

function SelfDriveModal({ setIsModalOpen, carName, selectedPackage, rent, useType, thisPackage, details }) {
    const darkTheme = createTheme({
        palette: {
            mode: 'dark',
        },
    });

    let nav = useNavigate()
    let modal = useRef()
    let startTimeRef = useRef()
    let startDateRef = useRef()
    let endTimeRef = useRef()
    let endDateRef = useRef()
    let showDays = useRef()
    let priceRef = useRef()
    const loc = useLocation();
    const location = useContext(Context)

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
        deposit: details.deposit,
        price: details.price,
        basePrice: details.price,
        days: '',
        name: details.carName,
        carId: details.id,
        img: details.carImage
    })
    const [newDate, setNewDate] = useState(dayjs().add(2,'day'))
    const [newEndDate, setNewEndDate] = useState(dayjs().add(2,'day'))
    const [newTime, setNewTime] = useState(dayjs())
    const [newEndTime, setNewEndTime] = useState(dayjs())
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

        axios.get(`${json_server_url}/selfDrive`)
            .then((res) => { setClean(res.data) })
            .catch((err) => { console.log(err); })

        return () => {
            document.body.style.overflowY = 'scroll';
        }
    }, [loc]);

    useEffect(() => {
        //setting days count
        setDaysCount(newEndDate.diff(newDate, 'day'))
        console.log(parseInt(newEndDate.diff(newDate, 'day')));
        //-----
        // //setting driver allowance`
        // if (newTime.$H >= 13 && newTime.$H <= 24 || newTime.$H >= 0 && newTime.$H < 8) {
        //     setData({ ...data, allowance: details.price * fees.driverAllowance });
        // }
        // else { setData({ ...data, allowance: 0 }); }
        // //-----`
        // //handling early morning bookings
        // if (dayjs().$D + 1 == newDate.$D && newTime.$H > 0 && newTime.$H < 8) {
        //     if (dayjs().$H >= 22 && dayjs().$H < 24) {
        //         alert('Early morning booking not possible! select time after 7 AM.');
        //         setData({ ...data, time: '' })
        //     }
        // }
        // //-----
        if (newDate >= newEndDate && newTime > newEndTime) endTimeRef.current.innerHTML = "End Time Cannot be less than Start time"
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

    function postdata() {
        if (data.startDate == '') startDateRef.current.innerHTML = 'Enter Start Date!'
        else if (data.endDate == '') endDateRef.current.innerHTML = 'Enter End Date!'
        else if (data.startTime == '') startTimeRef.current.innerHTML = 'Enter Start Time'
        else if (startLead) startTimeRef.current.innerHTML = 'Lead Time Of 4 Hrs is needed!'
        else if (data.endTime == '') endTimeRef.current.innerHTML = 'Enter End Time'
        else if (endLead) endTimeRef.current.innerHTML = 'Lead Time Of 4 Hrs is needed!'
        else if (newTime > newEndTime) endTimeRef.current.innerHTML = "End Time Cannot be less than Start time"
        else {
            for (let i = 0; i < clean.length; i++) {
                try {
                    axios.delete(`${json_server_url}/selfDrive/${clean[i].id}`)
                        .then((res) => { })
                        .catch((err) => { console.log(err) })
                } catch (error) { console.log('Not deleted!'); }
            }
            try {
                axios.post(`${json_server_url}/selfDrive`, data)
                    .then((res) => { nav(`/summary-self-drive/${details.id}`) })
                    .catch((err) => { console.log(err) })
            } catch (error) { console.log('Not Sent!'); }
        }
    }

    console.log(details);

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
                        <img src={`${aws_bucket_url}/${details.carImage}`} alt="car-image" />
                    </div>
                </div>
                <div className={s.bottomSection}>
                    <div className={s.carInfoDetails}>
                        <div className={s.nameInfo}>
                            <span className={`${c.bigText} ${c.b500}`}>{details.carName}</span>
                            <span className={c.smallText}>{"Self Drive"}</span>
                            <span ref={showDays} className={`${c.secondaryColor}`}>{daysCount} {daysCount > 1 ?'day':'days'}</span>
                        </div>
                        <div ref={priceRef} className={`${s.priceInfo} ${c.secondaryColor}`}>
                            {indFormat.format(
                                ((data.price) * (data.days <= 0 ? 1 : data.days)) +
                                (data.extraKm * (data.price * fees.extraKms)) + data.deposit
                            )}
                        </div>
                    </div>
                    <div className={s.dateTimeSection}>
                        <div>
                            <span className={c.smallText}>Select Start Date</span>
                            <ThemeProvider theme={darkTheme}>
                                <MobileDatePicker
                                    defaultValue={newDate}
                                    format="DD-MM-YYYY"
                                    disablePast
                                    minDate={dayjs().add(2,'day')}
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
                                    // disablePast={newDate <= dayjs() ? true : false}
                                    minutesStep={15}
                                    // minTime={newDate.$D <= dayjs().$D ? dayjs().add(4,'hour') : false}
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
                                    value={newEndDate}
                                    format="DD-MM-YYYY"
                                    disablePast
                                    minDate={dayjs().add(2,'day')}
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
                                    // disablePast={newEndDate <= newDate ? true : false}
                                    minutesStep={15}
                                    // minTime={newEndDate.$D <= newDate.$D ? dayjs().add(4,'hour') : false}
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
                                    e.target.value === ''?
                                    setData({ ...data, extraKm: parseInt(0) }) 
                                    :
                                    setData({ ...data, extraKm: parseInt(e.target.value) }) 
                                }} />
                        </div>
                    </div>
                    <div className={s.btnSection}>
                        {location == 3 && <div className={c.extraSmallText}>* 1 day = 9:00am to 9:00am.</div>}
                        {location == 3 && <div className={c.extraSmallText}>* In Goa minimum rental is for 2 days.</div>}
                        <div className={c.extraSmallText}>* Pickup & Drop charges applicable.</div>
                        <div className={c.extraSmallText}>* Distance and Time is calculated from garage to garage.</div>
                        <div>
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

export default SelfDriveModal