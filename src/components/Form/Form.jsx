const Form = ({handleSubmit, handleChange}) => {
    return (
        <form onSubmit={handleSubmit}>
        <label>
            Name
            <input type="text" name="name" onChange={handleChange} required />
        </label>
            <button type="submit">Add contact</button>
    </form>
    )
    
}
export default Form;