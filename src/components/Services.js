import React from 'react';
import "../styles/Services.css"
import {IoColorWandOutline} from "react-icons/io5"
import {BiCodeAlt} from "react-icons/bi"
import { motion } from "framer-motion";

const Services = () => {

   const fade = {
    opacity: 1,
    transition:{
        duration: 1.4
    }
   }

  return (
      <>
          <div className="services" id='services'>
              <div className="container">
                <motion.div whileInView={fade} viewport={{ once: true }} initial={{opacity: 0}} className="heading">
                    <p className="heading-sub-text">What I can do</p>
                    <p className='heading-text'>Services</p>
                </motion.div>
                <motion.div className="services-box" whileInView={fade} initial={{opacity: 0}}>
                    <div className="services-card">
                        <BiCodeAlt className='services-icon' />
                        <p className='services-title'>Physical Therapy</p>
                        <p className='services-desc'>Personalized physical therapy services in a comfortable and private studio. With a variety of techniques and modalities to help you recover from injury, reduce pain, and improve your strength and flexibility. With a focus on your specific needs and goals, I'll work with you to create a customized treatment plan to help you achieve optimal results. </p>
                    </div>
                    <div className="services-card">
                        <IoColorWandOutline className='services-icon' />
                        <p className='services-title'>Others</p>
                        <p className='services-desc'>ut tellus elementum sagittis vitae et leo duis ut diam quam nulla porttitor massa id neque aliquam vestibulum morbi blandit cursus risus at ultrices mi tempus imperdiet nulla malesuada pellentesque.</p>
                    </div>
                </motion.div>
              </div>
          </div>
      </>
  )
};

export default Services;
