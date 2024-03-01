import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Contact.css";
import { motion } from "framer-motion";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { AiTwotoneMail } from "react-icons/ai";

const Contact = () => {
    const [openModal, setOpenModal] = useState(false);

    const fade = {
        opacity: 1,
        transition:{
            duration: 1.5
        }
    }

    const verticalLeft = {
        opacity: 1,
        y: 0,
        transition:{
            duration: 1.5
        }
    }

    const contactVariants = {
		hidden: {
			opacity: 0,
			x: "-50%",
		},
		visible: {
			opacity: 1,
			x: 0,
			transition: {
				duration: 1.4,
			},
		},
	};


  return (
      <>
        <div className="contact" id='contact'>
            <div className="container">
                <motion.div className="heading" initial={{opacity: 0}} whileInView={fade} viewport={{ once: true }}>
                    <p className="heading-sub-text">Curiosa/o?</p>
                    <p className='heading-text'>Entre em contacto</p>
                </motion.div>
                <div className="contact-box">
                    <motion.div className="left-box" initial={{opacity: 0, y: '-50px'}} whileInView={verticalLeft}>
                        <div className="contact-heading">
                            <p>Se tem duvidas ou quer entrar em contacto, para além das redes sociais, pode também contactar através:</p>
                        </div>
                        <div className="contact-hello">
                            <p> Moramos longe? Não tem problema nenhum.
                                <br/>Encontre aqui todos os serviços que estou oferecendo atualmente na modalidade online
                            </p>
                        </div>
                    </motion.div>
                    <motion.div className="right-box" initial={{ opacity: 0, y: '50px' }} whileInView={verticalLeft}>
                        <motion.span
                            onClick={() => window.location.href = 'mailto:mariaghizellini@gmail.com'}
                            variants={contactVariants}
                            initial='hidden'
                            whileInView='visible'>
                            <a
                                className='contact-Whats'>
                                  <AiTwotoneMail /> Email
                            </a>        
			            </motion.span>                                
                        <motion.span
                            onClick={() => setOpenModal(true)}
                            variants={contactVariants}
                            initial='hidden'
                            whileInView='visible'>
                            <a
                                className='contact-Whats'>
                                <AiOutlineWhatsApp /> WhatsApp
                            </a>           
			            </motion.span>
                        {openModal && (
                            <div className="modal">
                                <div className="modal-content">
                                    <span className="close" onClick={() => setOpenModal(false)}>&times;</span>
                                    <h2>WhatsApp Contact</h2>
                                    <p>Phone Number: +1234567890</p>
                                </div>
                            </div>
                        )}
                    </motion.div>
                </div>
            </div>
        </div>
    </>
  );
};

export default Contact;
