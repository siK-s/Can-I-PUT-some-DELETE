const express = require('express');
const router = express.Router();

router.get('/:user([a-zA-Z]+)', (req, res, next) => {
  res.render('update-user');
});

router.put('/:user([a-zA-Z]+)', (req, res, next) => {
  res.send(`The new name is ${req.params.user}!`);
});

router.get('/:id([0-9]+)', (req, res, next) => {
  res.render('delete-user');
});

router.delete('/:id([0-9]+)', (req, res, next) => {
  res.send(`No more user with id ${req.params.id}!`);
});

module.exports = router;
