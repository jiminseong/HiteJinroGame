import { useEffect } from 'react';
import styled ,{ keyframes } from 'styled-components';
import gameInfo from '../../assets/logo/gameInfo.svg'
import { useNavigate } from 'react-router-dom';
const GameInfoSoju = () => {

    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            navigate('/beer');
        }, 4000);

        return () => clearTimeout(timer);
    }, [navigate]);


    return (
        <InfoWrapper>
            <Info src={gameInfo}/>
        </InfoWrapper>
    );
};

export default GameInfoSoju;


const fadeIn = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`;



const InfoWrapper = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #E6EFFB;
    display: flex;
    flex-direction: column;
    justify-content : center;
    align-items : center;
`;

const Info = styled.img`
    width : 50%;
    animation: ${fadeIn} 3.5s forwards;
    margin-bottom : 4em;
`