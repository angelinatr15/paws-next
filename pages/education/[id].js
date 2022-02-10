import Image from 'next/image'
import React from 'react'

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
  //api call to get all ids
  const res = await fetch('http://localhost:3000/api/education')
  const educations = await res.json()

  return {
    fallback: 'blocking', //supported ids are all covered in the paths.
    paths: educations.map((education) => ({
      params: { id: education.id.toString() },
    })),
  }
}

export async function getStaticProps(context) {
  const id = context.params.id
  const url = 'paws-next-51h11lwmg-angelinatr15.vercel.app/api/education/' + id
  const response = await fetch(url)
  const education = await response.json()

  return {
    props: {
      education,
    },
  }
}
