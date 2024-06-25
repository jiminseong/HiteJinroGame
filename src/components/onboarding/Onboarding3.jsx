import styled, { keyframes } from "styled-components";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Onboarding3 = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            navigate('/home');
        }, 3500);

        return () => clearTimeout(timer);
    }, [navigate]);

    return (
        <OnboardingWrapper>
            <OnboardingMsg>
            사이트 내 로고 디자인 및 등은<br/>
            하이트 진로그룹(주)의 것임을 밝힙니다.
            </OnboardingMsg>
        </OnboardingWrapper>
    );
};

export default Onboarding3;

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
