import React from "react";

async function DimsPage({ params }: { params: Promise<{ inst: any }> }) {
  const { inst } = await params;
  console.log("Inst =", inst);
  return (
    <>
      {inst && (
        <div>
          this is the page for college
          <h1>{inst[0]}</h1>
        </div>
      )}
      {!inst && <>College Page</>}
    </>
  );
}

export default DimsPage;
