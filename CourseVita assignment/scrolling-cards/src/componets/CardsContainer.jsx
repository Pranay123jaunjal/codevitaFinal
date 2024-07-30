import React from 'react';
import styled from 'styled-components';
import Card from './Card';

const Container = styled.div`
  display: flex;
  overflow-x: auto;
  padding: 20px;
  scroll-snap-type: x mandatory;
  
  &::-webkit-scrollbar {
    display: none;
  }
`;

const cardsData = [
  {
    image: 'path/to/image1.jpg',
    title: 'Become Successful Data Analyst',
    date: 'Starts from 18th July, 2024',
    status: 'Upcoming'
  },
  {
    image: 'path/to/image2.jpg',
    title: 'Open your wings join Internvita',
    date: 'Starts from 18th July, 2024',
    status: 'Upcoming'
  },
  {
    image: 'path/to/image3.jpg',
    title: '3-Days VR Workshop',
    date: 'Starts from 18th July, 2024',
    status: 'Upcoming'
  },
  {
    image: 'path/to/image4.jpg',
    title: '3-Days VR Workshop with Looker',
    date: 'Starts from 18th July, 2024',
    status: 'Upcoming'
  }
];

const CardsContainer = () => {
  return (
    <Container>
      {cardsData.map((card, index) => (
        <Card key={index} {...card} />
      ))}
    </Container>
  );
};

export default CardsContainer;
