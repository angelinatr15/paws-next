import React from 'react';
import EducationC from '../../components/education/EducationC';

const education = ({education}) => {

  return <div>
    <EducationC education={education}/>
  </div>
};

export default education;

export async function getStaticProps(){
  const response = await fetch('http://localhost:5000/education');
  const education = await response.json()
  return{
    props: {
      education
    }
    
  }
}