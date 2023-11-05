import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { mediaQueries, lightTheme } from './Themes'
import { Design, Develope } from '../SideComponents/Svgs';

import LoadingPage from "../SideComponents/LoadingPage";
import { lazy, Suspense } from "react";

const SocialIcons = lazy(() => import('../SideComponents/SocialIcons'));
const PowerButton = lazy(() => import('../SideComponents/PowerButton'));
const LogoComponent = lazy(() => import("../SideComponents/LogoComponent"));
const ParticleComponent = lazy(() => import('../SideComponents/ParticleComponent.js'));
const BigTittle = lazy(() => import('../SideComponents/BigTittle'));



const Box = styled.div`
** background-color: ${props => props.theme.body};
width: 100vw;
height:100vh;
position: relative;
display: flex;
justify-content: space-evenly;
align-items: center;


${mediaQueries(800)`
            flex-direction:column;  
            padding:8rem 0;
height:auto;
            &>*:nth-child(5){
              margin-bottom:5rem;
            }
           
  `};
  ${mediaQueries(680)`
           
            &>*:nth-child(5){
              margin-bottom:4rem;
            }
           
  `};
`;

const Main = styled.div`
border: 2px solid ${props => props.theme.text};
color: ${props => props.theme.text};
background-color: transparant;
backdrop-filter: blur(4px);
padding: 2rem;
width: 30vw;
height: 60vh;
z-index:3;
line-height: 1.5;
cursor: pointer;
${mediaQueries(960)`
            height: 55vh;
  `};

  ${mediaQueries(800)`
              width: 50vw;
              height: max-content;

  `};

font-family: 'Ubuntu Mono',monospace;
display: flex;
flex-direction: column;
justify-content: space-between;

&:hover{
    color: ${props => props.theme.body};
    background-color: ${props => props.theme.text};
}
`

const Title = styled.h2`
display: flex;
justify-content: center;
align-items: center;
font-size: calc(1em + 1vw);
${mediaQueries(960)`
          font-size:calc(0.8em + 1vw);
  `};

  ${mediaQueries(800)`
          font-size:calc(1em + 2vw);
          margin-bottom:1rem;
  `};

  ${mediaQueries(680)`
                      font-size:calc(1em + 1vw);
  `};
  ${mediaQueries(400)`
                      font-size:calc(0.8em + 1vw);
                      svg{
                        width:30px;
                        height:30px;
                      }
  `};

${Main}:hover &{
    &>*{
        fill:${props => props.theme.body};
    }
}

&>*:first-child{
margin-right: 1rem;
}
`

const Description = styled.div`
color: ${props => props.theme.text};
font-size: calc(0.6em + 1vw);
padding: 0.5rem 0;


${Main}:hover &{
   
        color:${props => props.theme.body};
    
}
${mediaQueries(800)`
            font-size: calc(0.8em + 1vw);

  `};

  ${mediaQueries(680)`
                      font-size:calc(0.7em + 1vw);

              

  `};

  ${mediaQueries(400)`
                      font-size:calc(0.5em + 1vw);

              

  `};
strong{
    margin-bottom: 1rem;
    text-transform: uppercase;
}
ul,p{
    margin-left: 2rem;
}
`

const Skills = () => {
    return (
        <ThemeProvider theme={lightTheme}>
            <Suspense fallback={<LoadingPage />}>
                <Box>
                    <LogoComponent theme='light' />
                    <SocialIcons theme='light' />
                    <PowerButton />
                    <ParticleComponent theme='light' />
                    <Main>
                        <Title>
                            <Design width={40} height={40} /> FRONTEND
                        </Title>
                        <Description>
                            Bringing new ideas to life, crafting user-friendly websites
                        </Description>
                        <Description>
                            <strong>Skills</strong>
                            <p>
                                Html, Css, JavaScript, React, Redux, Sass, Bootstrap, Framer Motion.
                            </p>
                        </Description>
                        <Description>
                            <strong>Tools</strong>
                            <p>
                                VScode, Github, Figma, Postman, Swagger.
                            </p>
                        </Description>
                    </Main>
                    <Main>
                        <Title>
                            <Develope width={40} height={40} /> BACKEND
                        </Title>
                        <Description>

                            <strong>Skills</strong>
                            <p>
                                <br></br>
                                <li>MongoDb</li>
                                <br></br>
                                <li>NodeJs</li>
                                <br></br>
                                <li>API's</li>
                                <br></br>
                                <li>Git</li>
                            </p>
                        </Description>
                        <br></br>
                    </Main>
                    <BigTittle text="SKILLS" top="80%" right="37%" />
                </Box>
            </Suspense>
        </ThemeProvider>
    )
}

export default Skills