const Form = ({handleSubmit}) => {
    return (
        <form onSubmit={handleSubmit}>
        <label>
            Name
            <input type="text" name="name" required />
        </label>
            <button type="submit">Add contact</button>
    </form>
    )
    
}
export default Form;