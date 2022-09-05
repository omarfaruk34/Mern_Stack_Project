
import React, { useEffect, useState } from 'react';
import Slider from "react-slick";
import "./Review.css";
import {ImQuotesRight} from "react-icons/im"
import {AiFillStar} from "react-icons/ai"
import {AiOutlineStar} from "react-icons/ai"
const Review = () => {
  const settings = {
    dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
            autoplay: true,
            autoplaySpeed: 2000,
            cssEase: "linear",
          }
        },
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 2,
            autoplay: true,
            autoplaySpeed: 2000,
            cssEase: "linear",
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 1500,
            cssEase: "linear",
          }
        }
      ]
           };

   const [review, setReview] = useState([]);
           useEffect(() => {
               fetch('http://localhost:8000/reviews')
                   .then(res => res.json())
                   .then(data => setReview(data))
           }, []);
              
    return (
//        <div className='my-5 review-container'>
//             <p className='text-center text-danger'>Review</p>
//             <h1 className='text-center text-dark py-3'>Customers Review</h1>

//    <div className='review bg-white py-5'>
//    <Slider {...settings}>
//             <div className="review1 shadow">
//                  <div className="review1_1">
                    
//                  </div>
//                  <div className="review1-1">
//                  <h1 className='reviewer text-danger'> <span><ImQuotesRight/></span> <br /> John <br /> </h1>
//                  <p className='reviewrcont text-dark'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti, mollitia. <br /> <span className='text-muted'> <AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/><AiOutlineStar/></span> </p>
//                  </div>
//             </div>

//             <div className="review1 shadow">
//             <div className="review1_2">

//             </div>
//             <div className="review1-2">
//                  <h1 className='reviewer text-danger'> <span><ImQuotesRight/></span> <br /> Kane <br /> </h1>
//                  <p className='reviewrcont text-dark'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti, mollitia. <br /> <span className='text-muted'> <AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/><AiOutlineStar/></span> </p>

//                  </div>
//             </div>

//             <div className="review1 shadow">
//             <div className="review1_3">

//               </div>
//               <div className="review1-3">
//                  <h1 className='reviewer text-danger'> <span><ImQuotesRight/></span> <br /> Ben <br /> </h1>
//                  <p className='reviewrcont text-dark'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti, mollitia. <br /> <span className='text-muted'> <AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/><AiOutlineStar/></span> </p>

//                  </div>
//             </div>
//             </Slider>
// 			</div>
//        </div>
<section className="testimonial-area">
<div className="review-container">
    <div className="section-title">
        <h4>What we do</h4>
        <h2>What Clients Says</h2>
    </div>
    <Slider {...settings}>
    {review.map(item =>
    <div className="testimonial" key={item?._id}>
    
        <div className="single-testimonial">
            <p className='quote'><ImQuotesRight/></p>
            <p>{item?.review}</p>
            <div className="autor-info">
            <img src="https://i.ibb.co/sgFyKzh/Cartoon-Pic-Ideas-for-DP-Profile-04.png" alt="" />
                <h4>{item?.name}<br/><span>{item?.profession}</span></h4>
            </div>
        </div>
       
        </div>
)}
        </Slider>
      


</div>
</section>
        
    );
};

export default Review;

