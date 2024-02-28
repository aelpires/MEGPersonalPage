import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import servicesData from './services/Data';
import { MdPersonalInjury } from 'react-icons/md';
import { motion, AnimatePresence } from 'framer-motion';
import ProfileImg from "../images/ffff.png";
import '../styles/Services.css';
import { ImAccessibility } from "react-icons/im";


const Services = () => {
    const [selectedService, setSelectedService] = useState(null);

    const handleServiceClick = (serviceId) => {
        const service = servicesData.find(service => service.id === serviceId);
        setSelectedService(service);
    };

    const handleCloseServicePopup = () => {
        setSelectedService(null);
    };

    const horizontal ={
        x:0, 
        opacity: 1, 
        transition:{type: 'spring', duration: 2,bounce: 0.3}
      }

    return (
        <>
            <div className="services" id='services'>
                <div className="container">
                    <div className="heading">
                        <p className="heading-sub-text">Serviços</p>
                        <p className='heading-text'>Areas de foco</p>
                    </div>
                    <div className="services-box">
                        {servicesData.map(service => (
                            <motion.div initial={{x: '100%', opacity: 0}} whileInView={horizontal}>
                                <div key={service.id} onClick={() => handleServiceClick(service.id)} className="services-card">
                                    <div className='services-icon'>{service.icon}</div>
                                    <p className='services-title'>{service.title}</p>
                                    <p className='services-desc'>{service.subTitle}</p>  
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
            {/* Render pop-up */}
            <AnimatePresence>
                {selectedService && (
                    <motion.div className="service-popup-bg"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <motion.div className="service-popup"
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 50 }}
                        >
                            <button className="close-btn" onClick={handleCloseServicePopup}>Close</button>
                            <div className='img__logo'>
							    <img src={ProfileImg} alt='Main' className='service-pic-small' />
						    </div>
                            <div className='img__header'>
                            <img src={selectedService.mainImage} alt='Main' className='service-pic-header' />
                            </div>
                            <h2 className="service-title">{selectedService.title}</h2>
                            <h3 className="service-subtitle">{selectedService.subTitle}</h3>
                            <p className="service-text" dangerouslySetInnerHTML={{ __html: selectedService.text }}></p>
                            <div className="service-images">
                                {selectedService.images.map((imageUrl, index) => (
                                    <img key={index} src={imageUrl} alt={`Image ${index}`} className="service-image" />
                                ))}
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Services;



