import React from 'react'
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { mediaQueries } from "./Themes";


const Box = styled.a`
padding:1rem;
width: calc(8rem + 15vw);
height:20rem;
text-decoration:none;
color: ${(props) => props.theme.text};
  border: 2px solid ${(props) => props.theme.text};
  backdrop-filter: blur(2px);
  box-shadow: 0 0 1rem 0 rgba(0, 0, 0, 0.2);
  cursor: pointer;

  display: flex;
  flex-direction: column;
  z-index: 5;

  &:hover {
    color: ${(props) => props.theme.body};
    background-color: ${(props) => props.theme.text};
    transition: all 0.3s ease;
  }
  ${mediaQueries(800)`
  width:calc(60vw);

`};
${mediaQueries(480)`
  
  height:18rem;

`};

${mediaQueries(400)`
  
  padding:0.8rem;
  

`};
`;

const Image = styled.div`
background-image: ${(props) => `url(${props.img})`};
background-size:cover;
width: 100%;
height:60%;
border:1px solid transparant;
background-position:center center;
${mediaQueries(600)`
    
    height:40%;
  `};
  ${mediaQueries(1024)`
    
    height:40%;
  `};
  
`


const Title = styled.h3`
  color: inherit;
  padding: 0.5rem 0;
  padding-top: 1rem;
  font-family: "Karla", sans-serif;
  font-weight: 700;
  ${mediaQueries(640)`
    font-size:calc(0.8em + 1vw);

  `};

  ${mediaQueries(400)`
    
    font-size:calc(0.6em + 1vw);



  `};
  border-bottom: 1px solid ${(props) => props.theme.text};

  ${Box}:hover & {
    border-bottom: 1px solid ${(props) => props.theme.body};
  }
`;
const HashTags = styled.div`
  padding: 0.5rem 0;
  ${mediaQueries(400)`
    
  font-size:calc(0.5em + 1vw);



`};
`;
const Date = styled.span`
  padding: 0.5rem 0;
  ${mediaQueries(400)`
    
  font-size:calc(0.5em + 1vw);



`};
`;
const Tag = styled.span`
  padding-right: 0.5rem;
`;
const Container = styled(motion.div)``;

// Framer motion configuration
const Item = {
  hidden: {
    scale: 0,
  },
  show: {
    scale: 1,
    transition: {
      type: "spring",
      duration: 0.5,
    },
  },
};

const ProjectsComponent = (props) => {
  const { name, tags, date, imgSrc, link } = props.project;
  return (
    <Container variants={Item}>
      <Box target="_blank" href={link}>
        <Image img={imgSrc} />
        <Title>{name}</Title>
        <HashTags>
          {tags.map((t, id) => {
            return <Tag key={id}>#{t}</Tag>;
          })}
        </HashTags>
        <Date>{date}</Date>
      </Box>
    </Container>
  );
};

export default ProjectsComponent;