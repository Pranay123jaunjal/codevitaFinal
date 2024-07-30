import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
  width: 300px;
  height: 150px;
  margin: 10px;
  perspective: 1000px;
`;

const CardInner = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  transition: transform 0.6s;
  transform-style: preserve-3d;
  cursor: pointer;

  &:hover {
    transform: rotateY(20deg) scale(1.1);
  }
`;

const CardFace = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
`;

const CardFront = styled(CardFace)`
  background: url(${props => props.image}) no-repeat center/cover;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
`;

const Card = ({ image, title, date, status }) => {
  return (
    <CardContainer>
      <CardInner>
        <CardFront image={image}>
          <div>{title}</div>
          <div>
            <div>{date}</div>
            <div>{status}</div>
          </div>
        </CardFront>
      </CardInner>
    </CardContainer>
  );
};

export default Card;
