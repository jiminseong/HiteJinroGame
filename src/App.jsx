import './App.css'
import { Routes, Route } from 'react-router-dom'; 
import Onboarding1 from './components/onboarding/Onboarding1';
import Onboarding2 from './components/onboarding/Onboarding2';
import Onboarding3 from './components/onboarding/Onboarding3';
import Onboarding4 from './components/onboarding/Onboarding4';
import Home from './components/select/Home';
import PeopleSelect from './components/select/PeopleSelect';
import DrinkSelect from './components/select/DrinkSelect';
import SojuGame from './components/game/SojuGame';
import BeerGame from './components/game/BeerGame';
import Onboarding from './components/onboarding/Onboarding';
import GameInfoSoju from './components/game/GameInfoSoju';
import GameInfoBeer from './components/game/GameInfoBeer';

function App() {
  return (
    <>
    <Routes>
      <Route exact path="/" element={<Onboarding/>}/>
      <Route path="/1" element={<Onboarding1/>} />
      <Route path="/2" element={<Onboarding2/>} />
      <Route path="/3" element={<Onboarding3/>} />
      <Route path="/4" element={<Onboarding4/>} />
      
      <Route path="/home" element={<Home/>} />
      <Route path="/people" element={<PeopleSelect/>}/>
      <Route path="/drink" element={<DrinkSelect/>}/>

      <Route path='/infosoju' element={<GameInfoSoju/>}/>
      <Route path='/infobeer' element={<GameInfoBeer/>}/>
      <Route path="/soju" element={<SojuGame/>}/>
      <Route path="/beer" element={<BeerGame/>}/>

    </Routes>
  </>
  )
}

export default App