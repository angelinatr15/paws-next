const pool = require('../db/connection')

export default async function handler(req, res) {
  const id = req.query.id
  try {
    const educationById = await pool.query(
      'SELECT * FROM education WHERE id=$1',
      [id],
    )
    console.log(educationById.rows[0])
    res.json(educationById.rows[0])
  } catch (error) {
    console.log(error.message)
  }
}
