import classes from "./AppBackground.module.css";

const AppBackground = (props) => {
  return <div className={classes["app-background"]}>{props.children}</div>;
};

export default AppBackground;
