import React from 'react';
import VolunteerForm from '../components/volunteer/VolunteerForm';

const volunteer = () => {
  return <div>
    <div>
      <p className='mt-20 p-10'>
        Thank you for your interest in volunteering at PAWS!
        PAWS is now accepting new volunteer applications for the Companion Animal Shelter and Foster Program. Currently, all volunteer shifts at the Wildlife Center and Cat City are filled.  Please check back for future availability. We are still accepting applications for volunteers to work with the cats and dogs at our Lynnwood campus. Please read through the different roles at PAWS below, and let us know if you have any questions by emailing us at volunteer@paws.org.
      </p>   

      <p className='mt-20 p-10'>
        Learn about our volunteer program
        Each year, PAWS cares for more than 7,600 cats, dogs and wild animals, and we couldn’t do it without our compassionate and dedicated volunteers. Volunteers work side by side with PAWS staff caring for wildlife and companion animals and helping with education and outreach to the community. We provide the training for all volunteer positions –  no prior experience required. Whether you’re feeding orphaned wildlife, helping find homes for cats and dogs, or contributing to the success of an event, you can play an important role in the life-saving work of PAWS.
</p> 
    </div>  

    <VolunteerForm/>
  </div>;
};

export default volunteer;
