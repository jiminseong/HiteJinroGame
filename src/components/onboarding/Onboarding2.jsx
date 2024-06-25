import styled, { keyframes } from "styled-components";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Onboarding2 = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            navigate('/3');
        }, 3500);

        return () => clearTimeout(timer);
    }, [navigate]);

    return (
        <OnboardingWrapper>
            <OnboardingMsg>
            하이트 진로 그룹을 홍보하고자<br/>
            하는 목적에서 만들어진 모의 사이트입니다.
            </OnboardingMsg>
        </OnboardingWrapper>
    );
};

export default Onboarding2;

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
