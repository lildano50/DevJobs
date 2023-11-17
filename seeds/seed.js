const sequelize = require('../config/connection');
const { Jobs } = require('../models');

const jobData = require('./jobSeeds.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  for (const job of jobData) {
    await Jobs.create({
      ...job
    });
  }

  process.exit(0);
};

seedDatabase();