import React, { useState } from 'react'
import TotalScore from './TotalScore'
import NumberSelector from './NumberSelector'
import styled from 'styled-components'    
import RollDice from './RollDice'
import {Button, OutlineButton} from '../styled/Button'
import Rules from './Rules'

const GamePlay = () => {
  const [score , setScore] = useState(0);
  const [selectedNumber, setSelectedNumber] = useState();
  const [currentDice , setCurrentDice] = useState(1);
  const [error,setError] = useState("");
  const [showRules , setShowRules] = useState(false);


  const generateRandomNumber = (min,max) => {
    return Math.floor(Math.random()* (max-min) + min) ;
  };

  const roleDice = () => {

      if(!selectedNumber) {
        setError("You have not Selected any Number");
        return;
      };
      setError("");
      const randomNumber = generateRandomNumber(1,7);
      setCurrentDice((prev) => randomNumber);

      if(selectedNumber === randomNumber){
        setScore((prev) => prev + randomNumber)
      }else{
        setScore((prev) => prev -2);
      }

      setSelectedNumber(undefined);
  };

  const resetScore = () => {
    setScore(0);
  }


  return (
    <MainCOntainer>
      <div className='top-section'>
        <TotalScore score = {score} />
        <NumberSelector error = {error} setError={setError} selectedNumber={selectedNumber} setSelectedNumber={setSelectedNumber} />
        </div>
        <RollDice currentDice = {currentDice} roleDice={roleDice}/>
        <div className="btns">
          <OutlineButton onClick={resetScore}>Reset Score</OutlineButton>
          <Button onClick={() => setShowRules((prev) => !prev)} >{showRules ? "Hide" : "Show"} Rules</Button>
        </div>
        {showRules && < Rules />}
    </MainCOntainer>
  )
}

export default GamePlay

const MainCOntainer = styled.main`
.top-section {
    display: flex;
    justify-content: space-around;
    align-items: end;
}

.btns{
  margin-top: 40px;
  gap: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
}
`;
