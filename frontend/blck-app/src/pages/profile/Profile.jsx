/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable eqeqeq */
/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useRef, useState } from 'react'
import s from './profile.module.css'
import c from '../../assets/css/custom.module.css'
import ProfileTab from './profileTab/ProfileTab'
import HistoryTab from './historyTab/HistoryTab'
import { ContextLogin, UserId, PrevUrl } from '../../helpers/context'
import axios from '../../helpers/Axios'
import { useLocation, useNavigate } from 'react-router-dom'
import { json_server_url } from '../../helpers/base_url'

function Profile() {
  const [isTab, setIsTab] = useState(true);
  const [isLogged, setIsLogged] = useContext(ContextLogin);
  const [userId, setUserId] = useContext(UserId);
  const [prevUrl, setPrevUrl] = useContext(PrevUrl)
  const [userData, setUserData] = useState([])
  const [user, setUser] = useState([])
  const [data,setData] = useState([])
  const [loaded, setLoaded] = useState(false)
  let nav = useNavigate()
  let location = useLocation()
  let tab1 = useRef()
  let tab2 = useRef()
  // console.log(isLogged);
  console.log(userId);
  useEffect(()=>{
    setPrevUrl(location.pathname);
    tab1.current.classList.add(`${s.selected}`)

    axios.get(`${json_server_url}/login`)
        .then((res) => {
          setData(res.data[0]);
    
          if(res.data[0].auth == false){
            console.log('Login to see your profile!');
            setPrevUrl(location.pathname);
          }
          else{
            axios.get(`/getusers?id=${res.data[0].userId}`)
            .then((res)=>{
              setUser(res.data.user[0])
              console.log(res.data.user[0]);
              setLoaded(true)
            })
            .catch((err)=>{
              console.log(err);
            })
          }
        })
        .catch((err)=>{console.log(err);})
    
  },[])
  return (
    <main className={`${s.profileMain}`}>
      <div className={`${s.profileBanner}`}>
        <div className={`${s.profileImage}`}>
          <label className={s.photoUpload}>
            <input type="file" />
            <span>
              <img src={require('../../assets/images/icons/camera-icon.png')} alt="cameraIcon" width={30} height={30} />
            </span>
          </label>
        </div>
      </div>
      <div className={`${s.tabs}`}>
        <div ref={tab1} className={`${s.tab}`}
        onClick={()=>{
          setIsTab(true);
          tab1.current.classList.add(`${s.selected}`);
          tab2.current.classList.remove(`${s.selected}`);
          }}>Profile</div>
        <div className={`${s.tabLine}`}></div>
        <div ref={tab2} className={`${s.tab}`}
        onClick={()=>{
          setIsTab(false);
          tab1.current.classList.remove(`${s.selected}`);
          tab2.current.classList.add(`${s.selected}`);
          }}>History</div>
      </div>
      <div className={`${s.tabBody}`}>
        {isTab ? <ProfileTab user={user}/> : <HistoryTab/>}
      </div>
      <button className={c.primaryBtnFilled} style={{width:'130px', marginTop:'2rem'}} 
      onClick={()=>{
        setIsLogged(false)
        axios.put(`${json_server_url}/login/${data.id}`,{...data, auth:false})
        .then(()=>{alert('Logged Out');})
        .catch((err)=>{console.log(err);})
      }}>logout</button>
    </main>
  )
}

export default Profile