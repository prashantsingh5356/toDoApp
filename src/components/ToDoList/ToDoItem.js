import classes from "./ToDoItem.module.css";
import ToDoItemBtnIcon from "./ToDoItemBtnIcon";

const ToDoItem = (props) => {
  const deleteToDoHandler = () => {
    props.onDelete(props.id);
  };

  return (
    <div className={classes.items}>
      <span className={classes["items-title"]}>{props.title}</span>
      <span className={classes["items-description"]}>{props.description}</span>
      <button
        onClick={deleteToDoHandler}
        type="button"
        className={classes["items-btn"]}
      >
        <ToDoItemBtnIcon />
      </button>
    </div>
  );
};

export default ToDoItem;
