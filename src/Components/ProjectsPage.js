import React, { lazy, Suspense, useEffect, useState } from 'react'
import styled from 'styled-components'
import img from '../assets/Images/project.jpeg'

import { Projects } from '../data/ProjectData';
import ProjectsComponent from './ProjectsComponent'
import { motion } from 'framer-motion'

import { mediaQueries } from "./Themes";
import LoadingPage from "../SideComponents/LoadingPage";

const BigTittle = lazy(() => import('../SideComponents/BigTittle'));
const SocialIcons = lazy(() => import('../SideComponents/SocialIcons'));
const PowerButton = lazy(() => import('../SideComponents/PowerButton'));
const LogoComponent = lazy(() => import('../SideComponents/LogoComponent'));
const CrochetComponent = lazy(() => import('../SideComponents/CrochetComponent'));


const MainContainer = styled(motion.div)`
background-image:url(${img});
background-size:cover;
background-repeat: no-repeat;
background-attachment: fixed;
background-position: center;


`
const Container = styled.div`
background-color: ${props => `rgba(${props.theme.bodyRgba},0.8)`};
position:relative;
padding-bottom:5rem;
width:100%;
height:auto;

`
const Center = styled.div`
display: flex;
justify-content: center;
align-items:center;
padding-top:10rem;

${mediaQueries(480)`
    padding-top: 7rem;
    
  
  `};
`;
const Grid = styled.div`
display: grid;
grid-template-columns: repeat(2, minmax(calc(10rem + 15vw), 1fr));
grid-gap: calc(1rem + 2vw);
${mediaQueries(800)`
    grid-template-columns: 100%;

    
  
  `};
`;
// Framer-motion config
const container = {

    hidden: { opacity: 0 },
    show: {
        opacity: 1,

        transition: {
            staggerChildren: 0.5,
            duration: 0.5,
        }
    }

}

const ProjectsPage = () => {

    const [numbers, setNumbers] = useState(0);

    useEffect(() => {
        let num = (window.innerHeight - 70) / 30;
        setNumbers(parseInt(num));
    }, [])

    return (
        <Suspense fallback={<LoadingPage />}>
            <MainContainer variants={container}
                initial='hidden'
                animate='show'
                exit={{
                    opacity: 0, transition: { duration: 0.5 }
                }}>
                <Container>
                    <LogoComponent />
                    <PowerButton />
                    <SocialIcons />
                    <CrochetComponent numbers={numbers} />
                    <Center>
                        <Grid>
                            {
                                Projects.map(project => {
                                    return <ProjectsComponent key={project.id} project={project} />
                                })
                            }
                        </Grid>

                    </Center>
                    <BigTittle text="PROJECTS" top="-1rem" left="5rem" />
                </Container>
            </MainContainer>
        </Suspense>
    )
}

export default ProjectsPage