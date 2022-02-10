import { Router, useRouter } from 'next/router';
import { stringify } from 'postcss';
import React, { useRef } from 'react';

const VolunteerForm = () => {
  const router= useRouter();
  const firstNameRef=useRef();
  const lastNameRef=useRef();
  const phoneNumberRef=useRef();
  const emailRef=useRef();
  const availabilityRef=useRef();

  async function volunteerBtn(e){

      e.preventDefault();

      const newVolunteers={first_name:firstNameRef.current.value, last_name:lastNameRef.current.value, phone_number:phoneNumberRef.current.value, email:emailRef.current.value, availability:availabilityRef.current.value}

      try {
          const response = await fetch('http://localhost:5000/volunteer',{
            method:'POST',
            headers:{
              'Content-Type':'application/json',
            },
            body: JSON.stringify(newVolunteers),
          })
          console.log(response);
          router.reload();
      } catch (error) {
            console.log(error.message)
          }
   }
  

  
  return <div className='grid place-items-center'>

  <form onSubmit={volunteerBtn} className='border-4 w-1/2 mt-10 mb-5 grid place-items-center p-4'>
    <div>

      <div className='p-4'>
        <label className='text-xs'>First Name :  </label>
        <input className='text-sm bg-gray-200' ref={firstNameRef} type='text'required/>

        <label className='text-xs ml-3'>Last Name : </label>
        <input className='text-sm bg-gray-200' ref={lastNameRef} type='text'required/>
      </div>

      <div className=''>
      <label className='text-xs'>Phone Number : </label>
      <input className='text-sm bg-gray-200' ref={phoneNumberRef} type='text'required/>

      <label className='text-xs ml-3'>Email Address : </label>
      <input className='text-sm bg-gray-200' ref={emailRef} type='text' required/>
      </div>
    </div>

        <div className="inline-block relative w-64 mt-10">
        <label className='text-xs'>Select Availability</label>
            <select ref={availabilityRef} required className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline text-sm">
                <option>Weekday - Morning</option>
                <option>Weekday - Afternoon</option>
                <option>Weekday - Evening</option>
                <option>Weekend - Morning</option>
                <option>Weekend - Afternoon</option>
                <option>Weekend - Evening</option>

            </select>
            
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center mt-4 px-2 text-gray-700">
                  <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
            </div>
        </div>

        <br></br>

        <button type='submit' className="rounded-md border-2 px-2 mb-5 bg-gray-400 text-white">submit</button>
      </form>

  </div>
}

export default VolunteerForm;
