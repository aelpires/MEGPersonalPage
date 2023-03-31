import React from 'react';
import "../styles/Services.css"
import { MdPersonalInjury } from 'react-icons/md';
import { TbHeartPlus } from 'react-icons/tb';
import { BiHealth } from "react-icons/bi";
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
                        <MdPersonalInjury className='services-icon' />
                        <p className='services-title'>Physical Therapy</p>
                        <p className='services-desc'>Personalized physical therapy services in a comfortable and private studio. With a variety of techniques and modalities to help you recover from injury, reduce pain, and improve your strength and flexibility. With a focus on your specific needs and goals, I'll work with you to create a customized treatment plan to help you achieve optimal results. </p>
                    </div>
                    <div className="services-card">
                        <BiHealth className='services-icon' />
                        <p className='services-title'>Woman Health</p>
                        <p className='services-desc'>Voluptate laborum ullamco fugiat et labore consectetur eiusmod cillum ut. Deserunt fugiat laborum enim minim reprehenderit veniam est velit consequat dolor. Commodo in pariatur ullamco qui ad qui ea id minim cillum cillum ad. In voluptate aliquip laborum proident adipisicing aliqua fugiat consectetur do duis anim nulla. </p>
                    </div>
                    <div className="services-card">
                        <TbHeartPlus className='services-icon' />
                        <p className='services-title'>Movement</p>
                        <p className='services-desc'>Irure commodo officia aute amet aute dolore duis officia elit cupidatat laborum occaecat. Nisi sunt non duis elit aliqua. Exercitation enim quis nulla tempor ea qui aliquip fugiat anim minim. Duis qui dolore ex ut nostrud minim deserunt. Ipsum in dolore proident deserunt ullamco aliquip et. Irure do nulla excepteur cupidatat minim. </p>
                    </div>
                </motion.div>
              </div>
          </div>
      </>
  )
};

export default Services;
