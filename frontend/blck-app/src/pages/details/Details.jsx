import s from './details.module.css'
import c from '../../assets/css/custom.module.css'
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useContext, useEffect, useState } from 'react';
import SelectDate from './modalSelectDate/SelectDate';
import { useParams } from 'react-router-dom';
import axios from '../../helpers/Axios'
import carFeatures from './detailsPageUtils/carFeatures.json'
import { indFormat } from '../../helpers/IndCurrencyFormat';
import OutStationDateModal from './modalSelectDate/OutStationDateModal';
import AirportDateModal from './modalSelectDate/AirportDateModal';
import feesData from '../../fees.json'
import PleaseReadSection from '../common/PleaseReadSection';
import NoteSection from '../common/NoteSection';
import { aws_bucket_url, api_url, json_server_url } from '../../helpers/base_url'

const Details = () => {
  let { id } = useParams()
  const [carData, setCarData] = useState([])
  const [data, setData] = useState({
    carName: '', selectedPackage: '', rental: 0, thisPackage: 1, useType: ''
  })
  const [allData, setAllData] = useState([])
  const [loaded, setLoaded] = useState(false)
  let carId = allData.car ? allData.car[0].id : 0
  const url = `/homepage_data?id=${id}`
  const [carouselImages, setCarouselImages] = useState([])
  const [fees, setFees] = useState([])

  

  useEffect(() => {
    setFees(feesData.fees[0])
    async function getData() {
      await axios.get(url)
        .then((res) => {
          setAllData(res.data)
          // console.log(res.data)
          setCarData(res.data.car[0])
          setCarouselImages(res.data.car[0].slider_images.split(','))
          setData({
            ...data, carName: res.data.car[0].car_brand + ' ' + res.data.car[0].car_model,
            rental: res.data.car[0].rent,      
            useType: res.data.car[0].use_type,
            selectedPackage: 'Standard - 8 Hr 80Kms'
          })

          

          if (res.data.standard.length > 0) setData({ ...data, thisPackage: 1, selectedPackage: 'Standard - 8 Hr 80Kms' })
          else if (res.data.outstation.length > 0) setData({ ...data, thisPackage: 2, selectedPackage: 'Out Station - 300Km, 12AM-12AM' })
          else if (res.data.airport.length > 0) setData({ ...data, thisPackage: 3, selectedPackage: 'Airport Pickup/Drop' })
          else setData({ ...data, thisPackage: 4, selectedPackage: 'Self Drive' })
          setLoaded(true)
        })
        .catch((err) => {
          console.log(err);
        })
    }
    getData()
    return () => { console.log("Cleaning..."); }
  }, [url])
  //logs
  console.log(carData);
  // console.log(carFeature);
  console.log(allData);
 
  
  // console.log(fees);

  const [isModalOpen, setIsModalOpen] = useState(false)
  return (
    <main className={s.detailsPage}>
      <div className={s.leftSide}>
        <div className={`${s.carHeader} ${c.prefixed} ${c.headerFormat}`}>
          {loaded ? <span>{allData.car[0].car_brand}{" "}{allData.car[0].car_model}</span> : <>...</>}
          {loaded ? <span className={`${c.secondaryColor} ${c.lightText}`}>
            {
              <>
                <>
                  { data.thisPackage == 1 ? indFormat.format(allData.standard[0].price) :
                    data.thisPackage == 2 ? indFormat.format(allData.outstation[0].price) :
                    data.thisPackage == 3 ? indFormat.format(allData.airport[0].price) : "-"
                  }
                </>
              </>
            }
          </span> : <>...</>}
        </div>
        <div className={s.detailsCarousel}>
          {loaded ? <Carousel autoPlay infiniteLoop showThumbs={false} showArrows={false} swipeable={true} stopOnHover={true} showStatus={false}>
            {
              carouselImages.map((image) => {
                return (
                  <div key={image}>
                    <img src={`${aws_bucket_url}/${image}`} alt="Car" />
                  </div>
                )
              })
            }
          </Carousel> : <>...</>}
        </div>
        <div className={`${s.carTerms} ${c.prefixed} ${c.descFormat}`}>
          <PleaseReadSection />
        </div>
        <div className={`${c.prefixed} ${s.carNote} ${c.descFormat}`}>
          <NoteSection />
        </div>
      </div>
      <div className={s.rightSide}>
        {loaded ? <div className={`${c.headerText} ${c.prefixed} ${s.chauffeurSection}`}>{data.selectedPackage}</div> : <>...</>}
        <div className={`${c.prefixed} ${s.infoSection}`}>
          <ul className={`${c.prefixed} ${c.smallText} ${s.carSpecs}`}>
            <li>5 people</li>
            <li>4 bags</li>
            <li>Automatic</li>
            <li>Hybrid</li>
          </ul>
        </div>
        <div className={`${c.prefixed} ${s.packageSection} ${c.descFormat2}`}>
          <div className={`${c.headerText}`}>Choose Package</div>
          {loaded ? <div className={`${c.prefixed} ${s.selectSection}`}>
            <select name="" id={s.customSelect}
              onChange={(e) => {
                if (e.target.value == 1) {
                  setData({ ...data, thisPackage: e.target.value, selectedPackage: 'Standard - 8 Hr 80Kms' })
                }
                else if (e.target.value == 2) {
                  setData({ ...data, thisPackage: e.target.value, selectedPackage: 'Out Station - 300Km, 12AM-12AM' })
                }
                else if (e.target.value == 3) {
                  setData({ ...data, thisPackage: e.target.value, selectedPackage: 'Airport Pickup/Drop' })
                }
              }}>
              <option value={0} hidden>Select Package</option>
              <option value={1} selected={data.thisPackage == 1 ? true : false} hidden={allData.standard.length != 0 ? false : true}>Standard - 8 Hr 80Kms</option>
              <option value={2} selected={data.thisPackage == 2 ? true : false} hidden={allData.outstation.length != 0 ? false : true}>Out Station - 300Km, 12AM-12AM</option>
              <option value={3} selected={data.thisPackage == 3 ? true : false} hidden={allData.airport.length != 0 ? false : true}>Airport Pickup/Drop</option>
            </select>
            {data.thisPackage == 4 ?
              <div className={`${c.prefixed} ${s.depositSection}`}>
                <div>
                  <span>Deposit</span>
                  <span>{allData.standard.length != 0 ? indFormat.format(allData.standard[0].deposit) : '-'}</span>
                </div>
              </div> : <></>}
          </div> : <>...</>}
        </div>
        {loaded ? <div className={`${s.driverBattaSection} ${c.prefixed}`}>
          <div>
            <span className={c.smallText}>{data.thisPackage == 2 ? "Driver Allowance/day" : "Driver Allowance"}</span>
            <span>
              {data.thisPackage == 1 && allData.standard.length > 0 ? indFormat.format(allData.standard[0].price * fees.driverAllowance) :
                data.thisPackage == 2 && allData.standard.length > 0 ? indFormat.format(allData.standard[0].price * fees.driverAllowance) :
                  data.thisPackage == 3 && allData.airport.length > 0 ? indFormat.format(allData.airport[0].price * fees.driverAllowance) : "-"
              }
            </span>
          </div>
          {data.thisPackage == 3 || allData.airport.lenght == 0 ?
            <></>
            :
            <div>
              {data.thisPackage == 1 || allData.standard.lenght > 0 ?
                <>
                  <span className={c.smallText}>Extra Km</span>
                  <span>{allData.standard.length > 0 ? indFormat.format(allData.standard[0].price * fees.extraKms) : '-'}</span>
                </>
                : <>
                  <span className={c.smallText}>Extra Km</span>
                  <span>{allData.outstation.length > 0 ? indFormat.format(allData.standard[0].price * fees.extraKms) : '-'}</span>
                </>}
            </div>
          }
          {data.thisPackage == 2 || data.thisPackage == 3 ?
            <></>
            :
            <div>
              {
                allData.standard.length > 0 ?
                  <>
                    <span className={c.smallText}>Extra Hr</span>
                    <span>{allData.standard ? indFormat.format(allData.standard[0].price * fees.extraHrs) : 0}</span>
                  </>
                  : <></>
              }
            </div>
          }
          {data.thisPackage == 3 || carData.use_type == 'Airport Pickup Drop' ?
            <div>
              <span className={c.smallText}>Toll</span>
              <span>{allData.airport.length != 0 ? indFormat.format(allData.airport[0].toll_fee) : 0}</span>
            </div>
            :
            <></>
          }
          {data.thisPackage == 3 || carData.use_type == 'Airport Pickup Drop' ?
            <div>
              <span className={c.smallText}>Parking</span>
              <span>{allData.airport.length != 0 ? indFormat.format(allData.airport[0].parking_fee) : 0}</span>
            </div>
            :
            <></>
          }
        </div> : <>...</>}
        <div className={`${c.prefixed} ${s.selectDateSection}`}>
          <button className={`${c.primaryBtnFilled} ${s.selectDateBtn}`}
            onClick={() => { setIsModalOpen(true) }}>Select Date</button>
        </div>
      </div>
      {isModalOpen ?
        data.thisPackage == 1 ?
          <SelectDate carId={carId} setIsModalOpen={setIsModalOpen} details={{ 'package': allData.standard[0], 'car': allData.car[0] }} carName={carData.car_brand + ' ' + carData.car_model} selectedPackage={'Standard - 8 Hr 80Kms'} rent={carData.rent} thisPackage={1} useType={'Chauffeur Driven'} />
          : data.thisPackage == 2 ?
            <OutStationDateModal setIsModalOpen={setIsModalOpen} details={{ 'package': allData, 'car': allData.car[0] }} carName={carData.car_brand + ' ' + carData.car_model} selectedPackage={'Out Station - 300Km, 12AM-12AM'} rent={carData.rent} thisPackage={2} useType={'Chauffeur Driven'} />
            : data.thisPackage == 3 ?
              <AirportDateModal setIsModalOpen={setIsModalOpen} details={{ 'package': allData.airport[0], 'car': allData.car[0] }} carName={carData.car_brand + ' ' + carData.car_model} selectedPackage={'Airport Pickup/Drop'} rent={carData.rent} thisPackage={3} useType={'Chauffeur Driven'} />
              : <></> : <></>
      }
    </main>
  );
};

export default Details;
