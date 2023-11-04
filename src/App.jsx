import { useState } from 'react'
import Person from './components/Person.jsx'

const App = () => {
  const [persons, setPersons] = useState([{name: 'Arto Hellas', id: 0, phoneNumber: '202-x44-z453'}])
  const [newName, setNewName] = useState('')
  const [newPhnNumber, setnewPhnNumber] = useState('')
  const [searchName, setSearchName] = useState('')
  
  const filteredPersons = persons.filter(person => person.name.toLowerCase().includes(searchName.toLowerCase()))

  const addName = (event) => {
    event.preventDefault()
    const isNotUnique = persons.some(person => person.name === newName)
    if (!isNotUnique){
      const personObject = {
        name: newName,
        id: persons.length + 1,
        phoneNumber: newPhnNumber
      }
      setPersons(persons.concat(personObject))
      setNewName('')
    } else{
      window.alert(`${newName} is already on the PhoneBook`)
    }
  }
  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }
  const handleNumberChange = (event) => {
    setnewPhnNumber(event.target.value)
  }
  const handleSearchName = (event) => {
    setSearchName(event.target.value)
  }


  return(
    <div>
      <h2>PhoneBook</h2>
      <div>
          Filter name with: <input type='text' value={searchName} onChange={handleSearchName}/>
      </div>
      <h2>Add New Record</h2>
      <form onSubmit={addName}>
        <div>
          Name: <input type='text' value={newName} onChange={handleNameChange}/>
        </div>
        <div>
          Phone Number: <input type='text' value={newPhnNumber} onChange={handleNumberChange}/>
        </div>
        <div>
          <button type="submit">Add</button>
        </div>
      </form>
      <h2>Phone Records</h2>
      <div>
        {filteredPersons.map(person => <Person key={person.id} person={person}/>)}
      </div>
    </div>
  )
}

export default App
