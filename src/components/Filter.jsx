const Filter = (props) => {
    return(
        <div>
          Filter name with: <input type='text' value={props.value} onChange={props.onChange}/>
      </div>
    )
}

export default Filter