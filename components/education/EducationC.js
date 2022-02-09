import React, { useState } from 'react';
import Education from './Education';

const EducationC = ({education}) => {

  return <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>

    {education.map((ed)=>(
        <Education key={ed.id} id={ed.id} image={ed.image} species={ed.species} description={ed.description}/>
    ))}

  </div>;
};

export default EducationC;
