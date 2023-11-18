const Person = ({person}) => {
    console.log(person.name)
    console.log(person.number)
    return(
        <p>{person.name} {person.number}</p>
    )
}

export default Person
