const router = require('express').Router();

const categoryController = require("../controllers/categoryController");
const isAuthenticated = require('./../middlewares/auth');
const isAdmin = require('./../middlewares/checkadmin'); 

router.get('/', categoryController.all);
router.post('/create', isAuthenticated,isAdmin, categoryController.create);
router.put('/:id/edit', isAuthenticated,isAdmin, categoryController.update);
router.delete(
	'/:id/delete',
	isAuthenticated,
	categoryController.deleteCategory
);

module.exports = router;
