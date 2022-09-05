import React from 'react';
import {BsFacebook} from "react-icons/bs";
import {FiInstagram} from "react-icons/fi";
import {AiFillLinkedin} from "react-icons/ai";
import "./Team.css"


export default function Team() {
  return (
    <section className="team-area" id="team">
    <div className="team-container">
        <div className="section-title">
            <h4>What we do</h4>
            <h2>Team Member</h2>
        </div>
        <div className="team shadow">
            {/* <div className="single-team" style="background-image: url('../../../public/banner-6.jpg');"> */}
            <div className="single-team img-thumbnail">
                {/* <img src="https://i.ibb.co/sgFyKzh/Cartoon-Pic-Ideas-for-DP-Profile-04.png" alt="" /> */}
                <div className="team-content">
                    <h4>Mahfujur Rahman Khaled<span>Web Devoloper</span></h4>
                    <div className="link">
                    <p><BsFacebook/></p>
                    <p><FiInstagram/></p>
                    <p><AiFillLinkedin/></p>
                    </div>
                    
                    {/* <a href=""><i class="fa-brands fa-facebook"></i></a>
                    <a href=""><i class="fa-brands fa-instagram"></i></a>
                    <a href=""><i class="fa-brands fa-twitter"></i></a>
                    <a href=""><i class="fa-brands fa-linkedin"></i></a> */}
                </div>
            </div>
            <div className="single-team img-thumbnail" >
            {/* <img src="https://i.ibb.co/sgFyKzh/Cartoon-Pic-Ideas-for-DP-Profile-04.png" alt="" /> */}
            <img src="../../../public/nishat_pic.jpg" alt="" />
                <div className="team-content">
                    <h4>Humaira Akila Nishat <span>Web Devoloper</span></h4>
                    <div className="link">
                    <p><BsFacebook/></p>
                    <p><FiInstagram/></p>
                    <p><AiFillLinkedin/></p>
                    </div>

                    {/* <a href=""><i class="fa-brands fa-facebook"></i></a>
                    <a href=""><i class="fa-brands fa-instagram"></i></a>
                    <a href=""><i class="fa-brands fa-twitter"></i></a>
                    <a href=""><i class="fa-brands fa-linkedin"></i></a> */}
                </div>
            </div>
            <div className="single-team img-thumbnail">
            {/* <img src="https://i.ibb.co/vxCMg45/man-cartoon-profile-vector-16047135.jpg" alt="" /> */}
                <div className="team-content">
                    <h4>Omar Faruk <span>Web Devoloper</span></h4>
                    <div className="link">
                    <p><BsFacebook/></p>
                    <p><FiInstagram/></p>
                    <p><AiFillLinkedin/></p>
                    </div>
                    {/* <a href=""><i class="fa-brands fa-facebook"></i></a>
                    <a href=""><i class="fa-brands fa-instagram"></i></a>
                    <a href=""><i class="fa-brands fa-twitter"></i></a>
                    <a href=""><i class="fa-brands fa-linkedin"></i></a> */}
                </div>
            </div>
        </div>
    </div>
</section>
  )
}
