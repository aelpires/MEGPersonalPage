import { MdOutlineSportsGymnastics } from "react-icons/md";
import { GiBackPain } from "react-icons/gi";
import { BsPeopleFill } from "react-icons/bs";
import { FaCommentMedical } from "react-icons/fa6";

// Data.js
const servicesData = [
    {
        id: 1,
        icon: <BsPeopleFill />,
        title: "Encontros",
        subTitle: "Seja sua amiga íntima!",
        mainImage: "https://i.ibb.co/6vpQL7N/pexels-marcus-aurelius-6787216.jpg",
        text: "Seja sua amiga íntima Nestes encontros, poderemos aprender mais sobre o nosso corpo, nossa saúde e sexualidade, nos conhecendo melhor e acolhendo a nossa individualidade.<br /><br />Eles podem acontecer na modalidade presencial ou on-line.<br />Aguarde por mais informações ou entre em contato na aba 'contato'. <br /><br />Presencial:<br /><br />Porto:<br /><br />Magenta Pilates (colocar link endereço que vá pro Google)<br /><br />Atelier Equilibrium (colocar link endereço que vá pro Google)",
        images: [
          "https://i.ibb.co/6vpQL7N/pexels-marcus-aurelius-6787216.jpg", // URL for image 1
          "https://i.ibb.co/Dtx8Hx4/pexels-andrea-piacquadio-3756165.jpg"  // URL for image 2
      ]
    },
    {
      id: 2,
      icon: <GiBackPain />,
      title: "Dor",
      subTitle: "A dor deve ser levada a sério",
      mainImage: "https://i.ibb.co/Dtx8Hx4/pexels-andrea-piacquadio-3756165.jpg",
      text: "<b>Toda dor é real.</b> Esta premissa serve como fundamento para qualquer profissional de saúde. <b>Na saúde da mulher</b> diversos são os quadros em que encontramos dor associada, como <b><i>vaginismo, vulvodínia, dor pélvica crônica, dor lombar,</b></i> e ainda as dores associadas ao <b><i>período menstrual</b></i>, além da tão falada <b><i>endometriose</b></i>.<br />Nesses casos, o <b><i>CFT (Cognitive Functional Therapy)</b></i> pode ser um grande aliado. Esta terapia foi adaptada da <b>Terapia Cognitivo Comportamental, da psicologia, e trazida para a área da fisioterapia e atividade física</b> e tem se mostrado ainda mais eficaz que muitos tratamentos já conhecidos (como o pilates, por exemplo) para tratar a dor.<br /><br />A melhor parte é que ela leva em conta aspectos comportamentais e mudanças de hábito, ou seja, vai para além do consultório.<br /><br />Se você convive com a dor e já ouviu que “não é tão ruim assim”, ou “você está exagerando” não deixe pra lá, a dor na saúde da mulher deve ser levada a sério e merece atenção e tratamento..",
      images: [
        "https://i.ibb.co/6vpQL7N/pexels-marcus-aurelius-6787216.jpg", // URL for image 1
        "https://i.ibb.co/Dtx8Hx4/pexels-andrea-piacquadio-3756165.jpg"  // URL for image 2
      ]
    },
    {
      id: 3,
      icon: <MdOutlineSportsGymnastics />,
      title: "Movimento",
      subTitle: "Nada melhor que praticar!",
      mainImage: "https://i.ibb.co/Dtx8Hx4/pexels-andrea-piacquadio-3756165.jpg",
      text: "A atividade física e o movimento são importantes ferramentas para nossa saúde. Através de práticas de movimento como Pilates ou Garuda, eu posso te ajudar a se sentir mais pronta para a vida.<br /><br />- <b>Pilates:</b> É um método muito reconhecido atualmente. Além de proporcionar aquelas coisas básicas que todo corpo precisa, como força e flexibilidade, ao aliar o trabalho respiratório, leva a um nível de atenção diferente ao corpo. Outra coisa interessante é que o pilates é um método muito estudado na área da saúde, tido como uma das melhores ferramentas para o tratamento da dor.<br /><br /><b>- Garuda:</b> É uma combinação perfeita: Yoga, Tai-chi e Pilates. Esse trio nos leva a explorar o corpo e o movimento de uma forma intensa e desafiante. Criado pelo James, em Londres, o Garuda está se espalhando pelo mundo e conquistando adeptos. Mas para saber exatamente o que é, nada melhor que praticar.",
      images: [
        "https://i.ibb.co/6vpQL7N/pexels-marcus-aurelius-6787216.jpg", // URL for image 1
        "https://i.ibb.co/Dtx8Hx4/pexels-andrea-piacquadio-3756165.jpg"  // URL for image 2
      ]
    },
    {
      id: 4,
      icon: <FaCommentMedical />,
      title: "Atendimentos",
      subTitle: "Sinta-se ouvida e acolhida.",
      mainImage: "https://i.ibb.co/Dtx8Hx4/pexels-andrea-piacquadio-3756165.jpg",
      text: "Você sabia que um estudo mostrou que a média de tempo que um profissional de saúde passa, na sua consulta, ouvindo o relato do paciente é x?<br />Dessa forma não é possível ter um diagnóstico ou tratamento apropriados.<br /><br />Através de uma escuta qualificada e empatia, neste atendimento você é a protagonista.<br />Quero que se sinta ouvida e acolhida.",
      images: [
        "https://i.ibb.co/6vpQL7N/pexels-marcus-aurelius-6787216.jpg", // URL for image 1
        "https://i.ibb.co/Dtx8Hx4/pexels-andrea-piacquadio-3756165.jpg"  // URL for image 2
      ]
    },
    // Add more services as needed
  ];
  
  export default servicesData;
  