const { db, models: { User, Item } } = require('../server/db');
async function seed() {
  await db.sync({ force: true }); // Clears the database and matches models to tables
  console.log('db synced!');

  // Creating Users
  const users = await Promise.all([
    User.create({ username: 'Ryan', email: 'ryan.cokely@gmail.com', password: '123', admin: true }),
    // User.create({ username: 'murphy', password: '123' }),
  ]);

  const items = await Promise.all([
    Item.create({ name: 'Apples' }),
    Item.create({ name: 'Bananas' }),
    Item.create({ name: 'Strawberries' }),
    Item.create({ name: 'Avocados' }),
    Item.create({ name: 'Carrots' }),
    Item.create({ name: 'Bread' }),
    Item.create({ name: 'Pasta' }),
    Item.create({ name: 'Rice' }),
    Item.create({ name: 'Tortillas' }),
    Item.create({ name: 'Chicken' }),
    Item.create({ name: 'Eggs' }),

    // User.create({ username: 'murphy', password: '123' }),
  ]);

  console.log(`seeded ${users.length} users`);
  console.log('seeded successfully');
  return {
    users: {
      cody: users[0],
      murphy: users[1],
    },
  };
}


async function runSeed() {
  console.log('seeding...');
  try {
    await seed();
  } catch (err) {
    console.error(err);
    process.exitCode = 1;
  } finally {
    console.log('closing db connection');
    await db.close();
    console.log('db connection closed');
  }
}

if (module === require.main) {
  runSeed();
}

module.exports = seed;
