import React from 'react'
import styled, { keyframes, ThemeProvider } from 'styled-components'
import { DarkTheme, mediaQueries } from './Themes';
import LogoComponent from '../SideComponents/LogoComponent';
import SocialIcons from '../SideComponents/SocialIcons';
import PowerButton from '../SideComponents/PowerButton';
import ParticleComponent from '../SideComponents/ParticleComponent';

import astronaut from '../assets/Images/astro3.png'
import BigTittle from '../SideComponents/BigTittle';

const Box = styled.div`
background-color: ${props => props.theme.body};
width: 100vw;
height:100vh;
position: relative;
overflow: hidden;
`
const float = keyframes`
0% { transform: translateY(-10px) }
50% { transform: translateY(15px) translateX(15px) }
100% { transform: translateY(-10px) }

`
const Spaceman = styled.div`
position: absolute;
top: 16%;
right: 5%;
width: 25vw;
animation: ${float} 2s ease-in-out infinite;
img{
    width: 100%;
    height: auto;
}
`
const Main = styled.div`
  border: 2px solid ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};
  padding: 2rem;
  width: 50vw;
  height: 60vh;
  z-index: 3;
  line-height: 1.5;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(0.6rem + 1vw);
 backdrop-filter: blur(4px);
  
  position: absolute;
  left: calc(5rem + 5vw);
  top: 10rem;
  font-family: 'Ubuntu Mono', monospace;
  font-style: italic;

  
  ${mediaQueries(640)`
          width: 60vw;
          height: 50vh;
          top:50%;
          left:50%;
          transform:translate(-50%,-50%);


  `};
  ${mediaQueries(480)`
          width: 50vw;
          height: auto;
          backdrop-filter: none;
          margin-top:2rem;

  `};

${mediaQueries(320)`
          padding: 1rem;
          font-size: calc(0.5rem + 1vw);
  `};

`




const AboutPage = () => {
    return (
        <ThemeProvider theme={DarkTheme}>
            <Box>

                <LogoComponent theme='dark' />
                <SocialIcons theme='dark' />
                <PowerButton />
                <ParticleComponent theme='dark' />

                <Spaceman>
                    <img src={astronaut} alt="spaceman" />
                </Spaceman>
                <Main>
                    I'm a Web Developer located in France. I love to create simple yet beautiful websites with great user experience.
                    <br /> <br />
                    I'm interested in the whole frontend stack Like trying new things and building great projects. I'm also an Music producer and sound engineer.
                    <br></br>
                    <br></br>
                    Focus on Bringing a client's vision to life .
                    <br /> <br />
                    I believe everything is an Art when you put your consciousness in it. You can connect with me via social links.
                </Main>


                <BigTittle text="ABOUT" top="10%" left="5%" />
            </Box>

        </ThemeProvider>

    )
}

export default AboutPage