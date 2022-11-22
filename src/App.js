import { useState } from "react";
import Form from "./components/Form";
import Header from "./components/Header";
import Tasks from "./components/Tasks";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Complete Lab 6",
      course: "CSCI 2110",
      dueDate: "20 November",
    },
    {
      id: 2,
      title: "Peer Review Assignment",
      course: "ASSC 1800",
      dueDate: "21 November",
    },
    {
      id: 3,
      title: "Peer Review Assignment",
      course: "ASSC 1800",
      dueDate: "21 November",
    },
    {
      id: 4,
      title: "Peer Review Assignment",
      course: "ASSC 1800",
      dueDate: "21 November",
    },
  ]);

  const [showForm, setShowForm] = useState(false);

  const handleShowForm = () => setShowForm(true);

  const handleDelete = (id) => {
    setTasks(tasks.filter((task) => (task ? task.id !== id : "")));
  };

  const handleAdd = ({ id, title, course, dueDate }) => {
    setTasks([
      ...tasks,
      {
        id,
        title,
        course,
        dueDate,
      },
    ]);
  };

  return (
    <div className="container main-container">
      <Header handleShowForm={handleShowForm} />
      {showForm ? <Form handleAdd={handleAdd} /> : ""}
      <Tasks tasks={tasks} handleDelete={handleDelete} />
    </div>
  );
}

export default App;
