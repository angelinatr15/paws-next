const pool = require('./db/connection')

export default async function handler(req, res) {
  const adopted = req.body

  try {
    const response = await pool.query(
      'INSERT INTO adopted(pet_name, first_name, last_name, phone_number, email, schedule_pickup) VALUES($1, $2, $3, $4, $5, $6) RETURNING *',
      [
        adopted.pet_name,
        adopted.first_name,
        adopted.last_name,
        adopted.phone_number,
        adopted.email,
        adopted.schedule_pickup,
      ],
    )

    console.log(response.rows)
    res.json(response.rows)
  } catch (error) {
    console.log(error.message)
  }
}
