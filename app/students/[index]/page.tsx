import React from "react";
import students from "@/app/data/data";

async function StudentDetail({
  params,
}: {
  params: Promise<{ index: number }>;
}) {
  const ans = await params;
  return (
    <div>
      <h1>Name: {students[ans.index].name}</h1>
      <h2>Age: {students[ans.index].age}</h2>

      <img src={students[ans.index].imgPath} />
    </div>
  );
}

export default StudentDetail;
