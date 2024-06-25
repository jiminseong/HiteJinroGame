import { useState, useEffect} from 'react';
import { useDispatch } from 'react-redux';
import { setParticipantCount, resetState } from '../../redux/participantSlice';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import gameLogo from '../../assets/logo/gameLogo.svg';
import closeIcon from '../../assets/icon/closeIcon.svg'


const Home = () => {
    const [inputCount, setInputCount] = useState('');
    const [modal, setModal] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = () => {
        if (parseInt(inputCount) > 5) {
            setModal(true);
        } else {
            dispatch(setParticipantCount(parseInt(inputCount)));
            navigate('/people');
        }
    };

    useEffect(() => {
        dispatch(resetState()); // 상태 초기화
    }, [dispatch]);

    return (
        <HomeWrapper>
            <Wrapper>
                <GameLogo src={gameLogo} />
                <PeopleInput
                    placeholder="인원 수를 입력해 주세요!"
                    value={inputCount}
                    onChange={(e) => setInputCount(e.target.value)}
                    type="number"
                />
                <PeopleSubmit onClick={handleSubmit}>
                    입력 완료!
                </PeopleSubmit>
            </Wrapper>
            {modal && 
                <ModalWrapper>
                    <Modal>
                        인원이 너무 많습니다!<br/>6명 이하로 입력해주세요!
                        <CloseIcon src={closeIcon} onClick={()=>setModal(false)}/>
                    </Modal>
                </ModalWrapper>
            }
        </HomeWrapper>
    );
};

export default Home;

const HomeWrapper = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #E6EFFB;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2.5em;
`;

const GameLogo = styled.img`
    width: 50%;
`;

const PeopleInput = styled.input`
    width: 78%;
    height: 65px;
    padding-left: 2%;
    border: none;
    background: #B8D6FF;
    box-shadow: 0px 4px 10px rgba(0, 22, 44, 0.05), 2px -4px 10px rgba(0, 22, 44, 0.05);
    border-radius: 16px;
    font-size: 1.25em;
    color: #0A5FB2;

    &:focus {
        outline: none;
    }
`;

const PeopleSubmit = styled.div`
    width: 80%;
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
`;

const Modal = styled.div`
    position :relative;
    width : 80%;
    height : 10%;
    background: #FFFFFF;
    box-shadow: 0px 4px 10px rgba(0, 22, 44, 0.05), 2px -4px 10px rgba(0, 22, 44, 0.05);
    border-radius: 1em;

    display : flex;
    justify-content : center;
    align-items : center;
    text-align : center;
    gap : 1em;
    color : #0A5FB2;
    font-size : 1.5em;
    
`;

const CloseIcon = styled.img`
    position :absolute;
    top: 0.8em;
    right : 0.8em;
`;
