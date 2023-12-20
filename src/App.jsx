import { useState, useEffect } from "react";
import GoalList from "./components/GoalList/GoalList";
import NewGoal from "./components/NewGoal/NewGoal";
import styles from "./App.module.css";

function App() {
  const [courseGoals, setCourseGoals] = useState([]);

  //load and set goals in the useEffect
  useEffect(() => {
    let foundGoals = [];
    //get the localstorage items.
    if (localStorage.length) {
      for (let i = 0; i < localStorage.length; i++) {
        //get key and make sure it's 'goal'
        if (localStorage.key(i).includes("goal")) {
          //add to the found goals
          foundGoals.push({
            id: localStorage.key(i),
            text: localStorage.getItem(localStorage.key(i)),
          });
        }
      }
      setCourseGoals(foundGoals);
    }
  }, []);

  const addNewGoalHandler = (newGoal) => {
    //setCourseGoals(courseGoals.concat(newGoal));
    setCourseGoals((prevCourseGoal) => {
      return prevCourseGoal.concat(newGoal);
    });
    //add to local storage
    localStorage.setItem(newGoal.id, newGoal.text);
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
