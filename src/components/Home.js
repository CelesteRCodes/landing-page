import React, {useState} from "react";
import FeaturedProjectModal from "./FeaturedProject/FeaturedProjectModal";

import ContactModal from '../components/Contact/ContactModal'

const Home = () => {
  const [showFeaturedProject, setShowFeaturedProject] = useState(false);
  const [showContactModal, setShowContactModal] = useState(false);


  return (
    <>
    <div>  
      <h1>
        Celeste R Codes
      </h1>
    </div>

    <button 
    onClick={() => setShowFeaturedProject(true)}
    >
        Featured Project
    </button>
      <FeaturedProjectModal show={showFeaturedProject}/>

      <button 
    onClick={() => setShowContactModal(true)}
    >
        Contact
    </button>
      <ContactModal showContactModal={showContactModal}/>
    </>
  )
};

export default Home;