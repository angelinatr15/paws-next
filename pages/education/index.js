import React from 'react';
import EducationC from '../../components/education/EducationC';

const education = ({education}) => {

  return <div>
    <EducationC education={education}/>
  </div>
};

export default education;

export async function getStaticProps(){
  const response = await fetch('/api/education');
  const education = await response.json()
  return{
    props: {
      education
    }
    
  }
}