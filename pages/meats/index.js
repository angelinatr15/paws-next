import React from 'react';
import MeatsC from '../../components/meats/MeatsC';

const meats = ({meats}) => {
  return <div>
      <MeatsC meats={meats}/>
  </div>;
};

export default meats;

export async function getStaticProps(){

    const response = await fetch('http://localhost:5000/meats')
    const meats = await response.json();
    console.log(meats)

    return{
        props:{
            meats
        }
    }
}