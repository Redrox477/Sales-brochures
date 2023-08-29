import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Sidebar from '../Sidebar/Sidebar';

function Renpol() {
  const username = "prajeey";
  const password="1111111"

  const authHeader = `Basic ${btoa(`${username}:${password}`)}`;
  const header = {
    'Authorization': authHeader,
    'Content-Type': 'application/json',
  };

  const [policies, setPolicies] = useState([]);

  useEffect(() => {
    fetchPolicies();
  }, []);

  const fetchPolicies = async () => {
    try {
      const response = await axios.get('http://localhost:8080/users/showpolicies',{headers:header}); // Replace the URL with your backend endpoint
      setPolicies(response.data);
    } catch (error) {
      console.error('Error fetching policies:', error);
    }
  };

  return (
    <section className='home' style={{}}>
      <Sidebar />
      <h1 style={{ paddingLeft: '55px', paddingTop: '50px' }}>Renew Policy</h1>
      <div style={{ padding: '50px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <table className="table table-striped" >
          <thead >
            <tr >
              <th scope="col" >#</th>
              <th scope="col">Policy Name</th>
              <th scope="col">Policy Number</th>
              <th scope="col">Type</th>
              <th scope="col">Duration</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {policies.map((policy, index) => (
              <tr key={policy.id}>
                <th scope="row">{index + 1}</th>
                <td>{policy.policyName}</td>
                <td>{policy.policyNumber}</td>
                <td>{policy.type}</td>
                <td>{policy.duration}</td>
                <td>
                  <button type="button" className="btn btn-warning">Renew</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default Renpol;
