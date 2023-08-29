import React from 'react';
import './Landing.css';
import imge from '../img/Paid idea.gif';


const LandingPage = () => {
  return (
    <body className='homer'>
    <div className="landing-page">
      <header>
        <div className="contae">
          <a href="#" className="logo">SalesEdge <b>Pro</b></a>
          <ul className="links">
            {/* <li>Home</li> */}
            {/* <li>About Us</li> */}
            {/* <li>Work</li> */}
            <li><a style={{textDecoration:'none',color:'grey'}}href='/contact'> Feedback</a></li>
            <a href='/login'><li>Login</li></a>
          </ul>
        </div>
      </header>
      <div className="content">
        <div className="contae">
          <div className="info">
            <h1>Welcome to <b>SalesEdge Pro</b>: Your Sales Success Companion</h1>
            <p>Unlock the Power of Data-Driven Sales Pitches!
Are you a project consultant or a key account manager striving to enhance your sales strategies and boost your success rate? Look no further! ConsultConnect is here to empower you with the tools you need for impactful sales pitches that convert.
</p>
            {/* <button>Button name</button> */}
          </div>
          <div className="image">
            <img src={imge} alt='landing img'/>
          </div>
        </div>
      </div>
    </div>
  </body>
  );
};

export default LandingPage;
