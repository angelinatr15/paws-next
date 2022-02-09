import React from 'react';
import FoodE from './FoodE';
import FoodForm from './FoodForm';

const FoodC = ({food}) => {
  return <div>
    <div>
      {food.map((f)=>(
        <FoodE key={f.id} menu={f.menu}/>
      ))}
    </div>

    <div className=' m-10'>
        <FoodForm/>
    </div>

</div>;
};

export default FoodC;
