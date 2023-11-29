const Contacts = ({contacts}) =>{
    return(
        <ul>
            {contacts.map(({name, id}) => (<li key={id}>{name}</li>))}
        </ul>
        
    )
}

export default Contacts;