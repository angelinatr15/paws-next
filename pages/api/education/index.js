const pool = require('../db/connection')

export default async function handler(req, res) {
  try {
    const education = await pool.query('SELECT * FROM education', [])
    console.log(education.rows)
    res.json(education.rows)
  } catch (error) {
    console.log(error.message)
  }
}
