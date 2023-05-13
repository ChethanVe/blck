import React,{useEffect, useState} from "react";
import s from "./yachts.module.css";
import { IoShareOutline } from "react-icons/io5";
import {IoIosPeople} from "react-icons/io"
import {BiDrink} from 'react-icons/bi'
import {MdAnchor} from 'react-icons/md'
import YachtForm from "./YachtForm";
import axios from '../../helpers/Axios'
import {useParams} from 'react-router-dom'
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import {api_url, aws_bucket_url} from "../../helpers/base_url"

const YatchMenu = ({ menu }) => {

    const [show, setShow] = useState(false);
    const [showTime, setShowTime] =useState("");
    const [price, setPrice] = useState("");
    const [yachtName, setYachtName] = useState("")
    const id = useParams()

    // Yacht Deatils
    const[receivedata,setReceivedata]=useState("")
    const[carouselImage, setCarouselImage] = useState([])
    const [data, setData] =useState()



 

   
  useEffect(()=>{
    axios
    .get(`/getyachtdeatils?id=${id}`)
    .then((res) => {
      console.log(" Yacht deatils Received ");
      // console.log(revdata)
      setReceivedata(res.data.users);
      console.log(res.data.users);
      const storeArray =[]
      for (let index = 0; index < res.data.users.length; index++) {
        storeArray.push(res.data.users[index].yacht_image.split(','))
        // setCarouselImage(res.data.users[index].yacht_image.split(','));
        console.log(res.data.users[index].yacht_image.split(','));
      }
      setCarouselImage(storeArray)
      console.log(storeArray)
      console.log(carouselImage)
      // console.log(data)
      // console.log(res.users[0].agent_name)
    })
    .catch(() => {
      console.log("error receiving data");
    });
  },[])

  // useEffect(()=>{
  //   axios
  //   .get(`/getyachtdeatils?id=${id}`)
  //   .then((res) => {
  //     console.log(" Yacht deatils Received ");
  //     // console.log(revdata)x
  //     setCarouselImage(res.data.users[1].yacht_image.split(','));
  //     console.log(res.data.users[id].yacht_image.split(','));
  //     // console.log(res.users[0].agent_name)
  //   })
  //   .catch(() => {
  //     console.log("error receiving data");
  //   });
  // },[])
 

  
    

  return (
    <>
      <section className={s.cardsurface}>
      
        {receivedata ? (
          receivedata.map((elem) => {
            const {
              id,
              yacht_image,
              yacht_name,
              description,
              capacity,
              time,
              price,
              hours_value,
              sailing,
              anchorage,
            } = elem;
            console.log(elem.yacht_image)

            return (
              <div className={s.card_container} key={id}>
                <div className={s.card}>
                  <div className={s.card_body}>
                  <div className={s.detailsCarousel}>
                    {<Carousel autoPlay infiniteLoop showThumbs={false} showArrows={false} swipeable={true} stopOnHover={true} showStatus={false}>
                      {
                        elem.yacht_image.split(',').map((image) => {
                          return (
                            <div key={image}>
                              <img src={`${aws_bucket_url}/${image}`} alt="Car" />
                            </div>
                          )
                        })
                      }
                    </Carousel>}
                  </div>
                    {/* <img src={yatch_image} alt="/" /> */}
                    {/* <img  src={aws_bucket_url + '/' + `${yacht_image}`} alt="/" /> */}
                    {/* src={aws_bucket_url + '/' + `${row.yatch_image}`} */}
                    <div className={s.designbody}>
                      <span></span>
                      
                      <h3 className={s.card_title}>{yacht_name}</h3> 
                      <IoShareOutline className={s.sharelogo} size={25} />
                    </div>
                    <div className={s.card_description}>
                      <p>{description}</p>
                    </div>
                    <div className={s.cardinfo}>
                      <div className={s.separate}>
                          <IoIosPeople className={s.proplelogo} size={25}/>&nbsp;&nbsp;&nbsp;
                          <div className={s.sectiondivision}>
                              <h3>{capacity} people</h3>
                          </div>
                      </div>
                      <h4>
                       Starts from&nbsp; ₹{price}/3Hrs
                      </h4>
                    </div>
                    <div className={s.foody}>
                      <div className={s.separate}>
                          <BiDrink className={s.drinklogo} size={25}/>&nbsp;&nbsp;&nbsp;
                          <div className={s.food_and_drink}>
                              <h3>Welcome Drink Incl*</h3>
                              <span>For food menu contact us</span>
                          </div>
                      </div>
                      <span></span>
                    </div>
                    <div className={s.booksailing}>
                      <div className={s.separate}>
                      <MdAnchor className={s.anchorlogo} size={25}/>&nbsp;&nbsp;&nbsp;
                      <div className={s.sailing}>
                        <h3>Sailing / Anchoring</h3>
                        <span>
                          {sailing} Hrs Sailing + {anchorage} Hr Anchoring
                        </span>
                      </div>
                      </div>
                      <h3 className={s.booknow} onClick={()=>{
                          setShow(true)
                          setShowTime(time)
                          setPrice(price)
                          setYachtName(yacht_name)
                          
                      }}>Enquire Now &gt;</h3>
                    </div>
                  {
                      show && <YachtForm 
                      show ={show} 
                      setShow ={setShow}
                      showTime ={showTime}
                      price = {price}
                      yachtName ={yachtName}
                      />
                  }
                  </div>
                </div>
              </div>
            );
          })
        ):<></>}
      </section>
    </>
  );
};

export default YatchMenu;


// import React,{useEffect, useState} from "react";
// import s from "./yachts.module.css";
// import { IoShareOutline } from "react-icons/io5";
// import {IoIosPeople} from "react-icons/io"
// import {BiDrink} from 'react-icons/bi'
// import {MdAnchor} from 'react-icons/md'
// import YachtForm from "./YachtForm";
// import axios from '../../helpers/Axios'

// const YatchMenu = ({ menu }) => {

//     const [show, setShow] = useState(false);
//     const [showTime, setShowTime] =useState("");
//     const [price, setPrice] = useState("");



//     // Yacht Deatils
//     const[receivedata,setReceivedata]=useState("")

//   //  useEffect(()=>{
//   //   axios.get('/fetchyachtdeatils')
//   //   .then((res)=>{
//   //     setReceivedata(res.users)
//   //     console.log(setReceivedata)
//   //     console.log(receivedata)

     
//   //   })
//   //   .catch(()=>{
//   //     console.log("Error Fetching data")
//   //   })
//   //  },[])

//    useEffect(() => {
//     axios
//       .get(`/getyachtdeatils`)
//       .then((res) => {
//         console.log(" Yacht deatils Received ");
//         // console.log(revdata)
//         setReceivedata(res.data.users);
//         console.log(res.data.users);
       

//         // console.log(res.users[0].agent_name)
//       })
//       .catch(() => {
//         console.log("error receiving data");
//       });
//   }, []);

  
    

//   return (
//     <>
      
//       <section className={s.cardsurface}>
//             {
//               receivedata.map((data)=>{
//                 return(
//                   <div className={s.card_container} key={data.id}>
//               <div className={s.card}>
//                 <div className={s.card_body}>
//                   <img src={data.yacht_image} alt="/" />
//                   <div className={s.designbody}>
//                     <span></span>
//                     <h3 className={s.card_title}>{data.yacht_image}</h3> 
//                     <IoShareOutline className={s.sharelogo} size={25} />
//                   </div>
//                   <div className={s.card_description}>
//                     <p>{data.description}</p>
//                   </div>
//                   <div className={s.cardinfo}>
//                     <div className={s.separate}>
//                         <IoIosPeople className={s.proplelogo} size={25}/>&nbsp;&nbsp;&nbsp;
//                         <div className={s.sectiondivision}>
//                             <h3>{data.capacity} people</h3>
//                             <span>{data.time}</span>
//                         </div>
//                     </div>
//                     <h4>
//                      Starts from&nbsp; ₹{data.price}/3Hrs
//                     </h4>
//                   </div>
//                   <div className={s.foody}>
//                     <div className={s.separate}>
//                         <BiDrink className={s.drinklogo} size={25}/>&nbsp;&nbsp;&nbsp;
//                         <div className={s.food_and_drink}>
//                             <h3>Welcome Drink Incl*</h3>
//                             <span>For food menu contact us</span>
//                         </div>
//                     </div>
//                     <span></span>
//                   </div>
//                   <div className={s.booksailing}>
//                     <div className={s.separate}>
//                     <MdAnchor className={s.anchorlogo} size={25}/>&nbsp;&nbsp;&nbsp;
//                     <div className={s.sailing}>
//                       <h3>Sailing / Anchoring</h3>
//                       <span>
//                         {data.sailing} Hrs Sailing + {data.anchorage} Hr Anchoring
//                       </span>
//                     </div>
//                     </div>
//                     <h3 className={s.booknow} onClick={()=>{
//                         // setShow(true)
//                         // setShowTime(time_interval)
//                         // setPrice(rental)
//                     }}>Enquire Now &gt;</h3>
//                   </div>
//                 {
//                     show && <YachtForm 
//                     show ={show} 
//                     setShow ={setShow}
//                     showTime ={showTime}
//                     price = {price}
//                     />
//                 }
//                 </div>
//               </div>
//             </div>

//                 )
//               })
//             }

// </section>
//     </>
//   );
// };

// export default YatchMenu;
