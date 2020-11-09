exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('users').truncate()
  await knex('users').insert([
      {username: "Bob", password: bcrypt.hashSync("password", 14)},
    ]);
};
