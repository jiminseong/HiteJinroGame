import { Link } from 'react-router-dom';
import styled from 'styled-components';

function NotFound() {
    return (
        <NotFoundWrapper>
            <NotFoundTitle>죄송합니다😭</NotFoundTitle>
            <Text>예상치 못한 에러가 발생했어요</Text>
            <Text2>아래 버튼으로 다시 홈으로 돌아가요!</Text2>
            <MainLink to='/HiteJinroGame'>메인으로 이동하기</MainLink>
        </NotFoundWrapper>
    );
}

export default NotFound;


const NotFoundWrapper = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #E6EFFB;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items:center;
`;

const NotFoundTitle = styled.div`
    font-size: 1.525em;
    font-weight : 700;
`;

const Text = styled.div`
    font-size : 1.5em;
`;

const Text2 = styled.div`
    font-size : 1.5em;
    
    
`;

const MainLink = styled(Link)`
    margin-top: 2em;
    width: 80%;
    height: 65px;
    background: #0A5FB2;
    box-shadow: 0px 4px 10px rgba(0, 22, 44, 0.05), 2px -4px 10px rgba(0, 22, 44, 0.05);
    border-radius: 16px;
    text-decoration : none;
    
    display : flex;
    justify-content : center;
    align-items : center;
    font-size : 1.56em;
    color : #FFFFFF;
`;