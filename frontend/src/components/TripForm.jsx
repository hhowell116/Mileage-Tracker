import React, { useState } from 'react';

export default function TripForm({ addTrip }) {
  const [start, setStart] = useState('');
  const [end, setEnd] = useState('');
  const [miles, setMiles] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!start || !end || !miles) return;
    addTrip({ start, end, miles });
    setStart('');
    setEnd('');
    setMiles('');
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow mb-4">
      <div className="mb-2">
        <label>Start Address</label>
        <input className="border p-1 w-full" value={start} onChange={e => setStart(e.target.value)} />
      </div>
      <div className="mb-2">
        <label>End Address</label>
        <input className="border p-1 w-full" value={end} onChange={e => setEnd(e.target.value)} />
      </div>
      <div className="mb-2">
        <label>Miles</label>
        <input type="number" className="border p-1 w-full" value={miles} onChange={e => setMiles(e.target.value)} />
      </div>
      <button className="bg-green-600 text-white px-4 py-2 rounded" type="submit">Add Trip</button>
    </form>
  );
}
