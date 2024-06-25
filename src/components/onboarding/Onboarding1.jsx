import styled, { keyframes } from "styled-components";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Onboarding1 = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            navigate('/2');
        }, 3500);

        return () => clearTimeout(timer);
    }, [navigate]);

    return (
        <OnboardingWrapper>
            <OnboardingMsg>
                본 사이트는 어떠한 <br/>
                수익 창출도 목적으로 하지 않습니다.
            </OnboardingMsg>
        </OnboardingWrapper>
    );
};

export default Onboarding1;

const fadeIn = keyframes`
    from {
        opacity: 1;
    }
    to {
        opacity: 0;
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

const OnboardingMsg = styled.div`
    color: #0A5FB2;
    font-size: 1.5em;
    font-weight: 700;
    font-family: 'Pretendard';
    text-align: center;
    margin-bottom: 2.5em;
    animation: ${fadeIn} 3.5s forwards;
`;
