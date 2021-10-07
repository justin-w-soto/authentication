const { Router } = require('express');
const UserService = require('../services/UserSevice.js');


module.exports = Router()
.post('/signup', async (req, res, next) => {
    try {
        const appUser = await UserService.create(req.body);

        res.send(appUser);
    } catch (error) {
      next(error);  
    }
})