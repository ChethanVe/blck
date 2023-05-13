import s from './details.module.css'
import c from '../../assets/css/custom.module.css'
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from '../../helpers/Axios'
import carFeatures from './detailsPageUtils/carFeatures.json'
import { indFormat } from '../../helpers/IndCurrencyFormat';
import feesData from '../../fees.json'
import SelfDriveModal from './modalSelectDate/SelfDriveModal';
import PleaseReadSection from '../common/PleaseReadSection';
import NoteSection from '../common/NoteSection';
import { aws_bucket_url, api_url } from '../../helpers/base_url'

const DetailsSelfDrive = () => {
  let { id } = useParams()
  const [data, setData] = useState([])
  let carId = data.car ? data.car[0].id : 0
  const url = `/get-selfdrive-cars?id=${id}`

  const [loaded, setLoaded] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [fees, setFees] = useState([])

  useEffect(() => {
    setFees(feesData.fees[0])
    async function getData() {
      await axios.get(url)
        .then((res) => {
          setData(res.data[0])
          setLoaded(true)
        })
        .catch((err) => { console.log(err); })
    }
    getData()
    return () => { console.log("Cleaning..."); }
  }, [url])
  //logs
  // console.log(carData);
  // console.log(carFeature);
  // console.log(data);
  // console.log(fees);
  //-----

  return (
    loaded ?
      <main className={s.detailsPage}>
        <div className={s.leftSide}>
          <div className={`${s.carHeader} ${c.prefixed} ${c.headerFormat}`}>
            <span>{data[1]}{' '}{data[2]}</span>
            <span className={`${c.secondaryColor} ${c.lightText}`}>
              {indFormat.format(data[23])}
            </span>
          </div>
          <div className={s.detailsCarousel}>
            <Carousel autoPlay infiniteLoop showThumbs={false} showArrows={false} swipeable={true} stopOnHover={true} showStatus={false}>
              {
                data[9].split(',').map((image) => {
                  return (
                    <div key={image}>
                      <img src={`${aws_bucket_url}/${image}`} alt="Car" />
                    </div>
                  )
                })
              }
            </Carousel>
          </div>
          <div className={`${s.carTerms} ${c.prefixed} ${c.descFormat}`}>
            <PleaseReadSection />
          </div>
          <div className={`${c.prefixed} ${s.carNote} ${c.descFormat}`}>
            <NoteSection />
          </div>
        </div>
        <div className={s.rightSide}>
          <div className={`${c.headerText} ${c.prefixed} ${s.chauffeurSection}`}>Self Drive</div>
          <div className={`${c.prefixed} ${s.infoSection}`}>
            <ul className={`${c.prefixed} ${c.smallText} ${s.carSpecs}`}>
              <li>5 people</li>
              <li>4 bags</li>
              <li>Automatic</li>
              <li>Hybrid</li>
            </ul>
          </div>
          <div className={`${s.driverBattaSection} ${c.prefixed}`}>
            <div>
              <span>Deposit</span>
              <span>{indFormat.format(data[21])}</span>
            </div>
            <div>
              <span className={c.smallText}>Extra Km</span>
              <span>{indFormat.format(data[23] * fees.extraKms)}</span>
            </div>
            <div>
              <span className={c.smallText}>Free Kms</span>
              <span>150/day</span>
            </div>
          </div>
          <div className={`${c.prefixed} ${s.selectDateSection}`}>
            <button className={`${c.primaryBtnFilled} ${s.selectDateBtn}`}
              onClick={() => { setIsModalOpen(true) }}>Select Date</button>
          </div>
        </div>
        {isModalOpen ?
          <SelfDriveModal setIsModalOpen={setIsModalOpen}
            details={{
              id: data[0],
              carName: data[1] + " " + data[2],
              carImage: data[8],
              price: data[23],
              deposit: data[21]
            }}
            carName={data[1] + ' ' + data[2]} selectedPackage={'Self Drive'} rent={data[23]} thisPackage={2} useType={'Self Drive'} />
          : <></>
        }
      </main>
      :
      <>Loading...</>
  );
};

export default DetailsSelfDrive;
