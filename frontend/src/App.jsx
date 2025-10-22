import React, { useState, useEffect } from 'react';
import TripForm from './components/TripForm';
import TripList from './components/TripList';
import Navbar from './components/Navbar';
import axios from 'axios';

function App() {
  const [trips, setTrips] = useState([]);

  useEffect(() => {
    // Fetch trips from backend when app loads
    axios.get('http://localhost:5000/trips')
      .then(res => setTrips(res.data))
      .catch(err => console.log(err));
  }, []);

  const addTrip = (trip) => {
    axios.post('http://localhost:5000/trips', trip)
      .then(res => setTrips([...trips, res.data]))
      .catch(err => console.log(err));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="max-w-3xl mx-auto p-4">
        <TripForm addTrip={addTrip} />
        <TripList trips={trips} />
      </div>
    </div>
  );
}

export default App;
