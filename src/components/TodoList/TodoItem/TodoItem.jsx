function TodoItem(props) {
  // Convert dueDate to string format
  const formattedDueDate = props.data.dueDate.toString(); // ตัวอย่างการแปลง Date เป็น string

  return (
    <div className="form-control">
      <div className="cb-container">
        <input checked={props.data.isFinished} type="checkbox"></input>
      </div>

      <div>
    Task: {props.data.task}
       
      </div>
    </div>
  );
}

export default TodoItem;
