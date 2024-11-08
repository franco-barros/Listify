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
      <label>Escribe tu nuevo TODO</label>
      <textarea
        value={newTodoValue}
        onChange={onChange}
        placeholder="Crear nuevo TODO"
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
