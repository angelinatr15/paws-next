import Adopt from '../components/adopt/Adopt'
import pool from './api/db/connection';

const adopt = ({ animals }) => {
  return (
    <div>
      <h5 className="mt-10 p-4">
        “Until one has loved an animal, a part of one soul remains unawakened.”
        -Anatole France. 21. “Animals are such agreeable friends―they ask no
        questions, they pass no criticisms.”
      </h5>
      <Adopt animals={animals} />
    </div>
  )
}

export default adopt

//server function BACKEND
export async function getStaticProps() {
  let animals = {};
  try {
    animals = await pool.query('SELECT * FROM animals');
    console.log(animals.rows)
  } catch (error) {
    console.log(error.message)
  }

  return {
    props: {
      animals: animals.rows,
    },
  }
}
