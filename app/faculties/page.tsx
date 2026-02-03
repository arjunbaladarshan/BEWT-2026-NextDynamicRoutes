import React from "react";
import wait from "wait";

async function FacultiesPage() {
  const temp = await fetch(
    "https://62d6c51451e6e8f06f12bd5d.mockapi.io/faculties",
  );
  const data = await temp.json();
  await wait(3000);
  return (
    <div>
      <ul>
        {data.map((d: any) => (
          <li>{d.facultyName}</li>
        ))}
      </ul>
    </div>
  );
}

export default FacultiesPage;
