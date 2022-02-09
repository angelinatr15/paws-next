import { useRouter } from 'next/router';
import React, { useRef } from 'react';

const MeatsForm = () => {

    const router = useRouter();
    const typeRef = useRef();

    async function typeBtn(e){
        e.preventDefault();
        const addedType = {type:typeRef.current.value};

        try {
            
            const response = await fetch('http://localhost:5000/meats',{
            
            method: 'POST',

            headers:{ 
                'Content-Type' : 'application/json',
            },

            body: JSON.stringify(addedType)
            })

            const meats = await response.json();
            console.log(meats)
            router.reload();


        } catch (e) {
            console.log(e.message)
        }
    }

  return <div>
      <form onSubmit={typeBtn}>
          <input ref={typeRef} type='text' placeholder='type'/>
          <button type='submit'>submit</button>
      </form>
  </div>;
};

export default MeatsForm;
