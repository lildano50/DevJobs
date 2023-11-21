// Import Op to query database by using Operators in Sequelize
const { Sequelize, Op } = require("sequelize");
const router = require('express').Router();
const { Jobs } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', async (req, res) => {
    try {
        // Find all jobs that meet user input criteria
        const jobData = await Jobs.findAll({
            order: Sequelize.literal('rand()'),
            limit: 6,
            where: {
                cityCategory: req.query.city_category,
                stateCategory: req.query.state_category,
                jobType: req.query.job_type,
                annualSalaryFrom: {
                    [Op.gte]: req.query.annual_salary_from
                },
                annualSalaryTo: {
                    [Op.lte]: req.query.annual_salary_to
                },
                // isFullRemote: req.body.isFullRemote
            }
        });

        // If response returns an empty array respond with a json message
        if (jobData.length == 0) {
            res.json({ message: 'No jobs match the search criteria' });
            return;
        }

        const jobs = jobData.map((job) => job.get({ plain: true }));

        res.render('jobs', { 
            jobs, 
            logged_in: req.session.logged_in 
          });

    } catch (err) {
        console.log(err);
        res.status(400).json(err);
    }
})

router.get('/:id', withAuth, async (req, res) => {
    try {
      const addJob = await Jobs.findByPk(req.params.id);
  
      res.status(200).json(addJob);
    } catch (err) {
      res.status(400).json(err);
    }
  });

module.exports = router;