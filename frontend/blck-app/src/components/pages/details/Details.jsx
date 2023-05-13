import 'bootstrap/dist/css/bootstrap.min.css';
import s from './details.module.css'
import c from '../assets/custom.module.css'
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useEffect, useState } from 'react';
import SelectDate from './modalSelectDate/SelectDate';
import { useParams } from 'react-router-dom';
import axios from '../../utils/Axios'
import carFeatures from './detailsPageUtils/carFeatures.json'

const Details = () => {
  let { id } = useParams()
  const [carData, setCarData] = useState([])
  const [carFeature, setCarFeature] = useState([])
  let car_feature = []
  const url = `/homepage_data?id=${id}`
  useEffect(() => {
    async function getData() {
      await axios.get(url)
        .then((res) => {
          setCarData(res.data.car[0])
          // setCarFeature(res.data.car[0].features)
          let features = res.data.car[0].features
          setCarFeature(features.split(','))
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
  console.log(carFeature);
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <main className={s.detailsPage}>
      <div className={s.leftSide}>
        <div className={`${s.carHeader} ${c.prefixed} ${c.headerFormat}`}>
          <span>{carData.car_brand}{' '}{carData.car_model}</span>
          <span className={`${c.secondaryColor} ${c.lightText}`}>₹{carData.rent}</span>
        </div>
        <div className={s.detailsCarousel}>
          <Carousel autoPlay infiniteLoop showThumbs={false} showArrows={false} swipeable={true} stopOnHover={true} showStatus={false}>
            <div>
              <img src={require('../../images/audi-r8.jpeg')} alt="" />
            </div>
            <div>
              <img src={require('../../images/bmw-x5.jpg')} alt="" />
            </div>
            <div>
              <img src={require('../../images/ferrari-296-gts.jpg')} alt="" />
            </div>
            <div>
              <img src={require('../../images/ferrari-812.webp')} alt="" />
            </div>
          </Carousel>
        </div>
        <div className={`${s.carDescription} ${c.prefixed} ${c.descFormat}`}>
          <div className={`${s.descHeader} ${c.headerText} ${c.prefixed}`}>
            Description
          </div>
          <p className={`${c.prefixed} ${c.paragraphText}`}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit laborum, est numquam vitae neque accusantium, harum doloremque quisquam officiis dicta corrupti, sint explicabo molestias eveniet et odio exercitationem inventore porro!
          </p>
        </div>
        <div className={`${c.prefixed} ${s.carNote} ${c.descFormat}`}>
          <div className={`${s.descHeader} ${c.headerText} ${c.prefixed}`}>
            Note*
          </div>
          <p className={`${c.prefixed} ${c.paragraphText}`}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, nesciunt similique? Corporis harum, autem minus itaque velit sed recusandae officia commodi eius quisquam repellendus soluta molestias? Delectus nihil quisquam voluptate.
          </p>
        </div>
        <div className={`${s.carTerms} ${c.prefixed} ${c.descFormat}`}>
          <div className={`${s.descHeader} ${c.headerText} ${c.prefixed}`}>
            Please Read*
          </div>
          <ol className={`${c.prefixed} ${c.paragraphText}`}>
            <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis, accusamus?</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, assumenda?</li>
          </ol>
          <div className={`${c.secondaryColor} ${s.textBtn}`}>Read More...</div>
        </div>
      </div>
      <div className={s.rightSide}>
        <div className={`${c.headerText} ${c.prefixed} ${s.chauffeurSection}`}>Chauffeur Driven</div>
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
          <div className={`${c.prefixed} ${s.selectSection}`}>
            <select name="" id={s.customSelect}>
              <option value="0" hidden>Select</option>
              <option value={1}>Standard - 8 Hr 80Kms</option>
              <option value={2}>Out Station - 300Km, 12PM-12PM</option>
              <option value={3}>Airport Pickup/Drop</option>
            </select>
            <div className={`${c.prefixed} ${s.depositSection}`}>
              <div>
                <span>Deposit</span>
                <span>₹5,130</span>
              </div>
            </div>
          </div>
        </div>
        <div className={`${c.descFormat2}`}>
          <div className={`${c.headerText}`}>Features</div>
          <div className={`${c.prefixed} ${s.featuresSection}`}>
            {/* {
              carFeatures.data.map((data) => {
                return (
                  <span key={data.id}>
                    <img src={require(`./detailsPageUtils/images/${data.image}`)} alt="" width={40} height={40} />
                    <p className={c.extraTinyText} style={{ textAlign: 'center' }}>{data.name}</p>
                  </span>
                )
              })
            } */}
            {
              carFeatures.data.map((data) => {
                for (let i = 0; i < carFeature.length; i++) {
                  if(carFeature[i] == data.id){
                    return (
                      <span key={data.id}>
                        <img src={require(`./detailsPageUtils/images/${data.image}`)} alt="" width={40} height={40} />
                        <p className={c.extraTinyText} style={{ textAlign: 'center' }}>{data.name}</p>
                      </span>
                    )
                  }
                }
              })
            }
          </div>
        </div>
        <div className={`${s.driverBattaSection} ${c.prefixed}`}>
          <div>
            <span className={c.smallText}>Driver Batta</span>
            <span>₹2,130</span>
          </div>
          <div>
            <span className={c.smallText}>Extra Km</span>
            <span>₹130</span>
          </div>
          <div>
            <span className={c.smallText}>Extra Hr</span>
            <span>₹1,025</span>
          </div>
        </div>
        <div className={`${c.prefixed} ${s.selectDateSection}`}>
          <button className={`${c.primaryBtnFilled} ${s.selectDateBtn}`}
            onClick={() => { setIsModalOpen(true) }}>Select Date</button>
        </div>
      </div>
      {isModalOpen ? <SelectDate setIsModalOpen={setIsModalOpen} /> : <></>}
    </main>
  );
};

export default Details;
