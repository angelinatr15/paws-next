import { useRouter } from 'next/router';
import React from 'react';
import { useRef } from 'react/cjs/react.development';

const FoodForm = () => {
const menuRef = useRef();
const router = useRouter();


async function foodBtn(e){
    e.preventDefault();

    const foodItem = {menu:menuRef.current.value}

    try {

        const response = await fetch('http://localhost:5000/food',{
            
            method:'POST',
            headers:{
                'Content-Type' : 'application/json',
            }, 
            body: JSON.stringify(foodItem)
            }) 
            console.log(response)
            router.reload();

        } catch (e) {
            console.log(e.message)
        }
    }

  return <div>

    <form onSubmit={foodBtn}>
        <input ref={menuRef} type='text' placeholder='menu'/>
        <button className='border-2 bg-red-300 rounded-md px-2' type='submit'>submit</button>
    </form>



  </div>;
};

export default FoodForm;
