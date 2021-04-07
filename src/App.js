import "./styles.css";
import React from "react";
import * as MI_API from "./api";

export default class App extends React.Component {
  state = {
    todos: []
  };

  componentDidMount() {
    this.obtenerTodos();
  }

  obtenerTodos() {
    MI_API.getTodos().then((res) => {
      console.log("Obtuve los todos");
      this.setState({ todos: res.data });
    });
  }

  eliminar(id) {
    MI_API.deleteTodos(id).then((res) => {
      console.log(`Eliminado: ${id}`);
      this.setState({
        todos: this.state.todos.filter((todo) => todo.id !== id)
      });
    });
  }

  crear(todo) {
    MI_API.saveTodo(todo).then((res) => {
      console.log(`Creado: ${todo.id}`);
      const newTodoList = this.state.todos;
      newTodoList.push(todo);
      this.setState({
        todos: newTodoList
      });
    });
  }

  render() {
    return (
      <div className="App">
        <h1>Aplicacion de lista de tareas</h1>
        <button
          onClick={() =>
            this.crear({
              id: this.state.todos.length + 1,
              title: "Prueba",
              completed: true,
              userId: 1
            })
          }
        >
          Crear todo
        </button>
        <ul>
          {this.state.todos.map((x) => (
            <li key={x.id}>
              <button onClick={() => this.eliminar(x.id)}> X </button>
              &nbsp;&nbsp;{x.completed ? "Completado" : "Pendiente"} --{" "}
              {x.title}
            </li>
          ))}{" "}
        </ul>
        <p>Marny Lopez</p>
      </div>
    );
  }
}
