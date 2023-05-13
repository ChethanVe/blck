import { useContext, useEffect, useRef, useState } from 'react'
import axios from '../../helpers/Axios'
import s from './homepage.module.css'
import carType from './homepageUtils/carstyle.json'
import carBrands from './homepageUtils/carbrands.json'
import { useNavigate } from 'react-router-dom'
import { indFormat } from '../../helpers/IndCurrencyFormat'
import { Context, ContextLogin } from '../../helpers/context'
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { aws_bucket_url, api_url } from '../../helpers/base_url'
export default function HomePage() {
    const location = useContext(Context)
    const [isLogged, setIsLogged] = useContext(ContextLogin)
    //links
    const homepageDataUrl = '/homepage_data'
    //refs
    let tab0 = useRef()
    let tab1 = useRef()
    let tab2 = useRef()
    let tab3 = useRef()
    let filter = useRef()
    let filterBtn = useRef()
    const [tabs, setTabs] = useState({tab1:false, tab2:false, tab3:false})
    //navs
    let nav = useNavigate()
    //states
    const [isChauffeurDriven, setIsChauffeurDriven] = useState(true)
    const [isSelfDriven, setIsSelfDriven] = useState(false)
    const [isAirportPickup, setIsAirportPickup] = useState(false)
    const [selfDriveCars, setSelfDriveCars] = useState([])
    const [chauffeur, setChauffeur] = useState([])
    const [standard, setStandard] = useState([])
    const [outstaion, setOutstation] = useState([])
    const [airport, setAirport] = useState([])
    const [selfDrive, setSelfDrive] = useState([])
    const [loaded, setLoaded] = useState(false)
    const [lowToHigh, setLowToHigh] = useState(false)
    const [highToLow, setHighToLow] = useState(false)
    const [priceRange, setPriceRange] = useState(1000)
    //effects
    useEffect(() => {
        setLowToHigh(false)
        setHighToLow(false)
        // !isLogged && nav('/login') 
        async function fetchData() {
            tab1.current.classList.add(`${s.selected}`)
            tab2.current.classList.remove(`${s.selected}`)
            tab3.current.classList.remove(`${s.selected}`)
            setTabs({...tabs, tab1:true})

            await axios.get(`/get-selfdrive-cars?location=${location}`)
                .then((res) => { setSelfDriveCars(res.data) })
                .catch((err) => { console.log(err); })

            await axios.get(`/get-chauffeur-cars?location=${location}`)
                .then((res) => {
                    setChauffeur(res.data)
                    setStandard(res.data.standard)
                    setOutstation(res.data.outstaion)
                    setAirport(res.data.airport)
                })
                .catch((err) => { console.log(err); })
        }
        fetchData();

        setLoaded(true)

        return () => { console.log('Cleaned'); }
    }, [homepageDataUrl, location])

    function slideIn() {
        try {
            filter.current.children[0].classList.remove(`${s.slideOutLeft}`)
            filter.current.children[0].classList.add(`${s.slideInLeft}`)
        } catch (error) { }
        setTimeout(() => {
            filter.current.style = 'display:block'
        }, 200);
    }

    function slideOut() {
        try {
            filter.current.children[0].classList.remove(`${s.slideInLeft}`)
            filter.current.children[0].classList.add(`${s.slideOutLeft}`)
        } catch (error) { }
        setTimeout(() => {
            filter.current.style = 'display:none'
        }, 200);
    }

    useEffect(() => {
        if (lowToHigh == true){
            setChauffeur({...chauffeur, standard: standard.sort((a, b) => (a[21] > b[21]) ? 1 : -1)})
            // setChauffeur({...chauffeur,outstaion: outstaion.sort((a, b) => (a[21] > b[21]) ? 1 : -1),})
            // setChauffeur({...chauffeur,airport: airport.sort((a, b) => (a[21] > b[21]) ? 1 : -1),})
        }

        // setChauffeur({ ...chauffeur, standard: chauffeur.standard.sort((a, b) => (a[21] > b[21]) ? 1 : -1) })

        if (highToLow)
            setChauffeur({
                ...chauffeur,standard: chauffeur.standard.sort((a, b) => (a[21] < b[21]) ? 1 : -1),
                // outstaion: chauffeur.outstaion.sort((a, b) => (a[21] < b[21]) ? 1 : -1),
                // airport: chauffeur.airport.sort((a, b) => (a[21] < b[21]) ? 1 : -1)
            })
    }, [lowToHigh, highToLow])

    function selectedPriceRange() {
        setChauffeur({ ...chauffeur, standard: standard.filter((item) => item[21] < priceRange),})
    }
    // useEffect(()=>{

    // },[highToLow])

    // function filterPriceLowToHigh(){
    //     let ordered = chauffeur.standard.sort((a, b) => (a[21] > b[21]) ? 1 : -1);
    //     if(lowToHigh)
    //         setChauffeur({...chauffeur, standard:chauffeur.standard.sort((a, b) => (a[21] > b[21]) ? 1 : -1)})
    //     else setChauffeur({...chauffeur, standard:standard})
    // }
    // function filterPriceHighToLow(){
    //     let ordered = chauffeur.standard.sort((a, b) => (a[21] > b[21]) ? 1 : -1);
    //     if(lowToHigh)
    //         setChauffeur({...chauffeur, standard:chauffeur.standard.sort((a, b) => (a[21] < b[21]) ? 1 : -1)})
    //     else setChauffeur({...chauffeur, standard:outstaion})
    // }
    // let lastElement = ordered.pop();
    // ordered.unshift(lastElement);
    // console.log(chauffeur.standard);

    // console.log(carsData);
    // console.log(chauffeurDrivern);
    // console.log(selfDriven);
    // console.log(airportPickupDrop);
    // console.log(standard);
    // console.log(airport);
    // console.log(outstaion);
    // console.log(selfDriveCars);
    // console.log(chauffeur.standard);
    console.log(chauffeur);
    console.log(selfDrive)
    // console.log(lowToHigh);
    // console.log(highToLow);

    return (
        <main className={`${s.homepage}`}>
            <div className={s.homepageElements}>
                <Carousel className={s.reactCarousel} autoPlay infiniteLoop showThumbs={false} showArrows={false} swipeable={true} stopOnHover={true} showStatus={false}>
                    <div className={s.banner}>
                        {/* <span className={s.bannerSpan}>Self Drive Rentals</span> */}
                    </div>
                    <div className={s.banner1}>
                        {/* <span className={s.bannerSpan}>Yachts</span> */}
                    </div>
                    <div className={s.banner2}>
                        {/* <span className={s.bannerSpan}>Private Jet Rentals</span> */}
                    </div>
                </Carousel>
                <div className={s.tabSection}>
                    <div ref={tab1} className={`${s.tab}`}
                        onClick={() => {
                            setTabs({tab1:true, tab2:false, tab3:false})
                            tab2.current.classList.remove(`${s.selected}`)
                            tab3.current.classList.remove(`${s.selected}`)
                            tab1.current.classList.add(`${s.selected}`)
                            setIsChauffeurDriven(true)
                            setIsAirportPickup(false)
                            setIsSelfDriven(false)
                        }}>Chauffeur Driven</div>
                    <div ref={tab2} className={s.tab}
                        onClick={() => {
                            setTabs({tab1:false, tab2:true, tab3:false})
                            tab3.current.classList.remove(`${s.selected}`)
                            tab1.current.classList.remove(`${s.selected}`)
                            tab2.current.classList.add(`${s.selected}`)
                            setIsChauffeurDriven(false)
                            setIsAirportPickup(true)
                            setIsSelfDriven(false)
                        }}>Airport Pickup/Drop</div>
                    <div ref={tab3} className={s.tab}
                        onClick={() => {
                            setTabs({tab1:false, tab2:false, tab3:true})
                            tab1.current.classList.remove(`${s.selected}`)
                            tab2.current.classList.remove(`${s.selected}`)
                            tab3.current.classList.add(`${s.selected}`)
                            setIsChauffeurDriven(false)
                            setIsAirportPickup(false)
                            setIsSelfDriven(true)
                        }}>Self Drive</div>
                </div>
                <div ref={filterBtn} className={s.filter}>
                    <img src={require('../../assets/images/icons/filter-icon.png')} alt="Filter Icon" width={30} height={30}
                        onClick={() => {
                            slideIn();
                            filterBtn.current.style = "visibility:hidden"
                        }} />
                </div>
                <div ref={filter} className={s.filterWindow}>
                    <div className={s.filterElements}>
                        <div className={s.filterHeader}>
                            <span>Filters</span>
                            <div onClick={() => {
                                slideOut();
                                filterBtn.current.style = "visibility:visible"
                            }} style={{ cursor: 'pointer' }}><img src={require('../../assets/images/icons/close-btn.png')} alt="Close Button" width={45} height={45} /></div>
                        </div>
                        <div className={`${s.filterSortBy} ${s.filterElement}`}>
                            <span className={s.filterHeaderText}>Sort By</span>
                            <div className={s.checkbox}>
                                <label>
                                    <input name='check' className={s.checkbox} type="radio"
                                        onChange={() => {
                                            setLowToHigh(false);
                                            setHighToLow(false);
                                            // setChauffeur({...chauffeur, standard:standard});
                                        }} /> <span></span>
                                </label>
                                <span>Most Popular</span>
                            </div>
                            <div className={s.checkbox}>
                                <label>
                                    <input name='check' className={s.checkbox} type="radio"
                                        onChange={() => {
                                            setLowToHigh(!lowToHigh);
                                            setHighToLow(false)
                                            // filterPriceLowToHigh();
                                        }} /> <span></span>
                                </label>
                                <span className={s.checkboxNames}>Price - Low to High</span>
                            </div>
                            <div className={s.checkbox}>
                                <label>
                                    <input name='check' className={s.checkbox} type="radio"
                                        onChange={() => {
                                            setHighToLow(!highToLow);
                                            setLowToHigh(false)
                                            // filterPriceHighToLow()
                                        }} /> <span></span>
                                </label>
                                <span>Price - High to Low</span>
                            </div>
                        </div>
                        <div className={`${s.filterPriceRange} ${s.filterElement}`}>
                            <span className={s.filterHeaderText}>Price Range</span>
                            <span className={s.priceRangeValue}><span>{indFormat.format(priceRange)}</span></span>
                            <div className={s.slidecontainer}>
                                <input type="range" min="1000" max="500000" className={s.slider} id={s.myRange} value={priceRange}
                                    onChange={(e) => {
                                        setPriceRange(parseInt(e.target.value));
                                        selectedPriceRange();
                                    }} />
                            </div>
                        </div>
                        <div className={`${s.carStyle} ${s.filterElement}`}>
                            <span className={s.filterHeaderText}>Car Style</span>
                            <div className={s.carTypeList}>
                                {
                                    carType.data.map((data) => {
                                        return (
                                            <div key={data.id}>
                                                <img src={require(`../../assets/images/cartype/${data.image}`)} alt={`${data.name}`} />
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
                                    carBrands.data.map((data) => {
                                        return (
                                            <div key={data.id}>
                                                <img src={require(`../../assets/images/carbrands/${data.image}`)} alt={`${data.name}`} />
                                                <span>{data.name}</span>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                        <div className={`${s.results}`}>
                            <button className={s.resultBtns}
                                onClick={() => {
                                    axios.get(`/get-chauffeur-cars?location=${location}`)
                                        .then((res) => {
                                            setChauffeur(res.data)
                                            setStandard(res.data.standard)
                                            setOutstation(res.data.outstaion)
                                            setAirport(res.data.airport)
                                        })
                                        .catch((err) => { console.log(err); })
                                }}>Clear All</button>
                            <button className={s.resultBtns}>Show Results</button>
                        </div>
                    </div>
                </div>
                {loaded ? <div className={s.bodySection}>
                    {
                        isChauffeurDriven && chauffeur.standard ? chauffeur.standard.map((data) => {
                            return (
                                <div className={s.card} key={data[0]} onClick={() => {
                                    nav(`/details/${data[0]}`)
                                }}>
                                    <img src={`${aws_bucket_url}/${data[8]}`} alt="Car" />
                                    <div className={s.carDetails}>
                                        <div className={s.carDetailsAlign}>
                                            <div className={s.carName}>{data[1]}{' '}{data[2]}</div>
                                            <div className={s.rentDetails}>
                                                <div className={s.carRentPrice}>
                                                    {indFormat.format(data[21])}
                                                </div>
                                                <div className={s.carRange}>Standard</div>
                                            </div>
                                        </div>
                                        <button className={s.bookNowBtn} onClick={() => {
                                            nav(`/details/${data[0]}`)
                                        }}>Book Now</button>
                                    </div>
                                    {data[16] <= 0 ? <span className={s.soldout}><span>SOLD OUT</span></span> : <></>}
                                </div>
                            )
                        }) : <></>
                    }
                    {/* {
                        isChauffeurDriven && chauffeur.outstation ? chauffeur.outstation.map((data) => {
                            return (
                                <div className={s.card} key={data[0]} onClick={() => {
                                    nav(`/details/${data[0]}`)
                                }}>
                                    <img src={`${aws_bucket_url}/${data[8]}`} alt="Car" />
                                    <div className={s.carDetails}>
                                        <div className={s.carDetailsAlign}>
                                            <div className={s.carName}>{data[1]}{' '}{data[2]}</div>
                                            <div className={s.rentDetails}>
                                                    <div className={s.carRentPrice}>
                                                        {indFormat.format(data[21])}
                                                    </div>
                                                    <div className={s.carRange}>Standard</div>
                                            </div>
                                        </div>
                                        <button className={s.bookNowBtn} onClick={() => {
                                            nav(`/details/${data[0]}`)
                                        }}>Book Now</button>
                                    </div>
                                    {data[16] <= 0 ? <span className={s.soldout}><span>SOLD OUT</span></span> : <></>}
                                </div>
                            )
                        }) : <></>
                    } */}
                    {
                        isAirportPickup && chauffeur.airport ? chauffeur.airport.map((data) => {
                            return (
                                <div className={s.card} key={data[0]} onClick={() => {
                                    nav(`/details/${data[0]}`)
                                }}>
                                    <img src={`${aws_bucket_url}/${data[8]}`} alt="Car" />
                                    <div className={s.carDetails}>
                                        <div className={s.carDetailsAlign}>
                                            <div className={s.carName}>{data[1]}{' '}{data[2]}</div>
                                            <div className={s.rentDetails}>
                                                <div className={s.carRentPrice}>
                                                    {indFormat.format(data[21])}
                                                </div>
                                                <div className={s.carRange}>Airport Pickup/Drop</div>
                                            </div>
                                        </div>
                                        <button className={s.bookNowBtn} onClick={() => {
                                            nav(`/details/${data[0]}`)
                                        }}>Book Now</button>
                                    </div>
                                    {data[16] <= 0 ? <span className={s.soldout}><span>SOLD OUT</span></span> : <></>}
                                </div>
                            )
                        }) : <></>
                    }
                    {
                        isSelfDriven && selfDriveCars ? selfDriveCars.map((data) => {
                            return (
                                <div className={s.card} key={data[0]} onClick={() => {
                                    nav(`/details-self-drive/${data[0]}`)
                                }}>
                                    <img src={`${aws_bucket_url}/${data[8]}`} alt="Car" />
                                    <div className={s.carDetails}>
                                        <div className={s.carDetailsAlign}>
                                            <div className={s.carName}>{data[1]}{' '}{data[2]}</div>
                                            <div className={s.rentDetails}>
                                                <div className={s.carRentPrice}>
                                                    {indFormat.format(data[21])}
                                                </div>
                                                <div className={s.carRange}>Self Drive</div>
                                            </div>
                                        </div>
                                        <button className={s.bookNowBtn} onClick={() => {
                                            nav(`/details-self-drive/${data[0]}`)
                                        }}>Book Now</button>
                                    </div>
                                    {data[16] <= 0 ? <span className={s.soldout}><span>SOLD OUT</span></span> : <></>}
                                </div>
                            )
                        }) : <></>
                    }
                </div> : <>Loading Cars...</>}
            </div>
        </main>
    )
} 
