const router = require('express').Router();
const { Jobs, User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', (req, res) => {
  res.render('homepage');
})

// Login
router.get('/login', (req, res) => {
    // If the user is already logged in, redirect the request to root route
    if (req.session.logged_in) {
      res.redirect('/profile');
      return;
    }
    res.render('login');
});

// Signup
router.get('/signup', (req, res) => {
  res.render('signup');
});

router.get('/jobs', async (req, res) => {
    try {
      // Get all jobs and JOIN with user data
      const jobData = await Jobs.findAll();
  
      // Serialize data so the template can read it
      const jobs = jobData.map((job) => job.get({ plain: true }));
  
      // Pass serialized data and session flag into template
      res.render('jobs', { 
        jobs, 
        logged_in: req.session.logged_in 
      });
    } catch (err) {
      res.status(500).json(err);
    }
});

// Added route to render profile upon login/signup
router.get('/profile', withAuth, async (req, res) => {
  try {
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Jobs }],
    });

    const user = userData.get({ plain: true });

    res.render('profile', {
      ...user,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});



module.exports = router;