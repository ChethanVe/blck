import React, { createContext, useContext, useEffect, useState } from 'react'
import { Link, Route, Routes, useNavigate } from 'react-router-dom'
import ScrollToTop from '../../helpers/ScrollToTop';
import { AllRoutes } from '../../routes/AllRoutes';
// import HomePage from '../homepage/HomePage';
import s from './nav_foo.module.css'
import { Context, ContextLogin, UserId, PrevUrl } from '../../helpers/context';
// import LoginPage from '../auth/LoginPage';
import axios from '../../helpers/Axios'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { useRef } from 'react';
function Navbar() {
  // let location = 'chennai'
  let menu = useRef();
  let closeBtn = useRef();
  let loc = useRef()

  function slideIn() {
    try {
      menu.current.classList.remove(`${s.slideOutLeft}`)
      menu.current.classList.add(`${s.slideInLeft}`)
    } catch (error) { }
    setTimeout(() => {
      menu.current.style = 'display:flex'
    }, 200);
  }

  function slideOut() {
    try {
      menu.current.classList.remove(`${s.slideInLeft}`)
      menu.current.classList.add(`${s.slideOutLeft}`)
    } catch (error) { }
    setTimeout(() => {
      menu.current.style = 'display:none'
    }, 200);
  }

  //context props
  const [location, setLocation] = useState(1)
  const [isLogged, setIsLogged] = useState(false)
  const [userId, setUserId] = useState(null)
  const [prevUrl, setPrevUrl] = useState('/')
  //-----
  const [locList, setLocList] = useState([])
  const [loaded, setLoaded] = useState(false)
  const [showMenu, setShowMenu] = useState(false)
  const [locState, setLocState] = useState("Bangalore")

  const [popularLoc, setPopularLoc] = useState([]);
  const [unpopularLoc, setUnpopularLoc] = useState([]);
  useEffect(() => {
    async function getLocationList() {
      await axios.get('/location')
        .then((res) => { setLocList(res.data.location); setLoaded(true); })
        .catch((err) => { console.log(err); })
    }
    getLocationList();
  }, [])
  let nav = useNavigate()

  function locationforPopular() {
    axios
      .get(`/loc_popular`)
      .then((res) => {
        setPopularLoc(res.data);
        setLoaded(true)
        // console.log(res.data);
      })
      .catch(() => {
        console.log("Error");
      });
  }

  function locationforUnPopular() {
    axios
      .get(`/loc_unpopular`)
      .then((res) => {
        setUnpopularLoc(res.data);
        setLoaded(true)
        // console.log(res.data);
      })
      .catch(() => {
        console.log("Error");
      });
  }

  useEffect(() => {
    locationforPopular();
    locationforUnPopular();
  }, []);

  function handleLocationClick(data) {
    setLocation(data.id);
    setLocState(data.location)
    // console.log(data)
  }

  console.log(userId);
  console.log(location);
  console.log(isLogged);
  console.log(prevUrl);

  return (
    <>
      <nav className={`${s.navbar}`}>
        <div className={`${s.navElements}`}>
          <div className={s.left}>
            <span className={s.menu} style={{ cursor: 'pointer' }}
              onClick={() => {
                setShowMenu(true);
                slideIn();
                closeBtn.current.style = "visibility:visible"
              }}>
                <img src={require('../../assets/images/icons/flag-btn.png')} alt="Flag btn" width={24} height={24} />
                </span>
            <Link className={s.hide} to={'/'}>Luxury Cars</Link>
            <Link className={s.hide} to={'/yachts'}>Yachts</Link>
            <Link className={s.hide} to={'/jets_copters'}>Jets/Copters</Link>
          </div>
          <div className={s.middle}>
            <Link to={'/'}><img src={require('../../assets/images/logo/logo-big.png')} alt="Logo" width={80} height={40} /></Link>
          </div>
          <div className={s.right}>
            <Link className={s.hide} to={'/contactus'}>Contact Us</Link>
            {/* <span style={{ cursor: 'pointer' }}><img src={require('../../assets/images/icons/search-icon.png')} alt="Search Icon" width={24} height={24} /></span> */}
            <Link to={'/profile/1'}><div className={s.profileIcon}></div></Link>
            <div className={`${s.location} ${s.hide}`}>
              <div className={s.locationImg}></div>
              {/* <select name="location" className={s.btnSelect} onChange={(e) => { setLocation(e.target.value) }}>
                                {
                                    locList ? locList.map((data) => {
                                        return (<option key={data.id} value={data.id}>{data.location}</option>)
                                    }) : <></>
                                }
                            </select> */}
              <button
                //   class="btn btn-primary"
                className={s.btnSelect}
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasRight"
                aria-controls="offcanvasRight"
              //   style={bgcolor}
              >
                {locState}
              </button>

              <div
                class="offcanvas offcanvas-end bg-dark"
                tabindex="-1"
                id="offcanvasRight"
                aria-labelledby="offcanvasRightLabel"
              >
                <div class="offcanvas-header">
                  <h5 id="offcanvasRightLabel">India</h5>
                  <button
                    type="button"
                    class="btn-close text-reset bg-white"
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"
                  ></button>
                </div>
                <div class="offcanvas-body">
                  <div class="row">
                    <p>Popular Cities</p>

                    {
                    popularLoc.map((data) => {
                      return (
                        <span className={s.popularCities}
                          key={data.location}
                          data-bs-dismiss="offcanvas"
                          aria-label="Close"
                          class="col-md-4 "
                          onClick={() => handleLocationClick(data)}
                          //   onChange={(e) => { setLocation(e.target.value) }}
                          value={data.id}
                        >
                          {data.location}
                        </span>
                      );
                    })}
                  </div>
                  <div class="row mt-3">
                    <p>Other Cities</p>
                    {unpopularLoc.map((data) => {
                      return (
                        <span className={s.popularCities}
                          key={data.id}
                          data-bs-dismiss="offcanvas"
                          aria-label="Close"
                          class="col-md-4"
                          onClick={() => handleLocationClick(data)}
                          //   onChange={(e) => { setLocation(e.target.value) }}
                          value={data.id}
                        >
                          {data.location}
                        </span>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
      {
        <div className='pages'>
          <ScrollToTop>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <Context.Provider value={location}>
                <ContextLogin.Provider value={[isLogged, setIsLogged]}>
                  <UserId.Provider value={[userId, setUserId]}>
                    <PrevUrl.Provider value={[prevUrl, setPrevUrl]}>
                      <Routes>
                        {
                          AllRoutes.map((route) => {
                            return (
                              <Route key={route.id} path={route.path} element={route.element} />
                            )
                          })
                        }
                      </Routes>
                    </PrevUrl.Provider>
                  </UserId.Provider>
                </ContextLogin.Provider>
              </Context.Provider>
            </LocalizationProvider>
          </ScrollToTop>
        </div>
      }
      <div ref={menu} className={s.mobileMenu}>
        <div ref={loc} className={`${s.location}`}>
          <div className={s.locationImg}></div>
          <select name="location" className={s.btnSelect} onChange={(e) => { setLocation(e.target.value); slideOut(); }}>
            {
              locList ? locList.map((data) => {
                return (<option key={data.id} value={data.id}>{data.location}</option>)
              }) : <></>
            }
          </select>
        </div>
        <Link to={'/'} onClick={() => { slideOut(); }}>Luxury Cars</Link>
        <Link to={'/yachts'} onClick={() => { slideOut(); }}>Yachts</Link>
        <Link to={'/jets_copters'} onClick={() => { slideOut(); }}>Jets/Copters</Link>
        <Link to={'/contactus'} onClick={() => { slideOut(); }}>Contact Us</Link>
        <div ref={closeBtn} className={s.closeBtn} onClick={() => { setShowMenu(false); slideOut(); }} style={{ color: 'white' }}>
          <img src={require('../../assets/images/icons/close-btn.png')} alt="Filter Icon" width={40} height={40}
            onClick={() => {
              slideIn();
              closeBtn.current.style = "visibility:hidden"
            }} />
        </div>
      </div>
    </>
  )
}

export default Navbar