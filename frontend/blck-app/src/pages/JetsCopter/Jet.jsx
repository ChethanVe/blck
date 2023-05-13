import React, { useRef, useState } from "react";
import s from "./jet.module.css";
import axios from "../../helpers/Axios";
import JetThanksPopup from "./JetThanksPopup";

const Jet = () => {
  const [lgShow, setLgShow] = useState(false);
  const [data, setData] = useState({
    user_name: "",
    email: "",
    phone_number: "",
    source: "",
    destination: "",
    trip_type: "",
    persons_count: "",
    booking_date: "",
    booking_time: "",
    aircraft_preference: "",
  });

  const payload = {
    ...data,
  };

  const userNameRef = useRef();
  const emailRef = useRef();
  const phoneNumberRef = useRef();
  const sourceRef = useRef();
  const destinationRef = useRef();
  const triptypeRef = useRef();
  const personsCountRef = useRef();
  const bookingdateRef = useRef();
  const bookingTimeRef = useRef();

  const emailformat = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
  const nameformat = /^[A-Za-z" "_.]+$/;
  const phoneNumPattern = /^\d{10}$/;
  const numberformat = /^[0-9]+$/;

  Date.prototype.addDays = function (days) {
    var date = new Date(this.valueOf());
    date.setDate(date.getDate() + days);
    return date;
  };

  var date = new Date();

  // console.log(date.addDays(5));

  const nextDate = date.addDays(5);
  const storeDate = nextDate.toISOString().split("T")[0];

  function clearmsg() {
    setTimeout(() => {
      userNameRef.current.innerHTML = "";
      emailRef.current.innerHTML = "";
      phoneNumberRef.current.innerHTML = "";
      sourceRef.current.innerHTML = "";
      destinationRef.current.innerHTML = "";
      triptypeRef.current.innerHTML = "";
      personsCountRef.current.innerHTML = "";
      bookingdateRef.current.innerHTML = "";
      bookingTimeRef.current.innerHTML = "";
    }, 4000);
  }

  function handelEnquireJets(e) {
    if (data.user_name === "") {
      userNameRef.current.innerHTML = "Enter Name";
      clearmsg();
    } else if (!data.user_name.match(nameformat)) {
      userNameRef.current.innerHTML = "Enter Valid Name";
      clearmsg();
    } else if (data.phone_number === "") {
      phoneNumberRef.current.innerHTML = "Enter Phone Number";
      clearmsg();
    } else if (!phoneNumPattern.test(data.phone_number)) {
      phoneNumberRef.current.innerHTML = "Enter Valid Phone Number";
      clearmsg();
    } else if (data.email === "") {
      emailRef.current.innerHTML = "Enter Email";
      clearmsg();
    } else if (!data.email.match(emailformat)) {
      emailRef.current.innerHTML = "Enter Valid Email";
      clearmsg();
    } else if (data.source === "") {
      sourceRef.current.innerHTML = "Enter Source";
      clearmsg();
    } else if (data.destination === "") {
      destinationRef.current.innerHTML = "Enter Destination";
      clearmsg();
    } else if (data.trip_type === "") {
      triptypeRef.current.innerHTML = "Select Trip type";
      clearmsg();
    } else if (data.persons_count === "") {
      personsCountRef.current.innerHTML = "Enter No.Persons";
      clearmsg();
    } else if (!data.persons_count.match(numberformat)) {
      personsCountRef.current.innerHTML = "Invalid Inputs";
      clearmsg();
    } else if (data.booking_date === "") {
      bookingdateRef.current.innerHTML = "Enter Booking Date";
      clearmsg();
    } else if (data.booking_date < storeDate) {
      bookingdateRef.current.innerHTML =
        "Booking date should be more then 5days of Current date";
      clearmsg();
    } else if (data.booking_time === "") {
      bookingTimeRef.current.innerHTML = "Enter Booking Time";
      clearmsg();
    } else {
      e.preventDefault();
      axios
        .post("/jets_enquires", payload)
        .then((res) => {
          console.log("jets data reached");
          setLgShow(true)
        })
        .catch(() => {
          console.log("Error");
        });
    }
  }

  return (
    <main className={`${s.jets}`}>
      <div className={s.jetElements}>
        <div className={s.backimgjet}>
          <div className={s.jetgetin}>
            <div className={s.headingjets}>
              <h3>Can't wait to fly private jets?</h3>
              <p>Share your details below to be notified at launch</p>
            </div>
            <div className={s.firstname}>
              <input
                type="text"
                onChange={(e) => {
                  setData({ ...data, user_name: e.target.value });
                }}
                placeholder="First Name"
              />
              <input
                type="tel"
                onChange={(e) => {
                  setData({ ...data, phone_number: e.target.value });
                }}
                placeholder="Mobile Number"
              />
            </div>
            <div className={s.refdivision}>
              <div
                ref={userNameRef}
                className={`${s.tinyText} ${s.secondaryColor}`}
              ></div>
              <div
                ref={phoneNumberRef}
                className={`${s.tinyText} ${s.secondaryColor}`}
              ></div>
            </div>
            <div className={s.emailsection}>
              <input
                type="email"
                onChange={(e) => {
                  setData({ ...data, email: e.target.value });
                }}
                placeholder="Email Id"
              />
            </div>
            <div
              ref={emailRef}
              className={`${s.tinyText} ${s.secondaryColor}`}
            ></div>
            <div className={s.travelingsection}>
              <input
                type="text"
                onChange={(e) => {
                  setData({ ...data, source: e.target.value });
                }}
                placeholder="Source"
              />
              <input
                type="text"
                onChange={(e) => {
                  setData({ ...data, destination: e.target.value });
                }}
                placeholder="Destination"
              />
            </div>
            <div className={s.refdivision}>
              <div
                ref={sourceRef}
                className={`${s.tinyText} ${s.secondaryColor}`}
              ></div>
              <div
                ref={destinationRef}
                className={`${s.tinyText} ${s.secondaryColor}`}
              ></div>
            </div>
            <div className={s.dropdownsection}>
              <select
                name=""
                id=""
                onChange={(e) => {
                  setData({ ...data, trip_type: e.target.value });
                }}
              >
                <option value="" hidden>
                  Trip type
                </option>
                <option value="One Way">One Way</option>
                <option value="Round Trip">Round Trip</option>
              </select>
              <input
                type="text"
                onChange={(e) => {
                  setData({ ...data, persons_count: e.target.value });
                }}
                placeholder="No. Of persons "
              />
            </div>
            <div className={s.refdivision}>
              <div
                ref={triptypeRef}
                className={`${s.tinyText} ${s.secondaryColor}`}
              ></div>
              <div
                ref={personsCountRef}
                className={`${s.tinyText} ${s.secondaryColor}`}
              ></div>
            </div>
            <div className={s.dateandtimesection}>
              <input
                type="date"
                onChange={(e) => {
                  setData({ ...data, booking_date: e.target.value });
                }}
              />

              <input
                type="time"
                onChange={(e) => {
                  setData({ ...data, booking_time: e.target.value });
                }}
              />
            </div>
            <div className={s.refdivision}>
              <div
                ref={bookingdateRef}
                className={`${s.tinyText} ${s.secondaryColor}`}
              ></div>
              <div
                ref={bookingTimeRef}
                className={`${s.tinyText} ${s.secondaryColor}`}
              ></div>
            </div>
            <div className={s.aircraft}>
              <input
                type="text"
                placeholder="Any aircraft preference (optional)"
                onChange={(e) => {
                  setData({ ...data, aircraft_preference: e.target.value });
                }}
              />
            </div>
            <div className={s.getbtn}>
              <button onClick={handelEnquireJets}>Enquire Now</button>
            </div>
            {lgShow && <JetThanksPopup setLgShow={setLgShow} lgShow={lgShow} />}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Jet;
