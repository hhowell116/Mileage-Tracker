import React from 'react';

export default function TripList({ trips }) {
  return (
    <div>
      {trips.map((trip, idx) => (
        <div key={idx} className="bg-white p-4 rounded shadow mb-2">
          <div><strong>From:</strong> {trip.start}</div>
          <div><strong>To:</strong> {trip.end}</div>
          <div><strong>Miles:</strong> {trip.miles}</div>
        </div>
      ))}
    </div>
  );
}
