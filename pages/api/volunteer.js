const pool = require('./db/connection')

export default async function handler(req, res) {
  const newVolunteer = req.body
  try {
    const volunteer = await pool.query(
      'INSERT INTO volunteer(first_name, last_name,phone_number, email, availability) VALUES($1, $2, $3, $4, $5) RETURNING *',
      [
        newVolunteer.first_name,
        newVolunteer.last_name,
        newVolunteer.phone_number,
        newVolunteer.email,
        newVolunteer.availability,
      ],
    )
    console.log(volunteer.rows[0])
    res.json(volunteer.rows[0])
  } catch (error) {
    console.log(error.message)
  }
}
