import Person from './Person'
const DisplayRecord = (props) => {
    return(
        <div>
        {props.personRecords.map(person => <Person key={person.id} person={person}/>)}
        </div>
    )
}

export default DisplayRecord