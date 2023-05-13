import React, { useEffect, useRef, useState } from "react";
import s from "./yachts.module.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Accordion from "react-bootstrap/Accordion";
import axios from "../../helpers/Axios";
import YachtThanksPopup from "./YachtThanksPopup";

function YachtForm({ show, setShow, price, showTime, yachtName }) {
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [open, setOpen] = useState(false);
  const [lgShow, setLgShow] = useState(false);

  const [data, setData] = useState({
    user_name: "",
    email: "",
    phone_number: "",
    booking_date: "",
    yacht_name: yachtName,
  });
  const [agreedToTerms, setAgreedToTerms] = useState(false);

  const usernameRef = useRef();
  const emailidRef = useRef();
  const phoneNumberRef = useRef();
  const bookingDateRef = useRef();
  const agreeRef = useRef();

  const payload = {
    ...data,
  };

  const emailformat = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
  const nameformat = /^[A-Za-z" "_.]+$/;
  const phoneNumPattern = /^\d{10}$/;

  // note*
  // let yourDate = new Date()
  // const currentDate = yourDate.toISOString().split('T')[0]

  // note*

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
      usernameRef.current.innerHTML = ""
      emailidRef.current.innerHTML = ""
      phoneNumberRef.current.innerHTML = ""
      bookingDateRef.current.innerHTML = ""
      agreeRef.current.innerHTML = ""
    }, 4000);
  }

  function handelEnquire(e) {
    e.preventDefault();
    if (data.user_name === "") {
      usernameRef.current.innerHTML = "Enter Name";
      clearmsg()
    } else if (!data.user_name.match(nameformat)) {
      usernameRef.current.innerHTML = "Enter Valid Name";
      clearmsg()
    } else if (data.email === "") {
      emailidRef.current.innerHTML = "Enter Email";
      clearmsg()
    } else if (!data.email.match(emailformat)) {
      emailidRef.current.innerHTML = "Enter Valid Email";
      clearmsg()
    } else if (data.phone_number === "") {
      phoneNumberRef.current.innerHTML = "Enter Phone Number";
      clearmsg()
    } else if (!phoneNumPattern.test(data.phone_number)) {
      phoneNumberRef.current.innerHTML = "Enter Valid Phone Number";
      clearmsg()
    } else if (data.booking_date === "") {
      bookingDateRef.current.innerHTML = "Enter Booking Date";
      clearmsg()
    }
    else if (data.booking_date < storeDate || data.booking_date === storeDate){
      bookingDateRef.current.innerHTML = "Booking date should be more then 5days of Current date";
      clearmsg()
    }
    else if (agreedToTerms === false) {
      agreeRef.current.innerHTML = "Please agree with Terms & Conditions";
      clearmsg()
    } else {
      axios
        .post("/yacht_enquires", payload)
        .then((res) => {
          console.log("yacht data reached");
          setLgShow(true)
        })
        .catch(() => {
          console.log("Error");
        });
    }
  }

  // useEffect(()=>{
  //   handelEnquire()
  // },[])

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Provide Booking details</Modal.Title>
        </Modal.Header>
        <Form>
          <Modal.Body>
            <div className={s.modalbody}>
              <div className={s.modalinput}>
                <input
                  type="text"
                  onChange={(e) => {
                    setData({ ...data, user_name: e.target.value });
                  }}
                  placeholder="Full Name"
                />
                <div
                  ref={usernameRef}
                  className={`${s.tinyText} ${s.secondaryColor}`}
                ></div>
                <input
                  type="email"
                  onChange={(e) => {
                    setData({ ...data, email: e.target.value });
                  }}
                  placeholder="Email Id"
                />
                <div
                  ref={emailidRef}
                  className={`${s.tinyText} ${s.secondaryColor}`}
                ></div>
                <input
                  type="tel"
                  onChange={(e) => {
                    setData({ ...data, phone_number: e.target.value });
                  }}
                  placeholder="Phone Number(India)"
                />
                <div
                  ref={phoneNumberRef}
                  className={`${s.tinyText} ${s.secondaryColor}`}
                ></div>
              </div>
              <div className={s.modaldatetime}>
                <input
                  type="date"
                  onChange={(e) => {
                    setData({ ...data, booking_date: e.target.value });
                  }}
                  placeholder="Start Date"
                />
                <div
                  ref={bookingDateRef}
                  className={`${s.tinyText} ${s.secondaryColor}`}
                ></div>
                {/* <p>{showTime}</p> */}
              </div>
              <hr />
              {/* <div className={s.couponsection}>
                    <input type="text" placeholder='Enter coupon code'/>
                    <Button variant="secondary">Go</Button>
                </div>
                <div className={s.totalprice}>
                    <h3>Total</h3>
                    <h3>{price}</h3>
                </div> */}
              <div className={s.readsection}>
                <Form.Group
                  className={s.checkboxsection}
                  controlId="formBasicCheckbox"
                >
                  <Form.Check
                    type="checkbox"
                    onChange={() => setAgreedToTerms(!agreedToTerms)}
                    label="I agree to the"
                  />
                  <a href="/">T & C</a>
                </Form.Group>
                {/* <div className={s.checkboxsection} controlId="formBasicCheckbox"> */}
                {/* <input type="checkbox" id="agreebox" name="agreebox"   /> */}
                {/* <label htmlFor='agreebox'>I agree to the <a>T & C</a></label> */}
                {/* <Form.Check type="checkbox" label="Check me out" /> */}
                {/* </div> */}
                {/* <Accordion defaultActiveKey="0" >
                        <Accordion.Item eventKey="0">
                            <Accordion.Header onClick={()=>{setOpen(!open)}}>{open ?"please read":"close"}</Accordion.Header>
                            <Accordion.Body>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                            aliquip ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                            culpa qui officia deserunt mollit anim id est laborum.
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion> */}
              </div>
              <div
                ref={agreeRef}
                className={`${s.tinyText} ${s.secondaryColor}`}
              ></div>
              <Button className={s.verify} onClick={handelEnquire}>
                Enquire Now
              </Button>
              {
                    lgShow && <YachtThanksPopup setLgShow = {setLgShow} lgShow = {lgShow}/>
                }
            </div>
          </Modal.Body>
        </Form>
      </Modal>
    </>
  );
}
// render(<YachtForm />);
export default YachtForm;
