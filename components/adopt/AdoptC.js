import Image from 'next/image';
import React, { useState } from 'react';
import AdoptBaclground from './AdoptBaclground';
import AdoptForm from './AdoptForm';

const AdoptC = ({id, name, species, breed, age, gender, size, color, location, image}) => {
const [isFormOpen, setIsFormOpen] = useState(false)
function toggleForm(){
  setIsFormOpen(!isFormOpen)
}
  return <div className='grid place-items-center mt-10 font-bold'>

    <div className="mt-10 max-w-sm rounded-md overflow-hidden shadow-lg ml-10">

      <div className='grid place-items-center'>

      <Image src={image} width='400' height='300' alt='Balls'/>
      </div>

      <div className='px-6 py-4 text-gray-700 text-base'>

          <p>{'Name : ' + name + ' '}</p>
          <p>{'Species : ' + species + ' '}</p>
          <p>{'Breed : ' + breed + ' '}</p>
          <p>{'Age : ' + age + ' '}</p>
          <p>{'Gender : ' + gender + ' '}</p>
          <p>{'Size : ' + size + ' '}</p>
          <p>{'Color : ' + color + ' '}</p>
          {isFormOpen? <AdoptBaclground/>:''}
          <button onClick={toggleForm} className='ml-36 bg-red-300 hover:bg-red-600 text-white font-bold rounded-md px-4 mt-2'>adopt</button>
          {isFormOpen? <AdoptForm pet={{id, name, species, breed, age, gender, size, color, location, image}} setIsFormOpen={setIsFormOpen} />: ''}

      </div>

     </div>

  </div>
};

export default AdoptC;