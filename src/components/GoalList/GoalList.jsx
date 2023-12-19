import styles from "./GoalList.module.css";
const GoalList = (props) => {
  return (
    <ul className={styles["goal-list"]}>
      {props.goals.map((goal) => {
        return <li key={goal.id}>{goal.text}</li>;
      })}
    </ul>
  );
};

export default GoalList;
