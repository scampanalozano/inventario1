const { Router } = require('express');
const { getAll, createTask, deleteTask, getTask, updateTask } = require('../controllers/controladores')

const router = Router();

router.get('/tasks', getAll)

router.get('/tasks', getTask)

router.post('/tasks', createTask)

router.delete('/tasks', deleteTask)

router.put('/tasks', updateTask)



module.exports = router;