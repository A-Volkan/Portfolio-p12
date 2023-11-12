import React, { useRef } from 'react'
import styled from 'styled-components';
import { Link, Crochet } from './Svgs';
import { useEffect } from 'react';
import { mediaQueries } from "../Components/Themes";

const Container = styled.div`
position:relative;

${mediaQueries(640)`
    
    display:none;



  `};
`;
const Slider = styled.div`
position: fixed;
top: 0;
right: 2rem;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
transform: translateY(-100%);

.chain{
transform: rotate(135deg);

`;

const PreDisplay = styled.div`
position: absolute;
top:0;
right: 2rem;
`

const CrochetComponent = (props) => {

    const ref = useRef(null);
    const hiddenRef = useRef(null); // ref pour lelement que l'on masque ou affiche en fonction du defilement

    useEffect(() => {

        const handleScroll = () => {

            let scrollPosition = window.pageYOffset; // fake deprecate msg
            let windowSize = window.innerHeight;
            let bodyHeight = document.body.offsetHeight;
            //Calcul de la différence entre la hauteur totale du corps et la position de défilement
            let diff = Math.max(bodyHeight - (scrollPosition + windowSize))
            //Pourcentage de cette différence par rapport à la plage totale disponible
            let diffP = (diff * 100) / (bodyHeight - windowSize);
            //Ajuste sa position verticale en fonction du pourcentage calculé.
            ref.current.style.transform = `translateY(${-diffP}%)`

            if (window.pageYOffset > 5) {
                hiddenRef.current.style.display = 'none';
            } else {
                hiddenRef.current.style.display = 'block';

            }


        }

        window.addEventListener('scroll', handleScroll)

        return () => window.removeEventListener('scroll', handleScroll)


    }, [])

    return (
        <Container>
            <PreDisplay ref={hiddenRef} className='hidden'>
                <Crochet width={70} height={70} fill='currentColor' />
            </PreDisplay>
            <Slider ref={ref}>
                {
                    [...Array(props.numbers)].map((x, id) => {
                        return <Link key={id} width={25} height={25} fill='currentcolor' className="chain" />
                    })
                }
                <Crochet width={70} height={70} fill='currentColor' />
            </Slider>
        </Container>
    )
}

export default CrochetComponent;