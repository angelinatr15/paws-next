import React from 'react';
import States from '../../components/states/States';

const StatesP = ({states}) => {
  return <div>
      <States states = {states}/>
  </div>;
};

export default StatesP;

export async function getStaticProps(){

    const response = await fetch('http://localhost:5000/states');
    const states = await response.json();

    return{
        props: {
            states
        }
    };
};
