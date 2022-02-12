import Image from 'next/image'
import React from 'react'
import pool from '../api/db/connection'

const EducationDetails = ({ education }) => {
  return (
    <div className="p-4 mt-10">
      <Image src={education.image} width="300" height="200" />
      <br></br>
      {education.species}
      <br></br>
      {education.description}
    </div>
  )
}

export default EducationDetails

export async function getStaticPaths() {
  //get all ids
  const education = await pool.query('SELECT * FROM education', [])
  const educations = education.rows

  return {
    fallback: 'blocking', //supported ids are all covered in the paths.
    paths: educations.map((education) => ({
      params: { id: education.id.toString() },
    })),
  }
}

export async function getStaticProps(context) {
  const id = context.params.id
  const educationById = await pool.query(
    'SELECT * FROM education WHERE id=$1',
    [id],
  )
  console.log(educationById.rows[0])

  return {
    props: {
      education: educationById.rows[0],
    },
  }
}
