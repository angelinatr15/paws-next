import React from "react";
import JobsC from "../components/jobs/JobsC";
import JobsForm from "../components/jobs/JobsForm";

const jobs = ({ jobs }) => {
  return (
    <div>
      <JobsC jobs={jobs} />
      <JobsForm />
    </div>
  );
};

export default jobs;

export async function getStaticProps() {
  let jobs = [];
  try {
    const response = await fetch("http://localhost:5000/jobs");
    jobs = await response.json();
    console.log(jobs);
  } catch (e) {
    e.message;
  }
  return {
    props: { jobs: jobs },
  };
}
