import React from 'react';
import JobC from './JobC';

const JobsC = ({jobs}) => {
  return <div>
      {jobs.map((job)=>(
          <JobC key={job.id} job={job}/>
      ))}
  </div>;
};

export default JobsC;
