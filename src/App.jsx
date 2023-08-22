import "./App.css";
import contacts from "./contacts.json";
import { useState } from 'react';

function App() {
  const [famousArray, setFamous] = useState(contacts.slice(0, 5));

  function deleteFamous (famousId) {
    const filteredFamous = famousArray.filter((famous) => {
      console.log(famous.id, famousId)
      return famous.id !== famousId
    })
    setFamous(filteredFamous);
  }

  function addRandom () {
    const moreFamous = [...famousArray]
    let newFamous;

    do {
      newFamous = contacts[Math.floor(Math.random()*contacts.length)]
    } 
    while (
      famousArray.includes(newFamous)
    )

    moreFamous.push(newFamous)

    setFamous(moreFamous)
  }

  function sortByName() {
    const sortedNames = famousArray.sort( (a, b) => {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
      return 0;
    })

    const newArr = [...sortedNames];

    setFamous(newArr);
  }

  function sortByPopularity() {
    
    const sortedPopularities = famousArray.sort( (a, b) => 
      b.popularity - a.popularity
    )
    
    const newArr = [...sortedPopularities];

    setFamous(newArr);
  }

  return (
    <div className="App">
      <div className="buttonGroup">
        <button onClick={() => addRandom() }>Add Random Contact</button>
        <button onClick={() => sortByPopularity() }>Sort by Popularity</button>
        <button onClick={() => sortByName() }>Sort by Name</button>
      </div>
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
              famousArray.map((famous) => {
                return (
                <tr>
                  <td><img src={famous.pictureUrl} alt="Profile picture" /></td>
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
