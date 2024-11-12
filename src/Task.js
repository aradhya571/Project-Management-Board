import React from 'react'
import {FaTimes} from 'react-icons/fa' // Import FaTimes from react-icons/fa

export const Task= ({task, onDelete, onToggle}) => {
    return (
        <div className = {"task ${task.status ? 'status' : ''}"} onDoubleClick = {() => onToggle(task.id)}>
            <h3>{task.text}{' '} 
            <FaTimes style={{color: 'red', cursor: 'pointer'}} 
            onClick = {() => onDelete(task.id)
            }/>
            </h3>
            
        </div>
    )
}

export default Task