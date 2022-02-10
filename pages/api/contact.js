const pool = require('./db/connection')

export default async function handler(req, res) {
  const newContact = req.body
  try {
    const contact = await pool.query(
      'INSERT INTO contact(first_name, last_name, phone_number, message, email) VALUES($1, $2, $3, $4, $5) RETURNING *',
      [
        newContact.first_name,
        newContact.last_name,
        newContact.phone_number,
        newContact.message,
        newContact.email,
      ],
    )
    console.log(contact.rows[0])
    res.json(contact.rows[0])
  } catch (error) {
    console.log(error.message)
  }
}