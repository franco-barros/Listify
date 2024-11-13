import React from "react";
import "./TodoForm.css";

function TodoForm({ setOpenModal, addTodo }) {
  const [newTodoValue, setNewTodoValue] = React.useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    addTodo(newTodoValue);
    setOpenModal(false);
  };

  const onCancel = () => {
    setOpenModal(false);
  };

  const onChange = (event) => {
    setNewTodoValue(event.target.value);
  };

  return (
    <form onSubmit={onSubmit}>
      <label>Escribe algo nuevo en tu lista de tareas</label>
      <textarea
        value={newTodoValue}
        onChange={onChange}
        placeholder="Crear una nueva tarea"
        required
      />
      <div className="TodoForm-ButtonsContainer">
        <button type="submit" className="TodoForm-button--add">
          Añadir
        </button>
        <button
          type="button"
          className="TodoForm-button--cancel"
          onClick={onCancel}
        >
          Cancelar
        </button>
      </div>
    </form>
  );
}

export { TodoForm };
