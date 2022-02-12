import React from 'react';
import EducationC from '../../components/education/EducationC';
import pool from '../api/db/connection'

const education = ({education}) => {

  return <div>
    <EducationC education={education}/>
  </div>
};

export default education;

export async function getStaticProps(){
  const education = await pool.query('SELECT * FROM education', [])
  return{
    props: {
      education: education.rows
    }
    
  }
}