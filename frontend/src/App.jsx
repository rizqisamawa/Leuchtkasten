import { useState, useEffect } from "react";

function App() {
  const [message, setMessage] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch("http://127.0.0.1:8000/api/hello");
    const data = await response.json();
    setMessage(data.peoples);
  };

  return (
    <>
      <div>
        <table>
          <thead>
              <tr>
                <th>No</th>
                <th>Nama</th>
                <th>Age</th>
              </tr>
          </thead>
          <tbody>
            {message.map((item, i) => (
              <tr key={i}>
                <td>{i+1}</td>
                <td>{item.name}</td>
                <td>{item.age}</td>
              </tr>
            ))}
            
          </tbody>
        </table>
      </div>
    </>
  );
}

export default App;
