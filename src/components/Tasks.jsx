import React from 'react'
import Task from './Task';

const Tasks = ({ tasks, handleDelete }) => {
    return (
        <div className="row tasks-row">
            {
                tasks.map((task)=> (
                   <Task {...task} handleDelete={handleDelete} />
                ))
            }
        </div>
    )
}

export default Tasks;