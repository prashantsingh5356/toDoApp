import { useRef } from "react";

import classes from "./ToDoForm.module.css";

const ToDoForm = (props) => {
  const titleRef = useRef("");
  const descriptionRef = useRef("");

  const toDoHandler = (event) => {
    event.preventDefault();

    // input validation...

    if (
      titleRef.current.value.trim() === "" ||
      descriptionRef.current.value.trim() === ""
    ) {
      titleRef.current.value = "";
      descriptionRef.current.value = "";
      return;
    }

    const newToDo = {
      title: titleRef.current.value,
      description: descriptionRef.current.value,
    };

    props.addNewToDo(newToDo);
    titleRef.current.value = "";
    descriptionRef.current.value = "";
  };

  return (
    <form className={classes.form} onSubmit={toDoHandler}>
      <label className={classes["form-title"]}>Title</label>
      <br />
      <input
        ref={titleRef}
        className={classes["form-title__input"]}
        type="text"
      />
      <br />
      <label className={classes["form-description"]}>Description</label>
      <br />
      <textarea
        ref={descriptionRef}
        className={classes["form-description__input"]}
        rows="7"
        cols="28"
      />
      <br />
      <button type="submit" className={classes["form-btn"]}>
        Save
      </button>
    </form>
  );
};

export default ToDoForm;
