import { useState } from "react";
import styles from "./NewGoal.module.css";

const NewGoal = (props) => {
  const [userInput, setUserInput] = useState("");

  const addGoalHandler = (event) => {
    event.preventDefault();

    const newGoal = {
      id: "goal-" + Math.random().toString(),
      text: userInput,
    };

    props.onAddGoal(newGoal);
    setUserInput("");
  };

  const textChangeHandler = (event) => {
    setUserInput(event.target.value);
  };

  return (
    <form className={styles["new-goal"]} onSubmit={addGoalHandler}>
      <input type="text" value={userInput} onChange={textChangeHandler} />
      <button type="submit">Add Goal</button>
    </form>
  );
};

export default NewGoal;
