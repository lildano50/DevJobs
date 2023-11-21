// Import Op to query database by using Operators in Sequelize
const { Op } = require("sequelize");
const router = require('express').Router();
const { Jobs } = require('../../models');

router.get('/', async (req, res) => {
    console.log(req.query.city_category);
    try {
        // Find all jobs that meet user input criteria
        const jobData = await Jobs.findAll({
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

        console.log(jobData);

        const jobs = jobData.map((job) => job.get({ plain: true }));

        // res.status(200).json(jobData);
        res.render('jobs', { 
            jobs, 
            logged_in: req.session.logged_in 
          });

        // req.session.save(() => {
        //     req.session.user_id = userData.id;
        //     req.session.logged_in = true;

        //     res.status(200).json(jobData);
        // })
    } catch (err) {
        console.log(err);
        res.status(400).json(err);
    }
})

module.exports = router;