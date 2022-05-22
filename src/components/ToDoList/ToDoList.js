import ToDoItem from "./ToDoItem";
import classes from "./ToDoList.module.css";

const ToDoList = (props) => {
  const toDoList = props.toDoData.map((todo) => {
    return (
      <ToDoItem
        key={todo.id}
        id={todo.id}
        title={todo.title}
        description={todo.description}
        onDelete={props.onDeleteToDo}
      />
    );
  });

  return (
    <div className={classes["todo-list"]}>
      <div className={classes["todo-list__header"]}>
        <span className={classes["header-title"]}>Title</span>
        <span className={classes["header-description"]}>Description</span>
        <span className={classes["header-action"]}>Action</span>
      </div>
      <div className={classes["header-border"]}></div>
      <div className={classes["todo-list__items"]}>{toDoList}</div>
    </div>
  );
};

export default ToDoList;
