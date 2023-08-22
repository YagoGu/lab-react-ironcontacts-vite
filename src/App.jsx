import "./App.css";
import contacts from "./contacts.json";
import React, { useState } from 'react';

function App() {
  let [count, setInit] = useState(contacts.slice(0, 5));

  count.map((famous) => {
    console.log(famous.name)
  })

  return (
    <div className="App">
      <table>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won Oscar</th>
            <th>Won Emmy</th>
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
                </tr>)
              })
            }
      </table>
    </div>
  );
}

export default App;
