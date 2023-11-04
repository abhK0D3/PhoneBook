import { useState } from 'react'
import Person from './components/Person.jsx'

const App = () => {
  const [persons, setPersons] = useState([{name: 'Arto Hellas', id: 0}])
  const [newName, setNewName] = useState('')

  const addName = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName,
      id: persons.length + 1
    }
    setPersons(persons.concat(personObject))
    setNewName('')
  }
  const handleChange = (event) => {
    setNewName(event.target.value)
  }

  return(
    <div>
      <h2>PhoneBook</h2>
      <form onSubmit={addName}>
        <div>
          name: <input type='text' value={newName} onChange={handleChange}/>
        </div>
        <div>
          <button type="submit">Add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map(person => <Person key={person.id} person={person}/>)}
      </ul>
    </div>
  )
}

export default App
