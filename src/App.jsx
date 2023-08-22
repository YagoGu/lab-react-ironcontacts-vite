import "./App.css";
import contacts from "./contacts.json";
import React, { useState } from 'react';

function App() {
  const [count, setFamous] = useState(contacts.slice(0, 5));

  function deleteFamous (famousId) {
    const filteredFamous = count.filter((famous) => {
      console.log(famous.id, famousId)
      return famous.id !== famousId
    })
    setFamous(filteredFamous);
  }

  return (
    <div className="App">
      <table>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won Oscar</th>
            <th>Won Emmy</th>
            <th>Action</th>
          </tr>
            {
              count.map((famous) => {
                return (
                <tr>
                  <td><img width="30px" src={famous.pictureUrl} alt="Profile picture" /></td>
                  <td>{famous.name}</td>
                  <td>{famous.popularity}</td>
                  {famous.wonOscar && <td>🏆</td>}
                  {!famous.wonOscar && <td></td>}
                  {famous.wonEmmy && <td>🏆</td>}
                  {!famous.wonEmmy && <td></td>}
                  <td><button onClick={() => deleteFamous(famous.id) }>Delete</button></td>
                </tr>
                )
              })
            }
      </table>
    </div>
  );
}

export default App;
