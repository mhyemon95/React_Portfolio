import React from 'react';
import "./home.css";
import Me from "../../assets/main1.png";
import HeaderSocials from './headerSocials';
import ScrollDown from './scrollDown';
import Shapes from './shapes';

const Home =() => {
    return(
        <section className="home container" id="home">
            <div className='intro'>
                <img src={Me} alt="" className='home_img' />
                <h1 className='home_name'>Meherub Hossain Yemon</h1>
                <span className="home_education">I'm a Front-End developer
                </span>
               
               <HeaderSocials />

               <a href='#contact' className='btn'>Hire Me</a>

               <ScrollDown />
            </div>
            <Shapes/>
        </section>
    )
}

export default Home