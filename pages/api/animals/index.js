const pool = require('../db/connection')

export default async function handler(req, res) {
  const animal = req.body
  if (req.method === 'GET') {
    try {
      const animals = await pool.query('SELECT * FROM animals')
      console.log(animals.rows)
      res.json(animals.rows)
    } catch (error) {
      console.log(error.message)
    }
  } else {
    try {
      const response = await pool.query(
        'INSERT INTO animals(name, species, breed, age, gender, size, color, location, image) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *',
        [
          animal.name,
          animal.species,
          animal.breed,
          animal.age,
          animal.gender,
          animal.size,
          animal.color,
          animal.location,
          animal.image,
        ],
      )
    } catch (e) {
      console.log(e.message)
    }
  }
}
