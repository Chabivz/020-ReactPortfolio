import './styles.css';
import React from 'react';
export default function Footer() {
  return (
    <footer>
      <p>@Chris Abiva</p>
      <div className='ss-icons'>
        <a href='https://github.com/Chabivz' target="_blank" rel="noopener noreferrer">
          <img src='https://res.cloudinary.com/dmxemti24/image/upload/v1629647154/Icons/githubBlackOctopus.jpg'></img>
        </a>
        <a href='https://www.linkedin.com/in/chrisabiva/' target="_blank" rel="noopener noreferrer">
          <img src='https://res.cloudinary.com/dmxemti24/image/upload/v1629603193/Icons/027-linkedin_czhnqt.png'></img>
        </a>
      </div>

    </footer>
  );
}
