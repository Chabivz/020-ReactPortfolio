import React from 'react';
import Card from './Card'
import './style.css';

const cards = [
  {
    title: 'Weather Dashboard',
    text: 'A tool for all users to give the weather update for the selected city. The dashboard will display the city, date, humidity, temperature and the next 5 day forecast.',
    image: 'https://res.cloudinary.com/dmxemti24/image/upload/v1629602731/ReactPortfolio/Weather%20Dashboard.png',
    link: {
      github: 'https://github.com/Chabivz/006-WeatherDashboard',
      deployed: 'https://chabivz.github.io/006-WeatherDashboard/',
    },
    id: 2
  },
  {
    title: 'Tech Blog',
    text: 'A blog site made for coders. As a coder I wanted to build a web app where I can write and share information about coding and designing',
    image: 'https://res.cloudinary.com/dmxemti24/image/upload/v1629602048/ReactPortfolio/TechBlog%20Homepage.png',
    link: {
      github: 'https://github.com/Chabivz/006-WeatherDashboard',
      deployed: 'https://limitless-citadel-24664.herokuapp.com/',
    },
    id: 1
  },
  {
    title: 'Mood Tracker',
    text: 'The Mood Tracker is a tool for welcoming kids into a new virtual space and checking in with how they are feeling.',
    image: 'https://res.cloudinary.com/dmxemti24/image/upload/v1629602629/ReactPortfolio/Mood%20Tracker.png',
    link: {
      github: 'https://github.com/Chabivz/Mood-Tracker',
      deployed: 'https://chabivz.github.io/Mood-Tracker/',
    },
    id: 4
  },

  
];


export default function Portfolio() {
  return (
    <div className='container'>
      <h1 className='h1'>Portfolio</h1>
      <div className='card-container'>
      {cards.map((element) => (
        <Card title={element.title} github={element.link.github} deployed={element.link.deployed} text={element.text} image={element.image} key={element.id} />
      ))
      }  
      </div>  
    
    </div>
  );
}
