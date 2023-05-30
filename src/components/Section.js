import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

function Section({ title, description, leftBtnText, rightBtnText, backgroundImage }) {
  console.log(title);
  return (
    <Wrap style={{ backgroundImage: `url(${backgroundImage})` }}>
      <MotionDiv initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
        <ItemText>
          <h1>{title}</h1>
          <p>{description}</p>
        </ItemText>
      </MotionDiv>
      <Buttons>
        <MotionDiv initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
          <ButtonGroup>
            <LeftButton>{leftBtnText}</LeftButton>
            {rightBtnText && <RightButton>{rightBtnText}</RightButton>}
          </ButtonGroup>
        </MotionDiv>
        <DownArrow src="/images/down-arrow.svg" />
      </Buttons>
    </Wrap>
  );
}

export default Section;

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  /* Add any additional styles you need */
`;

const MotionDiv = styled(motion.div)`
  /* Add any additional styles for MotionDiv */
`;

const ItemText = styled.div`
  padding-top: 15vh;
  text-align: center;
`;

const ButtonGroup = styled.div`
  display: flex;
  margin-bottom: 30px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const LeftButton = styled.div`
  background-color: rgba(23, 26, 32, 0.8);
  height: 40px;
  width: 256px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  opacity: 0.85;
  text-transform: uppercase;
  cursor: pointer;
  margin: 8px;
`;

const RightButton = styled(LeftButton)`
  /* Add any additional styles for RightButton */
  background: white;
  opacity: 0.65;
  color: black;
`;

const DownArrow = styled.img`
  margin-top: 20px;
  height: 40px;
  animation: animateDown infinite 1.5s;
  overflow-x: hidden;
`;

const Buttons = styled.div`
  /* Add any additional styles for Buttons */
`;
