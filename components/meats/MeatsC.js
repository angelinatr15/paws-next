import React from 'react';
import MeatsE from './MeatsE';
import MeatsForm from './MeatsForm';

const MeatsC = ({meats}) => {
  return <div>
      {meats.map((m)=>(
          <MeatsE key={m.id} type={m.type}/>
      ))}

      <MeatsForm/>
  </div>;
};

export default MeatsC;
