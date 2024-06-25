import styled, { keyframes } from "styled-components";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Logo from '../../assets/logo/onboardingLogo.svg';


const Onboarding4 = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            navigate('/home');
        }, 3500);

        return () => clearTimeout(timer);
    }, [navigate]);


    return (
        <OnboardingWrapper>
            <OnboardingLogo src={Logo}/>
        </OnboardingWrapper>
    );
};

export default Onboarding4;


const fadeIn = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`;

const OnboardingWrapper = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #E6EFFB;
`;


const OnboardingLogo = styled.img`
    margin-bottom: 4em;
    animation: ${fadeIn} 3.5s forwards;
`;