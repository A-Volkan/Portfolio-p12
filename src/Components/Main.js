import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import styled, { keyframes } from 'styled-components'
import { motion } from 'framer-motion';
import { useState } from 'react'
import { Energy } from '../SideComponents/Svgs'
import Intro from './Intro'
import img from '../assets/Images/stars.png'
import { mediaQueries } from "./Themes";
import LoadingPage from "../SideComponents/LoadingPage";
import { lazy, Suspense } from "react";


const PowerButton = lazy(() => import('../SideComponents/PowerButton'));
const LogoComponent = lazy(() => import('../SideComponents/LogoComponent'));
const SocialIcons = lazy(() => import('../SideComponents/SocialIcons'));




const MainContainer = styled.div`
background: ${props => props.theme.body};
width: 100vw;
height: 100vh;
overflow:hidden;


position: relative;

h2,h3,h4,h5,h6{
  font-family:'Karla', sans-serif ;
  font-weight:500;
}
h2 {
    ${mediaQueries(640)`
      font-size:1.2em;

  `};

    ${mediaQueries(480)`
      font-size:1em;

  `};
  }
`;

const Container = styled.div`
padding: 2rem;
`

const Contact = styled.a`
color: ${(props) => (props.click ? props.theme.body : props.theme.text)};
position: absolute;
top: 2rem;
right: calc(1rem + 2vw);
text-decoration: none;
z-index:1;
`

const PROJECTS = styled(NavLink)`
color: ${(props) => (props.click ? props.theme.body : props.theme.text)};
position: absolute;
top: 50%;
right: calc(1rem + 2vw);
transform: rotate(90deg) translate(-50%, -50%);
text-decoration: none;
z-index:1;
@media only screen and (max-width: 800px) {
    text-shadow: ${(props) => (props.click ? "0 0 4px #000" : "none")};
  }
`;

const WORK = styled(NavLink)`
color: ${props => props.click ? props.theme.body : props.theme.text};

position: absolute;
top: 50%;
left: calc(1rem + 2vw);
transform: translate(-50%, -50%) rotate(-90deg) ;
text-decoration: none;
z-index:1;
@media only screen and (max-width: 800px) {
    text-shadow: ${(props) => (props.click ? "0 0 4px #000" : "none")};
  }
`;

const ABOUT = styled(NavLink)`
color: ${props => props.click ? props.theme.body : props.theme.text};
text-decoration: none;
z-index:1;
`
const BottomBar = styled.div`
position: absolute;
bottom: 1rem;
left: 0;
right: 0;
width: 100%;

display: flex;
justify-content: space-evenly;
`
const SKILLS = styled(NavLink)`
color: ${props => props.theme.text};
text-decoration: none;
z-index:1;
`
const rotate = keyframes`
from{
    transform: rotate(0);
}
to{
    transform: rotate(360deg);
}
`

const Center = styled.button`
position: absolute;
top: ${props => props.click ? '85%' : '50%'};
left: ${props => props.click ? '92%' : '50%'};
transform: translate(-50%,-50%);
border: none;
outline: none;
background-color: transparent;
cursor: pointer;

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
transition: all 1s ease;

&>:first-child{
    animation: ${rotate} infinite 8.5s linear;
}

&>:last-child{
    display: ${props => props.click ? 'none' : 'inline-block'};
    padding-top: 1rem;
}
@media only screen and (max-width: 800px) {
    top: ${(props) => (props.click ? "90%" : "50%")};
    left: ${(props) => (props.click ? "90%" : "50%")};
    width: ${(props) => (props.click ? "80px" : "150px")};
    height: ${(props) => (props.click ? "80px" : "150px")};
  }
  @media only screen and (max-width: 480px) {
    left: ${(props) => (props.click ? "86%" : "50%")};
  }
`;
const DarkSect = styled.div`
position: absolute;
top: 0;
background-color: #07073c;
background-image: url(${img});
background-size: cover;
background-position: center;
bottom: 0;
right: 50%;
width: ${props => props.click ? '50%' : '0%'};
height: ${props => props.click ? '100%' : '0%'};
z-index:1;
transition: height 0.5s ease, width 1s ease 0.5s;

${(props) =>
        props.click
            ? mediaQueries(800)`
       height: 50%;
  right:0;
  
  width: 100%;
  transition: width 0.5s ease, height 1s ease 0.5s;

  `
            : mediaQueries(800)`
       height: 0;
  
  width: 0;
  `};
`;

const Main = () => {

    const [click, setClick] = useState(false);
    const [showLoading, setShowLoading] = useState(true);

    // pour que la loading page dure plus longtemps seulement sur la page principal
    useEffect(() => {
        setTimeout(() => {
            setShowLoading(false);
        }, 800);


    }, []);

    const handleClick = () => setClick(!click);

    const mq = window.matchMedia("(max-width: 800px)").matches;

    return (
        <Suspense fallback={<LoadingPage />}>
            {showLoading ? (
                <LoadingPage />
            ) : (
                <MainContainer>
                    <DarkSect click={click} />
                    <Container>
                        <LogoComponent theme={click ? 'dark' : 'light'} />
                        <PowerButton />
                        {mq ? (
                            <SocialIcons theme="light" />
                        ) : (
                            <SocialIcons theme={click ? 'dark' : 'light'} />
                        )}
                        <Center click={click}>
                            <Energy onClick={() => handleClick()} width={200} height={200} fill='currentColor' />
                            <span>Click here</span>
                        </Center>
                        {mq ? (
                            <Contact click={+click} target="_blank" href="mailto:volknasc735@gmail.com">
                                <motion.h2
                                    initial={{
                                        y: -200,
                                        transition: { type: 'spring', duration: 1.5, delay: 1 }
                                    }}
                                    animate={{
                                        y: 0,
                                        transition: { type: 'spring', duration: 1.5, delay: 1, bounce: 0.45 }
                                    }}
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}

                                >
                                    Contact me !
                                </motion.h2>
                            </Contact>
                        ) : (
                            <Contact
                                click={+false}
                                target="_blank"
                                href="mailto:volknasc735@gmail.com"
                            >
                                <motion.h2
                                    initial={{
                                        y: -200,
                                        transition: { type: "spring", duration: 1.5, delay: 1 },
                                    }}
                                    animate={{
                                        y: 0,
                                        transition: { type: "spring", duration: 1.5, delay: 1 },
                                    }}
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                >
                                    Contact me !
                                </motion.h2>
                            </Contact>
                        )}
                        {mq ? (
                            <PROJECTS click={+click} to="/ProjectsPage">
                                <motion.h2
                                    initial={{
                                        y: -200,
                                        transition: { type: 'spring', duration: 1.5, delay: 1 }
                                    }}
                                    animate={{
                                        y: 0,
                                        transition: { type: 'spring', duration: 1.5, delay: 1 }
                                    }}
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                >
                                    Projects
                                </motion.h2>
                            </PROJECTS>
                        ) : (
                            <PROJECTS click={+false} to="/ProjectsPage">
                                <motion.h2
                                    initial={{
                                        y: -200,
                                        transition: { type: 'spring', duration: 1.5, delay: 1 }
                                    }}
                                    animate={{
                                        y: 0,
                                        transition: { type: 'spring', duration: 1.5, delay: 1 }
                                    }}
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                >
                                    Projects
                                </motion.h2>
                            </PROJECTS>
                        )}
                        <WORK to="/WorksPage" click={+click}>
                            <motion.h2
                                initial={{
                                    y: -200,
                                    transition: { type: 'spring', duration: 1.5, delay: 1 }
                                }}
                                animate={{
                                    y: 0,
                                    transition: { type: 'spring', duration: 1.5, delay: 1 }
                                }}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                Works details
                            </motion.h2>
                        </WORK>

                        <BottomBar>
                            <ABOUT to="/AboutPage" onClick={() => setClick(false)} click={mq ? +false : +click}>
                                <motion.h2
                                    initial={{
                                        y: 200,
                                        transition: { type: 'spring', duration: 1.5, delay: 1 }
                                    }}
                                    animate={{
                                        y: 0,
                                        transition: { type: 'spring', duration: 1.5, delay: 1 }
                                    }}
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                >
                                    About.
                                </motion.h2>
                            </ABOUT>
                            <SKILLS to="/skills">
                                <motion.h2
                                    initial={{
                                        y: 200,
                                        transition: { type: 'spring', duration: 1.5, delay: 1 }
                                    }}
                                    animate={{
                                        y: 0,
                                        transition: { type: 'spring', duration: 1.5, delay: 1 }
                                    }}
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                >
                                    My Skills.
                                </motion.h2>
                            </SKILLS>
                        </BottomBar>
                    </Container>
                    {click ? <Intro click={click} /> : null}
                </MainContainer>
            )}
        </Suspense >
    )
}

export default Main