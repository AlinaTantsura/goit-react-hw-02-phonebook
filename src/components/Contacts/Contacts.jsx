const Contacts = ({contacts}) =>{
    return (
        <ul>
            {contacts.map(({ name, id, number }) => (<li key={id}>{name}: {number}</li>))}
        </ul>
    )
}

export default Contacts;