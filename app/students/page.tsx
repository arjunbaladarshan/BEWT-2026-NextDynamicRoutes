import React from "react";
import students from "@/app/data/data";
function StudentPage() {
  return (
    <div>
      <h1> This is a home page for students</h1>
      <ul>
        {students.map((stu) => (
          <li>{stu.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default StudentPage;
