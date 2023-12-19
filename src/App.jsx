import { useState } from "react";
import GoalList from "./components/GoalList/GoalList";
import NewGoal from "./components/NewGoal/NewGoal";
import styles from "./App.module.css";

function App() {
  const [courseGoals, setCourseGoals] = useState([
    { id: "c01", text: "Finish the course" },
    { id: "c02", text: "Learn the topic" },
    { id: "c03", text: "Help others" },
  ]);

  const addNewGoalHandler = (newGoal) => {
    //setCourseGoals(courseGoals.concat(newGoal));
    setCourseGoals((prevCourseGoal) => {
      return prevCourseGoal.concat(newGoal);
    });
  };

  return (
    <div className={styles["course-goals"]}>
      <h2 className={styles["main-header"]}>Course Goals</h2>
      <NewGoal onAddGoal={addNewGoalHandler} />
      <GoalList goals={courseGoals} />
    </div>
  );
}

export default App;
