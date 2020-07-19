import React from "react";
import students from "../../data/students";

export default (props) => {
  const studentsList = students.map((students) => {
    return (
      <li key={students.id}>
        {students.id}) {students.name} -> {students.score}
      </li>
    );
  });
  return (
    <div>
      <ul style={{ listStyle: "none" }}>{studentsList}</ul>
    </div>
  );
};
