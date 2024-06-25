import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import kelly from '../../assets/img/kellygame.png';
import { nextTurn } from '../../redux/participantSlice';
import modalSvg from '../../assets/img/modal.svg'; // import the image
import { useNavigate } from 'react-router-dom';

const BeerGame = () => {
    const navigator = useNavigate();
    const dispatch = useDispatch();
    const { names, currentTurnIndex } = useSelector(state => state.participants);
    const [count, setCount] = useState(0);
    const [modal, setModal] = useState(false);
    const [randomTrigger, setRandomTrigger] = useState(0);

    const handleNextTurn = () => {
        dispatch(nextTurn());
        setCount(prevCount => {
            const newCount = prevCount + 1;
            if (newCount === randomTrigger) {
                setModal(true);
            }
            return newCount;
        });
    };

    useEffect(() => {
        // 3~15 사이의 랜덤 숫자 생성
        const randomNum = Math.floor(Math.random() * 13) + 3;
        setRandomTrigger(randomNum);
    }, []);

    return (
        <GameWrapper>
            <CountDiv>돌린 횟수 : {count} 번</CountDiv>
            <PeopleArea>
                {names[currentTurnIndex]} 차례입니다
            </PeopleArea>
            <TouchArea onClick={handleNextTurn}></TouchArea>
            <DrinkImg src={kelly} />
            {modal && 
                <ModalWrapper>
                    <Modal>
                        {names[currentTurnIndex]}님<br/>병뚜껑이<br/>날라갔어요!
                    </Modal>
                    <ReturnButton onClick={()=>navigator('/home')}>
                        다시 한번 더하기!
                    </ReturnButton>
                </ModalWrapper>
            }
        </GameWrapper>
    );
};

export default BeerGame;

const GameWrapper = styled.div`
    position: relative;
    width: 100%;
    height: 100vh;
    background-color: #E6EFFB;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const CountDiv = styled.div`
    margin-top: 5%;
    width: 50%;
    height: 65px;
    background: #0A5FB2;
    box-shadow: 0px 4px 10px rgba(0, 22, 44, 0.05), 2px -4px 10px rgba(0, 22, 44, 0.05);
    border-radius: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.56em;
    color: #FFFFFF;
`;

const PeopleArea = styled.div`
    margin-top: 25%;
    width: 60%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.56em;
    color: #0A5FB2;
`;

const TouchArea = styled.div`
    position: absolute;
    margin-top: 60%;
    width: 24%;
    height: 5%;
    z-index: 1;
`;

const DrinkImg = styled.img`
    position: absolute;
    bottom: 0;
    width: 80%;
`;

const ModalWrapper = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.39);
    z-index: 1;
    display : flex;
    flex-direction : column;
    justify-content : center;
    align-items : center;
    gap : 2.5em;
`;

const Modal = styled.div`
    
    width: 80%;
    height : 30%;
    top: 20%;
    z-index: 10;
    background-image: url(${modalSvg}); // Use url() function for the image
    background-size: cover;
    display : flex;

    padding-left : 1em;
    justify-content : center;
    align-items : center;
    text-align : center;
    color : #FFFFFF;
    font-size : 2em;
    
`;


const ReturnButton = styled.div`
    width: 80%;
    height: 65px;
    background: #0A5FB2;
    box-shadow: 0px 4px 10px rgba(0, 22, 44, 0.05), 2px -4px 10px rgba(0, 22, 44, 0.05);
    border-radius: 16px;
    
    display : flex;
    justify-content : center;
    align-items : center;
    font-size : 1.56em;
    color : #FFFFFF;

`;