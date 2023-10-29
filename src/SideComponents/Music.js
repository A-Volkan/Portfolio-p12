import React, { useRef, useState } from 'react'
import styled, { keyframes } from 'styled-components'
import music from "../assets/audio/fallin angel-123.prod by Nebkeith.mp3"
import { mediaQueries } from "../Components/Themes";


const Box = styled.div`
display:flex;
cursor:pointer;
position:fixed;
left:2rem;
top:6rem;
z-index:10;

&>*:nth-child(1){
    animation-delay: 0.2s;
}
&>*:nth-child(2){
    animation-delay: 0.3s;
}
&>*:nth-child(3){
    animation-delay: 0.4s;
}
&>*:nth-child(4){
    animation-delay: 0.5s;
}
&>*:nth-child(5){
    animation-delay: 0.8s;
}
${mediaQueries(640)`
left:1rem;
top:10rem;

`};
`;
const play = keyframes`
0%{
    transform:scaleY(1);
}
50%{
    transform:scaleY(2);
}
100%{
    transform:scaleY(1);
}
`
const Line = styled.span`
background: ${props => props.theme.text};
border: 1px solid ${props => props.theme.body};

animation:${play} 1s ease infinite;
animation-play-state: ${props => props.click ? "running" : "paused"};
height: 1rem;
width: 2px;
margin:0 0.1rem
${mediaQueries(40)`
      height:0.5rem;
      width:1px;

  `};
`;

const Music = () => {

    const ref = useRef(null);
    const [click, setclick] = useState(false);

    const handleClick = () => {
        setclick(!click);

        if (!click) {
            ref.current.play();
        } else {
            ref.current.pause();
        }
    }

    return (
        <Box onClick={() => handleClick()}>
            <Line click={click} />
            <Line click={click} />
            <Line click={click} />
            <Line click={click} />
            <Line click={click} />
            <Line click={click} />
            <Line click={click} />

            <audio src={music} ref={ref} loop />
        </Box>
    )
}

export default Music;