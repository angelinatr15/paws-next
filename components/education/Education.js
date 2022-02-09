import Image from 'next/image';
import { Router, useRouter } from 'next/router';
import React from 'react';

const Education = ({id,image, species, description}) => {
    const router = useRouter()
    function detailBtn(){
        router.push('/education/'+ id);
    }


  return<div className='mt-20 max-w-sm rounded overflow-hidden shadow-lg ml-10'> 
        <div className='grid place-items-center'>
            <Image src={image} alt='Wild Life' width='300' height='200'/>
        </div>

        <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">{species}</div>
            <p class="text-gray-700 text-base">
                {description}
            </p>
        </div>
        <button onClick={detailBtn} className='bg-gray-300 rounded-md px-2 ml-28 m-4'>details</button>
        </div>
}

export default Education