import React from 'react';
import "./about.css";
import Image from "../../assets/main1.png";

const About =() => {
    return(
       <section className="about container section" id ="about">
        <h2 className="section_title">About Me</h2>
        <div className="about_container grid">
            <img src={Image} alt="" className='about_img' />
            <div className="about_data grid">
              <div className="about_info">
                <p className="about_description">
                Hi! I'm Yemon, I am currently pursuing my bachelor's in Computer Science and Engineering at the University of Asia Pacific.I have a deep passion for Designing, and I'm eager to channel my creativity into this field. I value feedback and always strive to improve myself. I would love to discuss my uniqueness and receive your insights. My ultimate goal is to become a proficient Web Designer and Developer and pave my way towards becoming a successful man. Thank you!  
                </p>
                <a href="" className="btn">Download CV</a>
                </div> 
                {/*
                <div className="about_skills grid">
                    <div className="skills_data">
                     <div className="skills_titles">
                        <h3 className="skills_name">Development</h3>
                        <span className="skills_number ">90%</span>
                        </div>  
                        <div className="skills_bar">
                            <span className="skills_percentage development"></span>
                
                        </div>
                    </div>
                    <div className="skills_data">
                     <div className="skills_titles">
                        <h3 className="skills_name">UI/UX design</h3>
                        <span className="skills_number">80%</span>
                        </div>  
                        <div className="skills_bar">
                            <span className="skills_percentage ui_design"></span>
                
                        </div>
                    </div>
                    <div className="skills_data">
                     <div className="skills_titles">
                        <h3 className="skills_name">Photography</h3>
                        <span className="skills_number">60%</span>
                        </div>  
                        <div className="skills_bar">
                            <span className="skills_percentage photography"></span>
                
                        </div>
                    </div>
                   </div> 
                   */}
                
            </div>
        </div>
       </section> 
    )
}

export default About