import React from 'react';
import axios from 'axios';
import Sidebar from '../Sidebar/Sidebar';
import '../NewPol/Newpol.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Newpol() {
  const username = "prajeey";
  const password="1111111"

  const authHeader = `Basic ${btoa(`${username}:${password}`)}`;
  const header = {
    'Authorization': authHeader,
    'Content-Type': 'application/json',
  };

  // Function to send policy data to the backend
  const addPolicyToDatabase = (x) => {
    // const reg = {"policy_name":policyName , "policy_number":policyNumber , "type":type , "duration":duration};
    // console.log(reg);
    axios.post('http://localhost:8080/users/policies', x,{headers:header})
      .then((response) => {
        console.log(response.data); // Assuming the backend returns a success message
        toast.success("Policy Added to Your Account Successfully");
      })
      .catch((error) => {
        console.error('Error adding policy:', error);
        toast.error("error");
      });
  };

  const handleAddPolicy = (policyadding) => {
    addPolicyToDatabase(policyadding);
    // toast.success("Policy Added to Your Account Successfully");
  };

  return (
    <section>
      <ToastContainer />
      <Sidebar />
      <section id="advertisers" class="home pt-5 pb-5" style={{ overflowX: 'hidden' }}>
        <div class="container" style={{ display: 'flex', flexDirection: 'column' }}>
          <div class="row" id='newpcards'>
            <div class="section-header text-center">
              <h2 class="fw-bold fs-1">
                Our
                <span class="b-class-secondary"> Policy </span>Services
              </h2>
            </div>
          </div>
          <div class="row mt-5 mt-md-4 row-cols-1 row-cols-sm-1 row-cols-md-3 justify-content-center" id='allcardsarehere'>
            <div class="col">
              <div class="service-card">
                <h3>Policy Name:-ENDOWMENT WITH PROFITS</h3>
                <h3>Policy No:-  <span class="b-class-secondary" style={{ color: 'green' }}> 14</span></h3>
                <p>Duration: 36 months</p><br></br>
                <p>Type: Endowment.</p>
                <button
                  type="button"
                  class="btn btn-success"
                  onClick={() => handleAddPolicy({
                    policyName: 'ENDOWMENT WITH PROFITS',
                    policyNumber: '14',
                    type: 'Endowment',
                    duration: '36 months',
                  })}
                >
                  Add This Policy
                </button>
              </div >
            </div   >
            <div class="col">
              <div class="service-card">
                <h3>Policy Name:-JEEVAN AMRIT</h3>
                <h3>Policy No:-  <span class="b-class-secondary" style={{ color: 'green' }}> 41</span></h3>
                <p>Duration: 24 months</p><br></br>
                <p>Type: Endowment.</p>
                <button
                  type="button"
                  class="btn btn-success"
                  onClick={() => handleAddPolicy({
                    policyName: 'JEEVAN AMRIT',
                    policyNumber: '41',
                    type: 'Endowment',
                    duration: '24 months',
                  })}
                >
                  Add This Policy
                </button>
              </div >
            </div   >
            <div class="col">
              <div class="service-card">
                <h3>Policy Name:-JEEVAN ANKUR</h3>
                <h3>Policy No:-  <span class="b-class-secondary" style={{ color: 'green' }}> 48</span></h3>
                <p>Duration: 10 Years</p><br></br>
                <p>Type: Endowment.</p>
                <button
                  type="button"
                  class="btn btn-success"
                  onClick={() => handleAddPolicy({
                    policyName: 'JEEVAN ANKUR',
                    policyNumber: '48',
                    type: 'Endowment',
                    duration: '10 Years',
                  })}
                >
                  Add This Policy
                </button>
              </div >
            </div   >
            <div class="col">
              <div class="service-card">
                <h3>Policy Name:- NEW JANARAKSHA</h3>
                <h3>Policy No:-  <span class="b-class-secondary" style={{ color: 'green' }}> 81</span></h3>
                <p>Duration: 5 Years</p><br></br>
                <p>Type: Endowment.</p>
                <button
                  type="button"
                  class="btn btn-success"
                  onClick={() => handleAddPolicy({
                    policyName: 'NEW JANARAKSHA',
                    policyNumber: '81',
                    type: 'Endowment',
                    duration: '5 Years',
                  })}
                >
                  Add This Policy
                </button>
              </div >
            </div   >
            <div class="col">
              <div class="service-card">
                <h3>Policy Name:- JEEVAN SREE 1</h3>
                <h3>Policy No:-  <span class="b-class-secondary" style={{ color: 'green' }}> 91</span></h3>
                <p>Duration: 7 Years</p><br></br>
                <p>Type: Endowment.</p>
                <button
                  type="button"
                  class="btn btn-success"
                  onClick={() => handleAddPolicy({
                    policyName: 'JEEVAN SREE 1',
                    policyNumber: '91',
                    type: 'Endowment',
                    duration: '7 years',
                  })}
                >
                  Add This Policy
                </button>
              </div >
            </div   >
            <div class="col">
              <div class="service-card">
                <h3>Policy Name:- JEEVAN PRAMUKTH</h3>
                <h3>Policy No:-  <span class="b-class-secondary" style={{ color: 'green' }}> 69</span></h3>
                <p>Duration: 36 months</p><br></br>
                <p>Type: Endowment.</p>
                <button
                  type="button"
                  class="btn btn-success"
                  onClick={() => handleAddPolicy({
                    policyName: 'JEEVAN PRAMUKTH',
                    policyNumber: '69',
                    type: 'Endowment',
                    duration: '36 months',
                  })}
                >
                  Add This Policy
                </button>
              </div >
            </div   >
          </div>
        </div>
      </section>
    </section>
  );
}

export default Newpol;
