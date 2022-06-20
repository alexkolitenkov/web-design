const Router = require('express');
const router = new Router();
const wordController = require('../controllers/wordController');

router.post('/', wordController.create);
router.get('/:listId', wordController.getAll);

module.exports = router