import axios from "axios";

axios.defaults.headers.common["Token"] = "123456789";
const API_URL = axios.create({
  baseURL: `https://jsonplaceholder.typicode.com/`
});

export function getTodos() {
  return API_URL.get(`/todos`, {}); // Config en el segundo param
}

export function deleteTodos(id) {
  return API_URL.delete(`/todos/${id}`, {}); // Config en el segundo param
}

export function saveTodo(todo) {
  return API_URL.post(`/todos`, { todo }); // Instancia en el segundo param
}

export function putTodo(todo) {
  return API_URL.put(`/todos`, { todo }); // Instancia en el segundo param
}
