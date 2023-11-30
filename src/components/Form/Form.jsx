import { Component } from "react";
import { nanoid } from "nanoid";

class Form extends Component{
    state = {
        name: '',
        number: '',
    }
 
    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }
    handleSubmit = (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        const name = form.elements.name.value;
        const num = form.elements.number.value;
        const id = nanoid();
        const obj = { name: name, number: num, id: id };
        this.props.addNewContact(obj);
        this.setState({ name: '', number: '' });
        form.reset();
    }
    

    render() {
        return (
        <form onSubmit={this.handleSubmit}>
        <label>
            Name<br/>
            <input type="text" name="name" value={this.state.name} onChange={this.handleChange} required />
        </label><br/>
        <label>
            Number<br/>
            <input type="tel" name="number" value={this.state.number} onChange={this.handleChange} required />
        </label><br/>
        <button type="submit">Add contact</button>
    </form>
    )
    }
}

export default Form;















// const Form = ({ handleSubmit, handleChange, inputInfo }) => {
//     return (
//         <form onSubmit={handleSubmit}>
//         <label>
//             Name<br/>
//             <input type="text" name="name" value={inputInfo.name} onChange={handleChange} required />
//         </label><br/>
//         <label>
//             Number<br/>
//             <input type="tel" name="number" value={inputInfo.number} onChange={handleChange} required />
//         </label><br/>
//         <button type="submit">Add contact</button>
//     </form>
//     )
    
// }
// export default Form;