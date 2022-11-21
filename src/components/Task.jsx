import React from 'react'

const Task = ({ id, title, course, dueDate, handleDelete }) => {
    return (
        <div className="card" key={id}>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{course}</p>
                <p className="card-text">{dueDate}</p>
            </div>
            <button className="btn btn-danger" onClick={() => handleDelete(id)}>Delete</button>
        </div>
    )
}

export default Task;