import { Router, useRouter } from 'next/router';
import React, { useRef } from 'react';
import Adopt from '../adopt/Adopt';


const ServicesResourcesForm = ({name, species, breed, age, gender, size, color, location, image}) => {

    const router = useRouter();
    const petNameRef = useRef();
    const petSpeciesRef = useRef();
    const petBreedRef = useRef();
    const petAgeRef = useRef();
    const petGenderRef = useRef();
    const petSizeRef = useRef();
    const petColorRef = useRef();
    const petImageRef = useRef();
    const petLocationRef = useRef();

    async function petSubmitBtn(e){

        e.preventDefault();
            
        const addPet = {name:petNameRef.current.value, species:petSpeciesRef.current.value, breed:petBreedRef.current.value, age:petAgeRef.current.value, gender:petGenderRef.current.value, size:petSizeRef.current.value, color:petColorRef.current.value,location:petLocationRef.current.value, image:petImageRef.current.value};

        try {

            const response = await fetch("http://localhost:5000/animals",{

                method: 'POST',
                headers:{
                    'Content-Type' : 'application/json',
                },
                body: JSON.stringify(addPet)
            })
            
            let animal = await response.json()
            console.log(animal)
            router.push('/adopt')


        } catch (error) {
            console.log(error.message)
        }
    }

    return <div>
        <form className='m-20' onSubmit={petSubmitBtn}>

            <div>
                <div>
                    <label>Name : </label>
                    <input ref={petNameRef} type='text' required/>

                    <label>Species : </label>
                    <input ref={petSpeciesRef} type='text' required/>

                    <label>Breed : </label>
                    <input ref={petBreedRef} type='text' required/>

                    <label>Age : </label>
                    <input ref={petAgeRef} type='text' required/>
                </div>

                <div>
                    <label>Gender : </label>
                    <input ref={petGenderRef} type='text' required/>

                    <label>Size : </label>
                    <input ref={petSizeRef} type='text' required/>

                    <label>Color : </label>
                    <input ref={petColorRef} type='text' required/>

                    <label>Location : </label>
                    <input ref={petLocationRef} type='text' required/>

                    <label>Image : </label>
                    <input ref={petImageRef} type='text' required/>
                </div>

                <button className='border-2 rounded-md px-2 ml-80 m-10' type='submit'>submit</button>
            </div>
        </form>
    </div>
};

export default ServicesResourcesForm;