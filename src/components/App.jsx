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
import Section from './Section/Section'
import Contacts from "./Contacts/Contacts";
import Form from "./Form/Form";
import { nanoid } from "nanoid";

export class App extends Component{
    state = {
        contacts: [],
        name: ''
    }
    
    handleSubmit = (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        
        const name = form.elements.name.value;
        // const id = nanoid();
        // const obj = { name: name, id: id };
        // this.setState((prev) => {
            console.log(name);
        //     // return contacts: prev.contacts.push(obj),
        //     console.log(this.state.contacts)
        
        // })
    }

    render(){
        return(
            <>
            <Section title="Phonebook">
                <Form handleSubmit={this.handleSubmit}/>
            </Section>
            {this.state.contacts.length > 0 &&
            (<Section title="Contacts">
                <Contacts contacts={this.state.contacts} />
            </Section>
            )}
            </>
        )
    }
}