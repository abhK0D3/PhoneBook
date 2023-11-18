import { useState, useEffect } from 'react'
import DisplayRecord from './components/DisplayRecord'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import axios from 'axios'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newPhnNumber, setnewPhnNumber] = useState('')
  const [searchName, setSearchName] = useState('')

  useEffect(() => {
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log(response.data)
        setPersons(response.data)
      })
  }, [])
  
  const filteredPersons = persons.filter(person => person.name.toLowerCase().includes(searchName.toLowerCase()))

  const addName = (event) => {
    event.preventDefault()
    const isNotUnique = persons.some(person => person.name === newName)
    if (!isNotUnique){
      const personObject = {
        name: newName,
        id: persons.length + 1,
        number: newPhnNumber
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
      <Filter value={searchName} onChange={handleSearchName}/>
      {/* <div>
          Filter name with: <input type='text' value={searchName} onChange={handleSearchName}/>
      </div> */}
      <h2>Add New Record</h2>
      <PersonForm onSubmit = {addName} nameVal={newName} nameChange={handleNameChange} phnNumberVal={newPhnNumber} phnNumberChange={handleNumberChange}/>
      
      <h2>Phone Records</h2>
      <DisplayRecord personRecords={filteredPersons}/>
    </div>
  )
}

export default App
