const Filter = ({ inputInfo, handleChange }) => {
   const {filter } = inputInfo;
    return (
        <div>
        <h3>Find contacts by name</h3>
            <input type="text" name="filter" value={filter} onChange={handleChange} />       
        </div>
    )
}

export default Filter;