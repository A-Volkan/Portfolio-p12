import React, { lazy, Suspense } from 'react'
import { motion } from 'framer-motion'
import styled, { keyframes, ThemeProvider } from 'styled-components'
import { DarkTheme, mediaQueries } from './Themes';
import astronaut from '../assets/Images/astro3.png'
import LoadingPage from '../SideComponents/LoadingPage';


const LogoComponent = lazy(() => import('../SideComponents/LogoComponent'));
const SocialIcons = lazy(() => import('../SideComponents/SocialIcons'));
const PowerButton = lazy(() => import('../SideComponents/PowerButton'));
const ParticleComponent = lazy(() => import('../SideComponents/ParticleComponent'));
const BigTittle = lazy(() => import('../SideComponents/BigTittle'));



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
            <Suspense fallback={<LoadingPage />}>
                <Box>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1, transition: { duration: 0.5 } }}
                        exit={{ opacity: 0, transition: { duration: 0.5 } }}>
                        <LogoComponent theme='dark' />
                        <SocialIcons theme='dark' />
                        <PowerButton />
                        <ParticleComponent theme='dark' />

                        <Spaceman>
                            <img src={astronaut} alt="spaceman" />
                        </Spaceman>
                        <Main>
                            <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0, transition: { duration: 1, delay: 1 } }}>
                                I'm a Web Developer located in France, dedicated to crafting elegant and user-friendly websites.
                                <br /> <br />
                                I'm interested in the whole frontend stack, I enjoy exploring new technologies and embarking on exciting projects.
                                Beyond coding, I wear the hats of a music producer and sound engineer, bringing creativity to both digital and auditory realms.
                                <br></br>
                                <br></br>
                                My focal point is transforming clients' visions into reality, treating every project as a unique piece of art.
                                <br /> <br />
                                Let's connect and explore the boundless possibilities
                                ———Find me through my social links.
                            </motion.div>
                        </Main>


                        <BigTittle text="ABOUT ME" top="10%" left="5%" />
                    </motion.div>
                </Box>
            </Suspense>
        </ThemeProvider>

    )
}

export default AboutPage