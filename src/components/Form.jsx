import { useState } from "react";

const Form = ({ handleAdd }) => {
  const [title, setTitle] = useState("");
  const [course, setCourse] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title) {
      alert("Please add a task");
      return;
    }
    handleAdd({ title, course });
    setTitle("");
    course("");
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="title">Title</label>
        <input
          id="title"
          className="form-control"
          placeholder="Add Task"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="title">Course</label>
        <input
          id="course"
          className="form-control"
          placeholder="Course"
          value={course}
          onChange={(e) => setCourse(e.target.value)}
        />
      </div>
      <input type="submit" value="Save Task" className="btn btn-primary" />
    </form>
  );
};

export default Form;
