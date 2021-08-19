import React from 'react';
import './index.css';
export default function About() {
  return (
    <div className='container'>
      <div className='about'>
        <h1>About  Me</h1>
        <p>
        Hello, my name is Christopher and I enjoy creating things that live in the internet.
        </p>
        <p>Here are a few technologies I've been working with recently:</p>
        <p>Front-end Profeciency</p>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>JQuery</li>
          <li>Responsive Design</li>
          <li>React</li>
          <li>Bootstrap</li>
          <li>Bulma</li>
        </ul>
        <p>Back-end Profeciency</p>
        <ul>
          <li>APIs</li>
          <li>Node.js</li>
          <li>Express</li>
          <li>MySQL, Sequelize</li>
          <li>MongoDB, Mongoose</li>
          <li>REST</li>
          <li>GraphQL</li>
        </ul>
      </div>
    </div>
  );
}
