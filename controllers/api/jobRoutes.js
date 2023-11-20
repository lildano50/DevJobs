// Import Op to query database by using Operators in Sequelize
const { Op } = require("sequelize");
const router = require('express').Router();
const { Jobs } = require('../../models');

router.post('/', async (req, res) => {
    console.log('req.body: ', req.body);
    try {
        // Find all jobs that meet user input criteria
        const jobData = await Jobs.findAll({
            where: {
                city_category: req.body.city_category,
                state_category: req.body.state_category,
                job_type: req.body.job_type,
                annual_salary_from: {
                    [Op.gte]: req.body.annual_salary_from
                },
                annual_salary_to: {
                    [Op.lte]: req.body.annual_salary_to
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
        res.status(400).json(err);
    }
})

module.exports = router;