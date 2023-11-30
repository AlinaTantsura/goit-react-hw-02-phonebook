// export const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101'
//       }}
//     >
//       React homework template
//     </div>
//   );
// };

import { Component } from "react";
import Contacts from "./Contacts/Contacts";
import Form from "./Form/Form";
import Filter from "./Filter/Filter";


export class App extends Component{
    // state = {
    //     contacts: [],
    //     filter: '',
    //     name: '',
    //     number: '',
    // }
    state = {
  contacts: [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  ],
  filter: '',
    }
    addNewContact = (obj) => {
        this.setState((prev) => prev.contacts.push(obj))
    }
    handleChange = (event) => {
        this.setState({
            filter: event.target.value,
        // contacts: this.state.contacts.filter(({ name }) => {
        //         return (name.toLowerCase().includes(this.state.filter.toLowerCase()));
        // })
        });
        // this.state.contacts.filter(({ name }) => {
        //         return (name.toLowerCase().includes(this.state.filter.toLowerCase()));
        //     })
    }
    render() {
        return(
            <>
                <h1>Phonebook</h1>
                <Form addNewContact={this.addNewContact} />
           
                {this.state.contacts.length > 0 &&
                    <>
                    <h2>Contacts</h2>
                    <Filter inputInfo={this.state} handleChange={this.handleChange} />
                    <Contacts contacts={this.state.contacts} />
                    </>
            }
            </>
        )
    }
}