import axios from 'axios';
import { useEffect, useState } from 'react';

const Dashboard = ({ token }) => {
  const [diagrams, setDiagrams] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/diagrams', {
      headers: { Authorization: `Bearer ${token}` }
    }).then(res => setDiagrams(res.data));
  }, [token]);

  return (
    <div>
      <h3>Saved Diagrams</h3>
      <ul>
        {diagrams.map(d => <li key={d._id}>{d.name}</li>)}
      </ul>
    </div>
  );
};

export default Dashboard;
