import React from 'react'
import {useState} from 'react'
import './addTask.css';



export const AddTask = ({ onAdd }) => {

    const [text, setText] = useState('')
    const [status, setStatus] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()

        if(!text){
            alert('Please add a task')
            return
        }
        onAdd({text,status})

        setText('')
        setStatus('')

    }
    return (
        <form className = 'add-form' onSubmit={onSubmit}>
            <div className= 'form-control'>
                <label>Task</label>
                <input type='text' placeholder='Add Task'  value ={text} onChange ={(e) => setText(e.target.value)} />
            </div>
                <div className= 'form-control'>
                <label>Status</label>
                <input type='text' placeholder='Add status: to do/ in progress / review / done'  value ={status} onChange ={(e) => setStatus(e.target.value)} />
                </div>
             
            <input className='btn btn-block' type='submit' value='Save Task'  /> 
        </form>
    )}

export default AddTask
