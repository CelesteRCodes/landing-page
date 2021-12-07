import React from "react";

import classes from './ContactModal.module.css';
import CloseIcon from '@mui/icons-material/Close';

import dailyui from '../../assets/dailyuipic.jpg';

const ContactModal = (props) => {

  
  if(!props.showContactModal){
    return null
}
  return (
  <div className={classes.modal}>
    <button 
        className={classes.closeBtn}
        onClick="{handleClose}">
        <CloseIcon/>
      </button> 

    <img src={dailyui} alt="" className={classes.img}/>
    <div className={classes.links}>
    <a href="https://twitter.com/celestercodes1">Twitter</a>
    <a href="https://github.com/CelesteRCodes">Github</a>
    <a href="https://www.linkedin.com/in/celeste-rowe-102400208">LinkedIn</a>
    <a href="mailto:celestercodes@gmail.com">Email</a>
    </div>
  </div>
  )
};

export default ContactModal;