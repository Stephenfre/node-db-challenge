const express = require('express');
const Tasks = require('./tasks-model.js');
const router = express.Router();

router.get('/', (req, res) => {
    Tasks.find()
        .then(tasks => {
            res.json(tasks);
        })
        .catch(err => {
            res.status(500).json(err);
        })
})

// router.get('/', (req, res) => {
//     const { id } = req.params;

//     Tasks.findTask(id)
//         .then(tasks => {
//             res.json(tasks);
//         })
//         .catch(err => {
//             res.status(500).json(err);
//         })
// })

router.get('/:id', (req, res) => {
    const { id } = req.params;

    Tasks.findById(id)
        .then(tasksId => {
            if (tasksId) {
                res.json(tasksId);
            } else {
                res.status(404).json({ message: 'Could not find tasks with given id.' })
            }
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to get tasks', err });
        });
});

router.post('/', (req, res) => {
    const tasksData = req.body;

    Tasks.add(tasksData)
        .then(tasking => {
            res.json(tasking);
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to create a new task)', err });
        });
});

module.exports = router;