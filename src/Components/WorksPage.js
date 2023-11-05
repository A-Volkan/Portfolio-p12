import React, { Suspense, lazy, useEffect, useRef } from "react";
import styled, { ThemeProvider } from "styled-components";
import { DarkTheme, mediaQueries } from "./Themes";
import { motion } from "framer-motion";
import { Work } from "../data/WorkData";
import Card from "../SideComponents/Card";
import { Energy } from "../SideComponents/Svgs";
import LoadingPage from "../SideComponents/LoadingPage";


const BigTitlte = lazy(() => import("../SideComponents/BigTittle"));
const LogoComponent = lazy(() => import("../SideComponents/LogoComponent"));
const SocialIcons = lazy(() => import("../SideComponents/SocialIcons"));
const PowerButton = lazy(() => import("../SideComponents/PowerButton"));

const Box = styled.div`
  background-color: ${(props) => props.theme.body};

  height: 400vh;
  position: relative;
  display: flex;
  align-items: center;
`;

const Main = styled(motion.ul)`
  position: fixed;
  top: 12rem;
  left: calc(10rem + 15vw);
  height: 40vh;
  display: flex;

  color: white;
  ${mediaQueries(800)`
        
        
  left:calc(8rem + 15vw);

`};

${mediaQueries(640)`
top: 30%;
  
  left:calc(6rem + 15vw);

`};

${mediaQueries(640)`
  
  left:calc(2rem + 15vw);

`};
${mediaQueries(400)`
  
  left:calc(1rem + 15vw);

`};
`;
const Rotate = styled.span`
  display: block;
  position: fixed;
  right: 1rem;
  bottom: 1rem;
  width: 80px;
  height: 80px;
  z-index: 1;
  ${mediaQueries(640)`
  width:60px;
      height:60px;   
    svg{
      width:60px;
      height:60px;
    }

`};
${mediaQueries(400)`
     width:50px;
      height:50px;
     svg{
      width:50px;
      height:50px;
    }

`};
`;

// Framer-motion Configuration
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,

    transition: {
      staggerChildren: 0.5,
      duration: 0.5,
    },
  },
};

const WorksPage = () => {
  const ref = useRef(null);
  const energy = useRef(null);

  useEffect(() => {
    let element = ref.current;

    const rotate = () => {
      element.style.transform = `translateX(${-window.pageYOffset}px)`;

      return (energy.current.style.transform =
        "rotate(" + -window.pageYOffset + "deg)");
    };

    window.addEventListener("scroll", rotate);
    return () => {
      window.removeEventListener("scroll", rotate);
    };
  }, []);

  return (
    <ThemeProvider theme={DarkTheme}>
      <Box>
        <LogoComponent theme="dark" />
        <SocialIcons theme="dark" />
        <PowerButton />
        <Suspense fallback={<LoadingPage />}>

          <Main ref={ref} variants={container} initial="hidden" animate="show">
            {Work.map((d) => (
              <Card key={d.id} data={d} />
            ))}
          </Main>
        </Suspense>
        <Rotate ref={energy}>
          <Energy width={80} height={80} fill={DarkTheme.text} />
        </Rotate>

        <BigTitlte text="WORK" top="10%" right="20%" />
      </Box>
    </ThemeProvider>
  );
};

export default WorksPage;