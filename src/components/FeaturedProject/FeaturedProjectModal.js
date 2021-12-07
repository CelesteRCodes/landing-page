import React, { useState } from "react";

import growbetterhome from '../../assets/growbetterhome.jpg';
import growbetterlogo from '../../assets/logo.jpg';
import growbetterplantdetails from '../../assets/growbetterplantdetails.jpg';
import growbettermasterlog from '../../assets/growbettermasterlog.jpg';

import Carousel from 'react-bootstrap/Carousel';
import classes from './FeaturedProjectModal.module.css';
import CloseIcon from '@mui/icons-material/Close';

const FeaturedProject = (props) => {
 const [index, setIndex] = useState(0);
 const [show, setShow] = useState(true);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  } 

  const handleClose = () => setShow(false);
  
  if(!props.show){
    return null
}
  const data = [
    {
      pic: growbetterhome,
      caption: "Home"
    },
    {
      pic: growbetterplantdetails,
      caption: "Plant Details Page"
    },
    {
      pic: growbettermasterlog,
      caption: "Grower's Log Page"
    }
  ]

  return (
    
    <div className={classes.container}>
      
      <button 
        className={classes.closeBtn}
        onClick={handleClose}>
        <CloseIcon/>
      </button>

     <h2>Grow Better</h2>
     
      <div className={classes.heading}>

        <div className={classes.tech}>
          <h5> Tech Used </h5>
          <li>React</li>
          <li>JavaScript</li>
          <li>Python</li>
          <li>HTML,CSS</li>
        </div>

        <div className={classes.logo}>
          <img src={growbetterlogo} alt="" className={classes.logoImg} />
        </div>

        <div className={classes.updates}>
          <h5>In Progress</h5>
          <li>React UI</li>
          <li>Accessibility</li>
          <li>Testing</li>
          <li>Deploy</li>
        </div>
      </div>

     <a href="https://github.com/CelesteRCodes/app-project" className={classes.btn}>Github Repo</a>

      <Carousel activeIndex={index}
        onSelect={handleSelect}
        className={classes.carousel}>
        {data.map((slide, i) => {
          return (
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={slide.pic}
                alt="slider image"
              />
              <Carousel.Caption >
                <h3>{slide.caption}</h3>
              </Carousel.Caption>
            </Carousel.Item>
          )
        })}
      </Carousel>
    </div>

  );
};

export default FeaturedProject;