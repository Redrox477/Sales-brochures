import React, { useEffect, useState } from 'react';
import axios from 'axios';

import '../Expolicy/Expolicy.css';
import AdminSidebar from '../Adminsidebar/Adminsidebar';

function Admindash() {
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
      const response = await axios.get('http://localhost:8001/feedback/getFeeds',{headers:header}); // Replace the URL with your backend endpoint
      setPolicies(response.data);
    } catch (error) {
      console.error('Error fetching policies:', error);
    }
  };

  return (
    <section className='home' style={{}}>
      <AdminSidebar />
      <h1 style={{ paddingLeft: '55px', paddingTop: '50px' }}>Feedback</h1>
      <div style={{overflowY:'scroll'}}>
      <div style={{ padding: '50px', flexDirection: 'column', alignItems: 'center' }}>
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Message</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {policies.map((policy, index) => (
              <tr key={policy.id}>
                {/* <th scope="row">{index + 1}</th> */}
                <td>{policy.fid}</td>
                <td>{policy.name}</td>
                <td>{policy.email}</td>
                <td>{policy.message}</td>
                <td>
                  <button type="button" className="btn btn-danger " onClick={() => {axios.delete("http://localhost:8001/feedback/delFeed/"+policy.fid);window.location.reload();}}  >Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      </div>
    </section>
  );
}

export default Admindash;
