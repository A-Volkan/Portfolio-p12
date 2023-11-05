import { motion } from "framer-motion";
import React from "react";
// import { NavLink } from 'react-router-dom'
import styled from "styled-components";
import { Github, Twitter, Linkedin, Soundcloud } from './Svgs'
import { DarkTheme, mediaQueries } from "../Components/Themes";

const Icons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  position: fixed;
  bottom: 0;
  left: 2rem;

  z-index: 3;


  & > *:not(:last-child) {
    margin: 0.5rem 0;
  }
  ${mediaQueries(426)`
      left:1rem;
      
      
  `};
`;

const Line = styled(motion.span)`
  width: 2px;
  height: 8rem;
  background-color: ${(props) =>
        props.color === "dark" ? DarkTheme.text : DarkTheme.body};
`;

const SocialIcons = (props) => {
    return (
        <Icons>
            <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: [0, 1, 1.5, 1] }}
                transition={{ type: "spring", duration: 1, delay: 1 }}
            >
                <a
                    style={{ color: "inherit" }}
                    target="_blank"
                    href={"https://github.com/A-Volkan"} rel="noreferrer"
                >
                    <Github
                        width={25}
                        height={25}
                        fill={props.theme === "dark" ? DarkTheme.text : DarkTheme.body}
                    />
                </a>
            </motion.div>

            <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: [0, 1, 1.5, 1] }}
                transition={{ type: "spring", duration: 1, delay: 1.6 }}
            >
                <a
                    style={{ color: "inherit" }}
                    target="_blank"
                    href={"https://www.linkedin.com/in/volkan-a-5a0aa9297/"} rel="noreferrer"
                >
                    <Linkedin
                        width={25}
                        height={25}
                        fill={props.theme === "dark" ? DarkTheme.text : DarkTheme.body}
                    />
                </a>
            </motion.div>

            <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: [0, 1, 1.5, 1] }}
                transition={{ type: "spring", duration: 1, delay: 1.2 }}
            >
                <a
                    style={{ color: "inherit" }}
                    target="_blank"
                    href={"https://twitter.com/"} rel="noreferrer"
                >
                    <Twitter
                        width={25}
                        height={25}
                        fill={props.theme === "dark" ? DarkTheme.text : DarkTheme.body}
                    />
                </a>
            </motion.div>
            <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: [0, 1, 1.5, 1] }}
                transition={{ type: "spring", duration: 1, delay: 1.4 }}
            >
                <a
                    style={{ color: "inherit" }}
                    target="_blank"
                    href={"https://Soundcloud.com/"} rel="noreferrer"
                >
                    <Soundcloud
                        width={25}
                        height={25}
                        fill={props.theme === "dark" ? DarkTheme.text : DarkTheme.body}
                    />
                </a>
            </motion.div>

            <Line
                color={props.theme}
                initial={{
                    height: 0,
                }}
                animate={{
                    height: "8rem",
                }}
                transition={{
                    type: "spring",
                    duration: 1,
                    delay: 0.8,
                }}
            />
        </Icons>
    );
};

export default SocialIcons;