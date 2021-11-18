import React,{useState,useContext} from 'react'
import apiContext from '../contextApi/ApiContext'

const Contact = () => {
    const context = useContext(apiContext)
    const {addContact} = context;
    const [noteValue, setNoteValue] = useState({name:"",number:"",email:""})
    const onChange = (e)=>{
        setNoteValue({...noteValue,[e.target.name]:e.target.value})
    }
    const handleClick = (e)=>{
        e.preventDefault()
        addContact(noteValue.name,noteValue.number,noteValue.email) 
        setNoteValue({name:"",number:"",email:""})
    }
    return (
        <div className="container my-3">
            <h2 className="text-center">Contact Us</h2>
            <form>
            <div class="mb-3">
                    <label htmlFor="name" class="form-label">Name</label>
                    <input type="text" class="form-control" id="name" value={noteValue.name} name='name' aria-describedby="emailHelp" onChange={onChange} required/>
                </div>
            <div class="mb-3">
                    <label htmlFor="number" class="form-label">Contact Number</label>
                    <input type="number" class="form-control" id="number" name='number' value={noteValue.number}aria-describedby="emailHelp" onChange={onChange} required/>
                </div>
                <div class="mb-3">
                    <label htmlFor="email" class="form-label">Email address</label>
                    <input type="email" class="form-control" id="email" name='email' value={noteValue.email} aria-describedby="emailHelp" onChange={onChange} required/>
                </div>
                <button type="submit" class="btn btn-primary" onClick={handleClick}>Submit</button>
            </form>
        </div>
    )
}

export default Contact
