import TodoItem from "./TodoItem/TodoItem";
function TodoList(props) {
  return (
    <>
    <TodoItem data={props.data[0]}></TodoItem>
    <TodoItem data={props.data[1]}></TodoItem>
    <TodoItem data={props.data[2]}></TodoItem>
    <TodoItem data={props.data[3]}></TodoItem>

    </>
  );
}

export default TodoList;
