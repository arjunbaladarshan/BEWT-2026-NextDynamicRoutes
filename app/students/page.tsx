import React from "react";
import students from "@/app/data/data";
import Link from "next/link";
function StudentPage() {
  return (
    <div>
      <h1> This is a home page for students</h1>
      <Link href="/login">Login</Link>
      <ul>
        {students.map((stu) => (
          <li>{stu.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default StudentPage;
