import React from 'react';
import "../styles/About.css"
import { motion } from "framer-motion";
import ProfileImg from '../images/sssss.png'

const About = () => {  
  
  const horizontal ={
    x:0, 
    opacity: 1, 
    transition:{type: 'spring', duration: 2,bounce: 0.3}
  }

  const vertical ={
    y:0, 
    opacity: 1, 
    transition:{type: 'spring', duration: 2,bounce: 0.3}
  }

  return (
      <>
          <div  className="about" id='about'>
              <div className="container">
                  <motion.div initial={{x: '-100%', opacity: 0}} whileInView={horizontal} viewport={{ once: true }} className="heading">
                    <p className="heading-sub-text">About Me</p>
                    <p className='heading-text'>Sobre Mim</p>
                  </motion.div>
                  <div className="split-about">
                    <motion.div initial={{x: '-100%', opacity: 0}} whileInView={horizontal} className='about-img'>
                        <img src={ProfileImg} alt="Profile" />
                    </motion.div>
                    <motion.div initial={{x: '100%', opacity: 0}} whileInView={horizontal} className="about-content">
                        <p className="about-text">A Maria Eugênia:</p>
                        <br />
                        <p className="about-subText"><b>Fisioterapeuta</b> inscrita na Ordem dos Fisioterapeutas em Portugal.<br/>
                          Tem <b>formação</b> em Fisioterapia pela Universidade Cidade de São Paulo e possui <b>graduação</b> em Dança pela Universidade Federal de Viçosa.
                          Começou sua jornada muito curiosa acerca do estudo do corpo e do movimento.<br />
                          <br />Foi bailarina e  professora de dança desde sempre.
                          Ao precisar de cuidados direcionados às lesões vindas da prática da Dança, encontrou a fisioterapia.
                          <br /><br />Foi amor à primeira vista, já que aquilo parecia mágico e a ajudava imensamente.
                          Resolveu pesquisar e depois estudar Fisioterapia.
                          Se apaixonou pela profissão e por ter oportunidade de fazer algo que sempre quis:
                          <br /><br /><b>Cuidar das pessoas.</b> E nesse caminho, tudo a levou a querer se dedicar  ao corpo e saúde da mulher.
                          Como uma paciente de endometriose e fibromialgia, muitas vezes oferece os cuidados dos quais, também precisa e recebe, o que torna esta troca ainda mais gratificante.
                        </p>
                    </motion.div>
                  </div>
                  <motion.div initial={{x: '-100%', opacity: 0}} whileInView={horizontal} viewport={{ once: true }} className="heading">
                    <p className="subHeading-text">Saúde da Mulher</p>
                  </motion.div>
                  <motion.div initial={{y: '100%', opacity: 0}} whileInView={vertical} className="about-content">
                        <p className="about-subDesc">
                          A fisioterapia na saúde da mulher é uma área que dedica-se ao cuidado abrangente da mulher em todas as etapas da vida: desde a adolescência até a maturidade plena. 
                          A fisioterapia é muito procurada na gravidez, uma fase extremamente especial na vida da mulher, e que pode também trazer desafios.<br/>
                          <b>Por isso, o cuidado e preparação do corpo para passar por este período de inúmeras mudanças, é essencial.</b>
                          <br/>Assim, a fisioterapeuta que cuida da saúde da mulher, pode estar presente promovendo movimento, na preparação do parto, no pós-parto, ou em casos de gestão do controle urinário e fecal, 
                          em condições cirúrgicas da mama, menopausa, alterações músculo esqueléticas relacionadas à pelve, disfunções sexuais e quadros de dor.
                          <br/>Muitas vezes alguns dos sintomas relacionados a estas disfunções são negligenciados.<b><i>Quem nunca ouviu que deixar escapar algumas pinguinhas de urina ao longo do dia, era normal?</i></b>
                          <br/><b><i>Nós sabemos que não é normal e reconhecemos a importância de abordar qualquer desconforto.</i></b> Também é importante dizer que <b><i>todos os tratamentos oferecidos são baseados em evidência científica, </i></b>
                          e isso é muito importante, pois significa que já foram <b><i>testados e aprovados pelo mais alto rigor científico.</i></b>
                          <br/><br/>Por isso, como especialista em Saúde da Mulher, estou pronta para proporcionar cuidados personalizados com toda a atenção e carinho que você merece.
                        </p>
                    </motion.div>
              </div>
          </div>
      </>
  )
};

export default About;
