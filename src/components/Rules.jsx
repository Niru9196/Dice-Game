import React from 'react'
import styled from 'styled-components'

const Rules = () => {
  return (
    <RulesContainer>
      <h2>How to play Dice game</h2>
      <div className="text">
        <p>Select any Number</p>
        <p>Click on dice image</p>
        <p>After Cilcking on dice, if selected Number is equal to dice number you will get same point as dice{""}</p>
        <p>If you get different number than selected number , 2 points will be cut down from the present score </p>
      </div>
    </RulesContainer>
  )
}

export default Rules

const RulesContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  background-color: #fbf1f1;
  padding: 20px;
  margin-top: 40px;
  border-radius: 10px;
  h2{
    font-size: 24px;
  }
  .text{
    margin-top:24px ;
  }
`;
