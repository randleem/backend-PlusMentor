const { query } = require("../../index");

const exampleUser = [
  {
    email: "mikeswann@mail.com",
    first_name: "michael",
    last_name: "swann",
    pair_id: 1,
    role: "student",
  },
  {
    email: "emmarandle@gmail.com",
    first_name: "emma",
    last_name: "randle",
    pair_id: 1,
    role: "mentor",
  },
];

async function populateUserTable(array) {
  for (let i = 0; i < array.length; i++) {
    const { email, first_name, last_name, pair_id, role } = array[i];
    await query(
      `INSERT INTO user_table (
        email,
        first_name,
        last_name,
        pair_id,
        role
        ) VALUES ($1, $2, $3, $4, $5)`,
      [email, first_name, last_name, pair_id, role]
    );

    console.log(`Log:Populated table with ${email}`);
  }
}

populateUserTable(exampleUser);
