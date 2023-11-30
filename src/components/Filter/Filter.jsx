const Filter = ({ inputInfo, handleChange }) => {
    return (
        <div>
        <h3>Find contacts by name</h3>
            <input type="text" name="filter" value={inputInfo.filter} onChange={handleChange} />       
        </div>
    )
}

export default Filter;