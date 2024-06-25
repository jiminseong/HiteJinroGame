import styled from "styled-components";
import selectDrink from '../../assets/logo/selectDrink.svg';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import jinroGold from '../../assets/img/jinroGold.png';
import kelly from '../../assets/img/kelly.png';
import { useNavigate } from "react-router-dom";


const DrinkSelect = () => {

    const navigate = useNavigate();
    return (
        <DrinkSelectWrapper>
            <GameLogo src={selectDrink}/>
            <StyledSwiper
                spaceBetween={50}
                slidesPerView={1}
                scrollbar={true}
                >
                <StyledSwiperSlide>
                    <DrinkImg src={jinroGold}/>
                        <NameSubmit onClick={()=>navigate('/infosoju')}>
                            진로 골드 마시기!
                        </NameSubmit>
                </StyledSwiperSlide>
                <StyledSwiperSlide>
                    <DrinkImg2 src={kelly}/>
                        <NameSubmit onClick={()=>navigate('/infobeer')}>
                            켈리 마시기!
                        </NameSubmit>
                </StyledSwiperSlide>
            </StyledSwiper>
        </DrinkSelectWrapper>
    );
};

export default DrinkSelect;

const DrinkSelectWrapper = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #E6EFFB;
    display: flex;
    justify-content : center;
    align-items : center;
    flex-direction: column;
`;

const GameLogo = styled.img`
    margin-top : 4em;
    width:50%;
`;  

const StyledSwiper = styled(Swiper)`
    margin-top : -7em;
    height : 100%;
    width : 100%;
    margin-bottom : 2.5em;
`;

const StyledSwiperSlide= styled(SwiperSlide)`
    position : relative;
    width : 100%;
    height : 100%;
    display : flex;
    justify-content : center;
    align-items : center;
    flex-direction : column;
    
`;

const DrinkImg = styled.img`
    width : 45%;
    height : 60%;
    margin-bottom : 4em;
`;

const DrinkImg2 = styled.img`
    width : 45%;
    height : 60%;
    margin-bottom : 4em;
`;

const NameSubmit = styled.div`
    position : absolute;
    bottom : 0;
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