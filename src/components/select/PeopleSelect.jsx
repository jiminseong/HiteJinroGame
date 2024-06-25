import { useSelector, useDispatch } from 'react-redux';
import { setParticipantName } from '../../redux/participantSlice';
import styled from 'styled-components';
import gameLogo from '../../assets/logo/gameLogo.svg'
import { useNavigate } from 'react-router-dom';

const PeopleSelect = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const names = useSelector((state) => state.participants.names);

    const handleNameChange = (index, newName) => {
        dispatch(setParticipantName({ index, name: newName }));
    };

    const handleSubmit = () => {
        // 예를 들어, 모든 이름이 적절히 입력되었는지 확인
        if (names.every(name => name.trim() !== '')) {
            // 모든 이름이 유효하면 다음 페이지로 이동
            navigate('/drink');
        } else {
            // 유효하지 않은 이름이 있으면 경고 메시지 표시
            alert('모든 이름을 올바르게 입력해주세요.');
        }
    };

    return (
        <PeopleWrapper>
            <GameLogo src={gameLogo}/>
            {names.map((name, index) => (
                <NameEntry key={index}>
                    <Item>
                    <Idx>{index + 1}</Idx>
                    <NameInput 
                        type="text"
                        value={name}
                        onChange={(e) => handleNameChange(index, e.target.value)}
                        placeholder="이름을 입력하세요"
                    />
                    </Item>
                </NameEntry>
            ))}
            <NameSubmit onClick={handleSubmit}>
                뭐 마실지 고르기!
            </NameSubmit>
        </PeopleWrapper>
    );
};

export default PeopleSelect;


const PeopleWrapper = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #E6EFFB;
    display: flex;
    flex-direction: column;
    justify-content : center;
    align-items:center;
    gap : 2.5em;
`;

const GameLogo = styled.img`
    width:50%;
`;  

const NameEntry = styled.div`
    width : 100%;
    display: flex;
    flex-direction: column;
    align-items : center;
    justify-content : center;
`;


const Item = styled.div`
    width : 80%;
    height : 80%;
    font-size : 1.5em;
    color : #0A5FB2;
    display: flex;
    gap : 1em;
`;

const Idx = styled.div`
    width : 20%;
    display : flex;
    justify-content : center;
    align-items : center;
    font-size : 1.5em;
    background: #B8D6FF;
    box-shadow: 0px 4px 10px rgba(0, 22, 44, 0.05), 2px -4px 10px rgba(0, 22, 44, 0.05);
    border-radius: 100px;

`;

const NameInput = styled.input`
    width: 100%;
    height: 100%;
    padding-left: 2%;
    border : none;
    background: #B8D6FF;
    box-shadow: 0px 4px 10px rgba(0, 22, 44, 0.05), 2px -4px 10px rgba(0, 22, 44, 0.05);
    border-radius: 16px;
    font-size : 1em;
    color : #0A5FB2;
    

    &:focus {
        outline : none;
    }
`;

const NameSubmit = styled.div`
    width: 80%;
    height: 65px;
    background: #0A5FB2;
    box-shadow: 0px 4px 10px rgba(0, 22, 44, 0.05), 2px -4px 10px rgba(0, 22, 44, 0.05);
    border-radius: 16px;
    margin-bottom : 4em;
    
    display : flex;
    justify-content : center;
    align-items : center;
    font-size : 1.56em;
    color : #FFFFFF;

`;