const { Router } = require('express');
const UserService = require('../services/UserSevice.js');


module.exports = Router()
.post('/signup', async (req, res, next) => {
    try {
        const appUser = await UserService.create(req.body);

      res.send(appUser);

    } catch (error) {
      error.status = 400;
      next(error);  
    }
})

// ----------------------------------------------------------------->>

.post('/login', async (req, res, next) => {
  try {
    const appUser = await UserService.authorize(req.body);

        res.cookie('userId', user.id, {
          httpOnly: true,
          maxAge: 1000 * 60 * 60 * 24
        });

    res.send(appUser);
  } catch (error) {
    error.status = 401;
    next(error);
  }
})
