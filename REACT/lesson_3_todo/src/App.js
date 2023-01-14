import { useState } from "react";
import AddTodo from "./components/AddTodo/AddTodo";
import TodoList from "./components/TodoList/TodoList";
import Color from "./components/Color";
import Like from "./components/Like";
import RenderPic from "./components/RenderPic";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  //! переменная для хранения и отображения всех тасков
  const [todos, setTodos] = useState([]);
  const [editTodo, setEditTodo] = useState({});
  //!  состояние для изменения, (хранятся тот таск, который будем менять)
  function handleTask(newObj) {
    let newTodos = [...todos]; //копирует значения предыдущего состояния
    newTodos.push(newObj); // в скопированный массив пушим новый таск
    setTodos(newTodos); // меняем состояние тудус
  }

  //! Функция на изменения статуса
  function changeStatus(id) {
    const newTodos = todos.map((item) => {
      if (item.id === id) {
        //сравнивает по id
        item.status = !item.status; // переворачивает значение статуса у этого обьекта
      }
      return item; // возвращает измененный обьект
    });
    setTodos(newTodos);
  }
  //! удаление по айди
  function deleteTodo(id) {
    let newTodos = todos.filter((item) => {
      return item.id !== id;
    });
    setTodos(newTodos);
  }

  //! фуекция для того чтобы получить один таск
  function handleEdit(index) {
    setEditTodo(todos[index]);
  }

  //! функция на изменение
  const handleEditSave = (newTask) => {
    // принимает новый обьект
    let newTodos = todos.map((item) => {
      // перебирает массив состояния todos, и возвращает новый массив
      if (item.id == newTask.id) {
        // сравнивает если айди нового таска равен айди какого нибудь элемента в массиве
        return newTask; // возвращается новый обьект
      }
      return item; // если проверка не проходит, старый обьект не меняется
    });
    setTodos(newTodos); // меняете состояние и перерисовываем компонент
  };

  console.log(editTodo);
  return (
    <div>
      {/* отображаем компонент AddTodo и передаем туда данные из App*/}
      <AddTodo handleTask={handleTask} todos={todos} setTodos={setTodos} />
      <TodoList
        changeStatus={changeStatus}
        todos={todos}
        deleteTodo={deleteTodo}
        handleEdit={handleEdit}
        editTodo={editTodo}
        setEditTodo={setEditTodo}
        handleEditSave={handleEditSave}
      />

      <Color />

      {/* <Like />
      <RenderPic /> */}
    </div>
  );
};

export default App;
