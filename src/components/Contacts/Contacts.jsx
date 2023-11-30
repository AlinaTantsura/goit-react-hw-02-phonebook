const Contacts = ({contacts, handleDelete}) =>{
    return (
        <ul>
            {contacts.map(({ name, id, number }) => (<li key={id} id={id}>{name}: {number}    
            <button type='button' onClick={handleDelete}>Delete</button> </li>
            ))}
        </ul>
    )
}

export default Contacts;