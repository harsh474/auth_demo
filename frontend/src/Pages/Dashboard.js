// Dashboard.js
import React, { useEffect, useState } from 'react';

const Dashboard = () => {
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const response = await fetch('http://localhost:4000/api/user/dashboard', {
          credentials: 'include', // Include cookies in requests
        });

        if (response.ok) {
          const data = await response.json();
          setMessage(data.message);
        } else {
          alert('Please login to view this page.');
          window.location.href = '/login';
        }
      } catch (error) {
        console.error('Dashboard fetch error:', error);
      }
    };

     fetchDashboardData();
  }, []);

  return (
    <div>
      <table class="table-auto ml-1 mt-10 w-[733px]">
  <thead>
    <tr>
     <th>Name</th>
      <th>Song</th>
      <th>Artist</th>
      <th>Year</th>
     
    </tr>
  </thead>
  <tbody>
    <tr> 
      <td>Ramesh</td>
      <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
      <td>Malcolm Lockyer</td>
      <td>1961</td>
    </tr>
    <tr> 
      <td>John</td>
      <td>Witchy Woman</td>
      <td>The Eagles</td>
      <td>1972</td>
    </tr>
    <tr>
      <td>Michael</td>
      <td>Shining Star</td>
      <td>Earth, Wind, and Fire</td>
      <td>1975</td>
    </tr> 
    <tr>
      <td>Krish</td>
      <td>Shining Star</td>
      <td>Earth, Wind, and Fire</td>
      <td>1975</td>
    </tr>
  </tbody>
</table>
    </div>
  );
};

export default Dashboard;
