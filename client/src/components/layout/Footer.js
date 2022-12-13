//footer

import React from 'react'
import { Link  } from 'react-router-dom'
import '../../App.css'  
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AiFillLinkedin ,AiOutlineGithub } from "react-icons/ai";

const Footer = () => {
  return (
        <div className="footer">

                    <div className="contact">
                    <h4>Contact us</h4>
                        <span><i className="fas fa-phone"></i> &nbsp; +94778401180</span>
                        <span><i className="fas fa-envelope"></i> &nbsp;</span>
                    </div>

                  
                    <div className="footer-bottom">
                        
                          &copy; E-School.com | Designed By : <a href="https://www.linkedin.com/in/nadun-channa-3a4a181aa" target="_blank">Nadun Channa  <AiFillLinkedin size='2rem' /></a> <a href="https://github.com/nadunchanna98" target="_blank"> <AiOutlineGithub size='2rem' /></a>
                    </div>
                    <br/>
                    <p>
                     All Right Reserved &copy; 2022 | N_Frame   
                    </p>
        </div>


  )
}

export default Footer