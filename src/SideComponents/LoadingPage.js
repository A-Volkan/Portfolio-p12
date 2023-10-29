import styled, { keyframes } from "styled-components";
import astronaut from '../assets/Images/Astrosit.png'
import { mediaQueries } from '../Components/Themes';

const Box = styled.div`
  width: 100vw;
  height: 100vh;
  background: ${(props) => props.theme.text};
  color: ${(props) => props.theme.body};

  display: flex;
  justify-content: center;
  align-items: center;
`;

const float = keyframes`
0% { transform: translateY(-10px) }
50% { transform: translateY(15px) translateX(15px) }
100% { transform: translateY(-10px) }

`
const Spaceman = styled.div`
position: absolute;
top: 30%;
right: 25%;
width: 25vw;
animation: ${float} 2s ease-in-out infinite;
img{
    width: 100%;
    height: auto;
}
${mediaQueries(640)`
          width: 50vw;
         


  `};
`

const LoadingPage = () => {
    return (
        <Box><Spaceman>
            <img src={astronaut} alt="spaceman" />
        </Spaceman>
            <h1>Loading...</h1>
        </Box>
    );
};

export default LoadingPage;
