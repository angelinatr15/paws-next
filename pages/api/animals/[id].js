const pool = require('../db/connection')

export default async function handler(req, res) {
  const id = req.query.id

  try {
    const response = await pool.query(
      'DELETE FROM animals WHERE id=$1 RETURNING *',
      [id],
    )

    console.log(response.rows[0])
    res.json(response.rows[0])
  } catch (error) {
    console.log(error.message)
  }
}
