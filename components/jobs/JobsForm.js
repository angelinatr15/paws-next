import { useRouter } from "next/router";
import React, { useRef } from "react";

const JobsForm = () => {
  const techRef = useRef();

  const router = useRouter();
  async function submitLink(e) {
    e.preventDefault();
    const currentJob = { technology: techRef.current.value };
    try {
      const response = await fetch("http://localhost:5000/jobs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(currentJob),
      });

      const newJob = await response.json();
      console.log(newJob);
      router.reload();
    } catch (e) {
      console.log(e.message);
    }
  }

  return (
    <div>
      <form onSubmit={submitLink}>
        <input ref={techRef} placeholder="technology stack" type="text" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default JobsForm;
