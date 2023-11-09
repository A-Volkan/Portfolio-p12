import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import Astro from '../assets/Images/astro2.png'
import { motion } from 'framer-motion';
import { mediaQueries } from "./Themes";

const Box = styled.div`
position:absolute;
left:50%;
top:50%;
transform: translate(-50%, -50%);
z-index:1;

width:65vw;
height:70vh;
display:flex;

background: linear-gradient(
    to right,
    ${props => props.theme.body} 50%,
    ${props => props.theme.text} 50%) bottom,
    linear-gradient(
    to right,
    ${props => props.theme.body} 50%,
    ${props => props.theme.text} 50%) top;
    background-repeat:no-repeat;
    background-size: 100% 2px;
    border-left: 2px solid ${props => props.theme.body};
    border-right: 2px solid ${props => props.theme.text};


  ${mediaQueries(960)`
    width: 70vw;
  `};

  ${mediaQueries(800)`
    width: 50vw;
    background-size: 100% 2px;

    flex-direction:column;
    justify-content:space-between;
  
  `};

  ${mediaQueries(640)`
    width: 60vw;
    
  
  `};

  ${mediaQueries(480)`
    width: 70vw;
    
  
  `};
  ${mediaQueries(320)`
    width: 60vw;
    
  
  `};

  @media only screen and (max-width: 475px) {
    background: none;
    border: none;
    border-top: 2px solid ${(props) => props.theme.body};
    border-bottom: 2px solid ${(props) => props.theme.text};
    background-image: linear-gradient(
        ${(props) => props.theme.body} 50%,
        ${(props) => props.theme.text} 50%
      ),
      linear-gradient(
        ${(props) => props.theme.body} 50%,
        ${(props) => props.theme.text} 50%
      );
    background-size: 2px 100%;
    background-position: 0 0, 100% 0;
    background-repeat: no-repeat;
  }

  //height:55vh;
`
const SubBox = styled.div`
width: 50%;
position: relative;
display: flex;

.img{
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%,0%);
    width: 100%;
    height: auto;
}

${mediaQueries(800)`
      width: 100%;
    height: 50%;
      .pic {
    
    width: 70%;
    
  }

  `};

  ${mediaQueries(640)`
  
      .pic {
    
    width: 80%;
    
  }

  `};

  ${mediaQueries(480)`
     

      .pic {
    
    width: 90%;
    
  }

  `};
  ${mediaQueries(320)`
     

     .pic {
   
   width: 80%;
   
 }

 `};
`;

const Text = styled.div`
font-size: calc(1rem + 1.5vw);
color: ${props => props.theme.body};
padding: 2rem;
cursor: pointer;

display: flex;
flex-direction: column;
justify-content: space-evenly;

&>*:last-child{
    color: ${props => `rgba(${props.theme.bodyRgba},0.6)`};
    font-size: calc(0.5rem + 1.5vw);
    font-weight:300;
    
}

${mediaQueries(640)`
    font-size: calc(1rem + 1.5vw);


`};
${mediaQueries(320)`
     padding: 1rem;



`};
`;



const Intro = () => {

  const [height, setHeight] = useState("55vh");

  useEffect(() => {
    if (window.matchMedia("(max-width: 800px)").matches) {
      setHeight("70vh");
    }
    if (window.matchMedia("(max-width: 320px)").matches) {
      setHeight("60vh");
    }
  }, []);

  return (
    <Box initial={{ height: 0 }}
      animate={{ height: height }}
      transition={{ type: "spring", duration: 2, delay: 1 }} >
      <SubBox>
        <Text>
          <h1>Hello,</h1>
          <h3>I'm Volkan</h3>
          <h5>Im a Frontend Web Developer and a Music producer</h5>
          <h6>I’m thrilled to embark on this journey and can’t wait to see where it will lead me. I am eager to apply my creativity and technical skills to new challenges and opportunities. Let’s create some magic together !</h6>
        </Text>
      </SubBox>
      <SubBox>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 2 }}>
          <img className='img' src={Astro} alt='Profile'></img>
        </motion.div>
      </SubBox>
    </Box>
  )
}

export default Intro;