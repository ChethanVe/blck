import { useEffect, useRef, useState } from 'react'
import axios from '../../utils/Axios'
import s from './homepage.module.css'
import carType from './homepageUtils/carstyle.json'
import carBrands from './homepageUtils/carbrands.json'
import {useNavigate} from 'react-router-dom'

export default function HomePage() {
    //links
    const homepageDataUrl = '/homepage_data' 
    //refs
    let tab0 = useRef()
    let tab1 = useRef()
    let tab2 = useRef()
    let tab3 = useRef()
    let filter = useRef()
    let filterBtn = useRef()
    console.log(filter);
    //navs
    let nav = useNavigate()
    //states
    const [isAllCars, setIsAllCars] = useState(true)
    const [isChauffeurDriven, setIsChauffeurDriven] = useState(false)
    const [isSelfDriven, setIsSelfDriven] = useState(false)
    const [isAirportPickup, setIsAirportPickup] = useState(false)
    const [carsData, setCarsData] = useState([])
    const [chauffeurDrivern, setChauffeurDrivern] = useState([])
    const [airportPickupDrop,setAirportPickupDrop] = useState([])
    const [selfDriven, setSelfDriven] = useState([])
    //effects
    useEffect(() => {
       async function fetchData(){
        await axios.get(homepageDataUrl)
        .then((res) => {
            setCarsData(res.data.cars);
            setChauffeurDrivern(res.data.cars.filter(data => data.use_type === "Chauffeur Driven"))
            setSelfDriven(res.data.cars.filter(data => data.use_type === "Self Drive"))
            setAirportPickupDrop(res.data.cars.filter(data => data.use_type === "Airport Pickup Drop"))
            tab0.current.classList.add(`${s.selected}`)
        })
        .catch((err) => {
            console.log((err));
        })
       }
       fetchData();
        return ()=>{
            console.log('Cleaned');
        }
    }, [homepageDataUrl])
    function slideIn(){
        try {
            filter.current.children[0].classList.remove(`${s.slideOutLeft}`)
            filter.current.children[0].classList.add(`${s.slideInLeft}`)
        } catch (error) {}
        setTimeout(() => {
            filter.current.style='display:block'
        }, 200);
    }
    function slideOut(){
        try {
            filter.current.children[0].classList.remove(`${s.slideInLeft}`)
            filter.current.children[0].classList.add(`${s.slideOutLeft}`)
        } catch (error) {}
        setTimeout(() => {
            filter.current.style='display:none'                                    
        }, 200);
    }

    console.log(carsData);
    console.log(chauffeurDrivern);
    console.log(selfDriven);
    console.log(airportPickupDrop);
    return (
        <main className={`${s.homepage}`}>
            <div className={s.homepageElements}>
                <div className={s.banner}>
                    <span>Luxury Car Rental</span>
                </div>
                <div className={s.tabSection}>
                    <div ref={tab0} className={`${s.tab}`}
                        onClick={() => {
                            tab0.current.classList.add(`${s.selected}`)
                            tab2.current.classList.remove(`${s.selected}`)
                            tab3.current.classList.remove(`${s.selected}`)
                            tab1.current.classList.remove(`${s.selected}`)
                            setIsChauffeurDriven(false)
                            setIsAirportPickup(false)
                            setIsSelfDriven(false)
                            setIsAllCars(true)
                        }}>All Cars</div>
                    <div ref={tab1} className={`${s.tab}`}
                        onClick={() => {
                            tab2.current.classList.remove(`${s.selected}`)
                            tab3.current.classList.remove(`${s.selected}`)
                            tab0.current.classList.remove(`${s.selected}`)
                            tab1.current.classList.add(`${s.selected}`)
                            setIsChauffeurDriven(true)
                            setIsAirportPickup(false)
                            setIsSelfDriven(false)
                            setIsAllCars(false)
                        }}>Chauffeur Driven</div>
                    <div ref={tab2} className={s.tab}
                        onClick={() => {
                            tab3.current.classList.remove(`${s.selected}`)
                            tab1.current.classList.remove(`${s.selected}`)
                            tab0.current.classList.remove(`${s.selected}`)
                            tab2.current.classList.add(`${s.selected}`)
                            setIsChauffeurDriven(false)
                            setIsAirportPickup(true)
                            setIsSelfDriven(false)
                            setIsAllCars(false)
                        }}>Airport Pickup/Drop</div>
                    <div ref={tab3} className={s.tab}
                        onClick={() => {
                            tab1.current.classList.remove(`${s.selected}`)
                            tab2.current.classList.remove(`${s.selected}`)
                            tab0.current.classList.remove(`${s.selected}`)
                            tab3.current.classList.add(`${s.selected}`)
                            setIsChauffeurDriven(false)
                            setIsAirportPickup(false)
                            setIsSelfDriven(true)
                            setIsAllCars(false)
                        }}>Self Drive</div>
                </div>
                <div ref={filterBtn} className={s.filter}>
                    <img src={require('../../xd-imports/filter-icon.png')} alt="Filter Icon" width={30} height={30}
                    onClick={()=>{
                        slideIn();
                        filterBtn.current.style ="visibility:hidden"
                    }} />
                </div>
                <div ref={filter} className={s.filterWindow}>
                    <div className={s.filterElements}>
                        <div className={s.filterHeader}>
                            <span>Filters</span>
                            <div onClick={()=>{
                                slideOut();
                                filterBtn.current.style ="visibility:visible"
                            }} style={{cursor:'pointer'}}><img src={require('../../xd-imports/close-btn.png')} alt="Close Button" width={45} height={45} /></div>
                        </div>
                        <div className={`${s.filterSortBy} ${s.filterElement}`}>
                            <span className={s.filterHeaderText}>Sort By</span>
                            <div className={s.checkbox}>
                                <label>
                                    <input name='check' className={s.checkbox} type="checkbox" /> <span></span>
                                </label>
                                <span>Most Popular</span>
                            </div>
                            <div className={s.checkbox}>
                                <label>
                                    <input name='check' className={s.checkbox} type="checkbox" /> <span></span>
                                </label>
                                <span className={s.checkboxNames}>Price - Low to High</span>
                            </div>
                            <div className={s.checkbox}>
                                <label>
                                    <input name='check' className={s.checkbox} type="checkbox" /> <span></span>
                                </label>
                                <span>Price - High to Low</span>
                            </div>
                        </div>
                        <div className={`${s.filterPriceRange} ${s.filterElement}`}>
                            <span className={s.filterHeaderText}>Price Range</span>
                            <span className={s.priceRangeValue}><span>₹10260</span></span>
                            <div className={s.slidecontainer}>
                                <input type="range" min="1" max="100" className={s.slider} id={s.myRange}/>
                            </div>
                        </div>
                        <div className={`${s.carStyle} ${s.filterElement}`}>
                            <span className={s.filterHeaderText}>Car Style</span>
                            <div className={s.carTypeList}>
                                {
                                    carType.data.map((data)=>{
                                        return(
                                            <div key={data.id}>
                                                    <img src={require(`../../images/${data.image}`)} alt={`${data.name}`} />
                                                    <span>{data.name}</span>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                        <div className={`${s.carStyle} ${s.filterElement} ${s.carBrands}`}>
                            <span className={s.filterHeaderText}>Car Brands</span>
                            <div className={s.carTypeList}>
                                {
                                    carBrands.data.map((data)=>{
                                        return(
                                            <div key={data.id}>
                                                    <img src={require(`../../images/${data.image}`)} alt={`${data.name}`} />
                                                    <span>{data.name}</span>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                        <div className={`${s.results}`}>
                                <button className={s.resultBtns}>Clear All</button>
                                <button className={s.resultBtns}>Show Results</button>
                        </div>
                    </div>
                </div>
                <div className={s.bodySection}>                 
                    {
                       isAllCars && carsData ? carsData.map((data) => {
                            return (
                                <div className={s.card} key={data.id}>
                                    <img src={require(`../../images/${data.car_image}`)} alt="Car" />
                                    <div className={s.carDetails}>
                                        <div>{data.car_brand}{' '}{data.car_model}</div>
                                        <div className={s.rentDetails}>
                                            <div className={s.carRentPrice}>₹{data.rent}</div>
                                            <div className={s.carRange}>8hrs 80Km</div>
                                        </div>
                                    </div>
                                    <button className={s.bookNowBtn} onClick={()=>{
                                        nav(`/details/${data.id}`)
                                    }}>Book Now</button>
                                    {data.availability_count <= 0 ? <span className={s.soldout}><span>SOLD OUT</span></span>:<></>}
                                </div>
                            )
                        }) : <></>
                    }
                    {
                        isChauffeurDriven && chauffeurDrivern ? chauffeurDrivern.map((data) => {
                            return (
                                <div className={s.card} key={data.id}>
                                    <img src={require(`../../images/${data.car_image}`)} alt="Car" />
                                    <div className={s.carDetails}>
                                        <div>{data.car_brand}{' '}{data.car_model}</div>
                                        <div className={s.rentDetails}>
                                            <div className={s.carRentPrice}>₹{data.rent}</div>
                                            <div className={s.carRange}>8hrs 80Km</div>
                                        </div>
                                    </div>
                                    <button className={s.bookNowBtn} onClick={()=>{
                                        nav(`/details/${data.id}`)
                                    }}>Book Now</button>
                                    {data.availability_count <= 0 ? <span className={s.soldout}><span>SOLD OUT</span></span>:<></>}
                                </div>
                            )
                        }) : <></>
                    }
                    {
                        isAirportPickup && airportPickupDrop ? airportPickupDrop.map((data) => {
                            return (
                                <div className={s.card} key={data.id}>
                                    <img src={require(`../../images/${data.car_image}`)} alt="Car" />
                                    <div className={s.carDetails}>
                                        <div>{data.car_brand}{' '}{data.car_model}</div>
                                        <div className={s.rentDetails}>
                                            <div className={s.carRentPrice}>₹{data.rent}</div>
                                            <div className={s.carRange}>8hrs 80Km</div>
                                        </div>
                                    </div>
                                    <button className={s.bookNowBtn} onClick={()=>{
                                        nav(`/details/${data.id}`)
                                    }}>Book Now</button>
                                    {data.availability_count <= 0 ? <span className={s.soldout}><span>SOLD OUT</span></span>:<></>}
                                </div>
                            )
                        }) : <></>
                    }
                    {
                        isSelfDriven && selfDriven ? selfDriven.map((data) => {
                            return (
                                <div className={s.card} key={data.id}>
                                    <img src={require(`../../images/${data.car_image}`)} alt="Car" />
                                    <div className={s.carDetails}>
                                        <div>{data.car_brand}{' '}{data.car_model}</div>
                                        <div className={s.rentDetails}>
                                            <div className={s.carRentPrice}>₹{data.rent}</div>
                                            <div className={s.carRange}>8hrs 80Km</div>
                                        </div>
                                    </div>
                                    <button className={s.bookNowBtn} onClick={()=>{
                                        nav(`/details/${data.id}`)
                                    }}>Book Now</button>
                                    {data.availability_count <= 0 ? <span className={s.soldout}><span>SOLD OUT</span></span>:<></>}
                                </div>
                            )
                        }) : <></>
                    }
                </div>
            </div>
        </main>
    )
} 
