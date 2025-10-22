import { useEffect, useState } from "react";

function App() {
  const [backendMessage, setBackendMessage] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/api/ping")
      .then((res) => res.json())
      .then((data) => setBackendMessage(data.message))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-gray-800">
      <h1 className="text-3xl font-bold mb-4">Mileage Tracker</h1>
      <p className="text-lg">{backendMessage || "Connecting to backend..."}</p>
    </div>
  );
}

export default App;
