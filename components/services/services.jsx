import React from 'react';
import "./services.css";
import Image1 from "../../assets/D.jpg";
import Image2 from "../../assets/html.png";
import Image3 from "../../assets/CSS.jpeg";

const data = [
    {
      id: 1,
      image: Image1,
      title: "Dean's List Award",
    },
    {
      id: 2,
      image: Image2,
      title: "HTML",
    },
    {
      id: 3,
      image: Image3,
      title: "CSS",
    },
  ];
  
const Services =() => {
    return(
       <section className="services container section" id="services">
        <h1 className="section_title">Certificate</h1>
        <div className="services_container grid">
            {data.map(({id,image,title,description}) => {
                return(
                    <div className="services_card" key={id}>
                        <img src={image} alt="" className='services_img' />
                        <h3 className="sevices_title">{title}</h3>
                        <p className="services_ description">{description}</p>
                    </div>

                );
            })}
        </div>
       </section>
    )
}

export default Services