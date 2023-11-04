const PersonForm = (props) => {
    return(
        <form onSubmit={props.onSubmit}>
        <div>
          Name: <input type='text' value={props.nameVal} onChange={props.nameChange}/>
        </div>
        <div>
          Phone Number: <input type='text' value={props.phnNumberVal} onChange={props.phnNumberChange}/>
        </div>
        <div>
          <button type="submit">Add</button>
        </div>
      </form>
    )
}

export default PersonForm