const express = require('express')
const router = express.Router()
const controller = require('../controllers/inventoryItemControllers')

// Add an item to inventory
router.post('/', controller.addItem)

// Get all items from inventory
router.get('/', controller.getAllItems)

// Get an item by id from inventory
router.get('/:id', controller.getItemById)

// Update an item by Id
router.patch('/:id', controller.updateItem)

// Delete an item by Id 
router.patch('/del/:id', controller.deleteItem);

// Undelete an item by Id 
router.put('/:id', controller.undelItem);

module.exports = router;
