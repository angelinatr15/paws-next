import React from 'react';

const JobC = ({job}) => {
  return <div>
      {job.id} {job.technology}
  </div>;
};

export default JobC;
