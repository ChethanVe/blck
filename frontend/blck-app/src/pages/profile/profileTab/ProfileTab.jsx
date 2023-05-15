/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import s from '../profile.module.css'
import c from '../../../assets/css/custom.module.css'
import { UserId, PrevUrl } from '../../../helpers/context'
import { useContext } from 'react'
import { useLocation } from 'react-router-dom'
function ProfileTab({user}) {
    const [auth, setAuth] = useState()
    const [userId, setUserId] = useContext(UserId);
    // const [user, setUser] = useState([])
    const [prevUrl, setPrevUrl] = useContext(PrevUrl)
    const [data, setData] = useState([])
    const [loaded, setLoaded] = useState(false)
    const [ userData, setUserData] = useState([])
    let location = useLocation()
    console.log(userId);

    // useEffect(()=>{

    //     axios.get(`${json_server_url}/login`)
    //     .then((res) => {
    //       setData(res.data[0]);
    
    //       if(res.data[0].auth == false){
    //         console.log('Login to see your profile!');
    //         setPrevUrl(location.pathname);
    //       }
    //       else{
    //         axios.get(`/getusers?id=${res.data[0].id}`)
    //         .then((res)=>{
    //           setUser(res.data.user[0])
    //           console.log(res.data.user[0]);
    //           setLoaded(true)
    //         })
    //         .catch((err)=>{
    //           console.log(err);
    //         })
    //       }
    //     })
    //     .catch((err)=>{console.log(err);})
    
    //     let auth = sessionStorage.getItem('auth');
        
    //   },[])

    // useEffect(()=>{
    //     setAuth(sessionStorage.getItem('auth'));
    //     if(!auth){
    //         console.log('Login to see your profile!');
    //       }
    //       else{
    //         axios.get(`/getusers?id=${userId}`)
    //         .then((res)=>{
    //           setUser(res.data)
    //           console.log(res.data);
    //         })
    //         .catch((err)=>{
    //           console.log(err);
    //         })
    //       }
    // },[])
    console.log(user);
    return (
        <div className={s.profileTabSection}>
            <div className={`${s.inputs}`}>
                <label>First Name</label>
                <input type="text" defaultValue={user.first_name} />
            </div >
            <div className={`${s.inputs}`}>
                <label>Last Name</label>
                <input type="text" defaultValue={user.last_name} />
            </div>
            <div className={`${s.inputs}`}>
                <label>Email</label>
                <input type="email" defaultValue={user.email} />
            </div>
            <div className={`${s.inputs}`}>
                <label>Phone</label>
                <input type="text" defaultValue={user.phone} />
            </div>
            {/* <div className={`${s.uploadSection}`}>
                <div>
                    <span className={`${c.smallText}`}>Driver's License</span>
                    <span className={`${c.smallText} ${c.secondaryColor}`}>Add License</span>
                </div>
                <label className={s.fileUpload}>
                    <input type="file" />
                    <span>
                        <img src={require('../../../assets/images/icons/camera-icon.png')} alt="cameraIcon" width={30} height={30} />
                    </span>
                </label>
            </div>
            <div className={`${s.uploadSection}`}>
                <div>
                    <span className={`${c.smallText}`}>Aadhar Card</span>
                    <span className={`${c.smallText} ${c.secondaryColor}`}>Add Card</span>
                </div>
                <label className={s.fileUpload}>
                    <input type="file" />
                    <span>
                        <img src={require('../../../assets/images/icons/camera-icon.png')} alt="cameraIcon" width={30} height={30} />
                    </span>
                </label>
            </div> */}
            <button className={c.primaryBtnFilled}>Update</button>
        </div>
    )
}

export default ProfileTab