import React from 'react';
import { Link } from 'react-router-dom';
import '../paymentselect/ps.scss'
import Sidebar from '../Sidebar/Sidebar';

function Ps() {
  return (
    <section className='home'>
        <Sidebar />
    <div className=''>
      <div className="l-container">
    
      <div className="b-game-card">
        <div className="b-game-card__cover" style={{}} id='pay1'>
        <center><h5 style={{padding:'10px'}}></h5></center>
        <Link  class="btn btn-success" to="/files/tech.png" target="_blank" download>Technology</Link>
        </div>
      </div>
      <div className="b-game-card">
        <div className="b-game-card__cover" style={{}} id='pay2'>
        <center><h5 style={{padding:'10px'}}></h5></center>
        <Link  class="btn btn-success" to="/files/auto.png" target="_blank" download>Automobiles</Link>
        </div>
      </div>
      <div className="b-game-card">
        <div className="b-game-card__cover" style={{}} id='pay3'>
        <center><h5 style={{padding:'10px'}}></h5></center>
        <Link  class="btn btn-success" to="/files/avidef.png" target="_blank" download>Aviation Defence</Link>
        </div>
      </div>
      <div className="b-game-card">  
        <div className="b-game-card__cover" style={{}} id='pay4'>
        <center><h5 style={{padding:'10px'}}></h5></center>
        <Link  class="btn btn-success" to="/files/bank.png" target="_blank" download>Banking</Link>
        </div>
      </div>
      <div className="b-game-card">
        <div className="b-game-card__cover" style={{}} id='pay5'>
        <center><h5 style={{padding:'10px'}}></h5></center>
        <Link  class="btn btn-success" to="/files/consgoods.png" target="_blank" download>Consumer Goods</Link>
        </div>
      </div>
      <div className="b-game-card">
        <div className="b-game-card__cover" style={{}} id='pay6'>
        <center><h5 style={{padding:'10px'}}></h5></center>
        <Link  class="btn btn-success" to="/files/enutil.png" target="_blank" download>Energy</Link>
        </div>
      </div>
      <div className="b-game-card">
        <div className="b-game-card__cover" style={{}} id='pay7'>
        <center><h5 style={{padding:'10px'}}></h5></center>
        <Link  class="btn btn-success" to="/files/fash.png" target="_blank" download>Fashion</Link>
        </div>
      </div>
      <div className="b-game-card">
        <div className="b-game-card__cover" style={{}} id='pay8'>
        <center><h5 style={{padding:'10px'}}></h5></center>
        <Link  class="btn btn-success" to="/files/health.png" target="_blank" download>Health</Link>
        </div>
      </div>
      <div className="b-game-card">
        <div className="b-game-card__cover" style={{}} id='pay9'>
        <center><h5 style={{padding:'10px'}}></h5></center>
        <Link  class="btn btn-success" to="/files/travel.png" target="_blank" download>Travel</Link>
        </div>
      </div>
      <div className="b-game-card">
        <div className="b-game-card__cover" style={{}} id='pay10'>
        <center><h5 style={{padding:'10px'}}></h5></center>
        <Link  class="btn btn-success" to="/files/manu.png" target="_blank" download>Manufacture</Link>
        </div>
      </div>
    </div>
    </div>

    </section>
  );
}

export default Ps;
