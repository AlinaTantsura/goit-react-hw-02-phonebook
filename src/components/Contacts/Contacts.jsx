const Contacts = ({contacts}) =>{
    return(
        <ul>
            {contacts.map(({name}) => (<li>{name}</li>))}
        </ul>
        
    )
}

export default Contacts;