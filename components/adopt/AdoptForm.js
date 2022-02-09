import Image from "next/image";
import { useRouter } from "next/router";
import { useRef } from "react";

const AdoptForm = ({pet, setIsFormOpen}) => {
  const router = useRouter();
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const phoneNumberRef = useRef();
  const emailAddressRef = useRef();
  const schedulePickUpRef = useRef();

  async function submit(e){
    e.preventDefault();
    const adopted = {pet_name:pet.name, first_name:firstNameRef.current.value, last_name:lastNameRef.current.value, phone_number:phoneNumberRef.current.value, email:emailAddressRef.current.value, schedule_pickup:schedulePickUpRef.current.value}

    try {
      console.log("This is pet ID" + pet.id)
      const response = await fetch('http://localhost:5000/adopted',{

      method: 'POST',
      headers: {
        'Content-Type' : 'application/json',
      },
      body: JSON.stringify(adopted)
      })
      
      console.log(response);

    } catch (error) {
      console.log(error.message);
    }

    try {
     
    const url = 'http://localhost:5000/animals/' + pet.id;
    const response = await fetch(url,{
      method: 'DELETE'
    })
    console.log(response);
    router.reload();

    } catch (error) {
      console.log(error.message)
    }
  }

  return <div className="modal z-40 fade fixed top-0 left-80  w-3/5 outline-none overflow-x-hidden m-20 overflow-y-auto border-2 rounded-md ">
    
    <div className="modal-dialog relative w-auto pointer-events-none">
      <div className="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
        <div
          className="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
           <p className="ml-60 font-large text-gray-800" >
            {'Take ' + pet.name + ' home with you today!'}
           </p>
        </div>

      <div className="modal-body relative p-4">
        <div className="flex">
          
        <form onSubmit={submit}>
          <div>
            <label>First Name : </label>
            <input className="m-2 border-2 bg-gray-200" ref={firstNameRef} type='text' required />
          </div>

          <div>
            <label>Last Name : </label>
            <input className="m-2 border-2 bg-gray-200" ref={lastNameRef} type='text' required />
          </div>

          <div>
            <label>Phone Number : </label>
            <input className="m-2 border-2 bg-gray-200" ref={phoneNumberRef} type='text' required />
          </div>

          <div>
            <label>Email Address : </label>
            <input className="m-2 border-2 bg-gray-200" ref={emailAddressRef} type='text' required />
          </div>

          <div className="inline-block relative w-64 mt-5">
            <label className='text-xs'>Schedule Pick-Up</label>
              <select ref={schedulePickUpRef} required className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline text-sm">
                <option>Monday - 12:00 PM</option>
                <option>Tuesday - 12:00 PM</option>
                <option>Wednesday - 12:00 PM</option>
                <option>Thursday - 12:00 PM</option>
                <option>Friday - 12:00 PM</option>
                <option>Saturday - 12:00 PM</option>
                <option>Sunday - 12:00 PM</option>
              </select>
              
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center mt-6 px-2 text-gray-700">
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
              </div>
              
          </div>
          <div className="p-4 rounded-md ml-10 flex">
        <button type="submit"
            className=" px-2 py-1.5 bg-red-400 text-white text-xs rounded-md ">
              submit
          </button>
          <button onClick={()=>setIsFormOpen(false)} type="button"
            className="px-2 py-1.5 bg-gray-500 text-white text-xs rounded-md ml-2"
            data-bs-dismiss="modal">
              cancel
            </button>

        </div>
        </form>
        <div className="ml-20 text-xs">
            <Image src={pet.image} width='300' height='200' alt='Pet'/>

            <div className="w-3/4">
            <p>Description : </p>
            <p>{'Species : ' + pet.species + ' '}</p>
            <p>{'Breed : ' + pet.breed + ' '}</p>
            <p>{'Age : ' + pet.age + ' '}</p>
            <p>{'Gender : ' + pet.gender + ' '}</p>
            <p>{'Size : ' + pet.size + ' '}</p>
            <p>{'Color : ' + pet.color + ' '}</p>
            </div>
          </div> 
        </div>

      </div>

      </div>
    </div>
</div>
};

export default AdoptForm;
