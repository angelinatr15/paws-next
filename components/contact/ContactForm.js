import { useRouter } from "next/router";
import { useRef, useState } from "react";
import { async } from "regenerator-runtime";

const ContactForm = () => {
    
    const router = useRouter();
    const firstNameRef = useRef();
    const lastNameRef = useRef();
    const phoneNumberRef = useRef();
    const messageRef = useRef();
    const emailRef = useRef();

  async function contactBtn(e){

        e.preventDefault();
        const contact = {first_name:firstNameRef.current.value, last_name:lastNameRef.current.value, phone_number:phoneNumberRef.current.value, message:messageRef.current.value, email:emailRef.current.value}
        try{
            const response = await fetch('http://localhost:5000/contact',{

                method:'POST',
                headers:{
                    'Content-Type':'application/json',
                },
                body: JSON.stringify(contact),
            })
                console.log(response)
                router.reload();
        }
        catch(e){
            console.log(e.message);
        }

    }

  return <div className="grid place-items-center">
        <form onSubmit={contactBtn} className="border-2 mt-20 p-6">
            <div >
                <div>
                    <input ref={firstNameRef} type='text' placeholder='First'required/>
                    <input ref={lastNameRef} type='text' placeholder='Last'required/>
                    <br></br>     
                    <br></br>     

                    <input ref={phoneNumberRef} type='text' placeholder='###-###-###'required/>
                    <br></br>   
                    <br></br>     

                    <input ref={emailRef} type='text' placeholder='Email'required/>
                    <br></br>  
                    <br></br>     
                
                    <textarea ref={messageRef} placeholder='Message' className="w-48 h-36 bg-gray-200"required/>
                    <br></br>
                </div>
        
                <button type='submit' className="rounded-md p-1 border-2 bg-gray-400 text-white ml-80">submit</button>
            </div>
        </form>

  </div>
};

export default ContactForm