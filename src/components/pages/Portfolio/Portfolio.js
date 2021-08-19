import React from 'react';
import Card from './Card'
import './style.css';

const cards = [
  {
    title: 'Titlelkasdjflaskdjflaskdjfljasdf',
    text: 'Texts',
    image: 'Images',
    id: 2
  },
  {
    title: 'Title',
    text: 'Textsasdflkajsdlfjasdlfkjasldkfjlasdf',
    image: 'Images',
    id: 1
  },
  {
    title: 'Title',
    text: 'Textsasdflkajsdlfjasdlfkjasldkfjlasdf',
    image: 'Images',
    id: 4
  },
  {
    title: 'Title',
    text: 'Textsasdflkajsdlfjasdlfkjasldkfjlasdf',
    image: 'Images',
    id: 3
  },
  
];


export default function Portfolio() {
  return (
    <div className='container'>
      <h1>Portfolio</h1>
      <div>
      {cards.map((element) => (
        <Card title={element.title} text={element.text} image={element.image} key={element.id} />
      ))
      }  
      </div>  
    
    </div>
  );
}
