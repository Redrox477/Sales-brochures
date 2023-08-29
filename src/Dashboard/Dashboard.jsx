import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import '../Dashboard/Dashboard.css'
import '../jamal.scss'

import { FaAddressCard,FaWpforms , FaPeopleArrows} from "react-icons/fa";
function Dashboard() {
  return (
    
    <section class="home">
      <Sidebar />

  <section class="card__container">

    <div class="card__bx card__1">
      <div class="card__data">
        <div class="card__icon">
          <div class="card__icon-bx">
            <i class="pen-ruler"><FaAddressCard/></i>
          </div>
        </div>
        <div class="card__content">
          <h3>Project Brochures</h3>
          <p>Your Active Project Brochures</p>
          <a href="/payment">More Info</a>
        </div>
      </div>
    </div>

  
    <div class="card__bx card__2">
      <div class="card__data">
        <div class="card__icon">
          <div class="card__icon-bx"><i class="code">< FaWpforms/></i></div>
        </div>
        <div class="card__content">
          <h3>New<br></br>Brochures</h3>
          <p>New Brochures are Always Available</p>
          <a href="/payment">More Info</a>
        </div>
      </div>
    </div>
    <div class="card__bx card__3">
      <div class="card__data">
        <div class="card__icon">
          <div class="card__icon-bx"><i class="rocket">< FaPeopleArrows /></i></div>
        </div>
        <div class="card__content">
          <h3>Industry<br></br>Brochures</h3>
          <p>You Can Download Your Specific brochures Here</p>
          <a href="/payment">More Info</a>
        </div>
      </div>
    </div>

  </section>

</section>
  )
}

export default Dashboard