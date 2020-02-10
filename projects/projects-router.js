const express = require('express');
const Projects = require('./projects-model.js');
const router = express.Router();

router.get('/', (req, res) => {
    Projects.find()
        .then(projects => {
            res.json(projects);
        })
        .catch(err => {
            res.status(500).json(err);
        })
})

router.get('/:id', (req, res) => {
    const { id } = req.params;

    Projects.findById(id)
        .then(projectsId => {
            if (projectsId) {
                res.json(projectsId);
            } else {
                res.status(404).json({ message: 'Could not find projects with given id.' })
            }
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to get projects', err });
        });
});

router.post('/', (req, res) => {
    const projectsData = req.body;

    Projects.add(projectsData)
        .then(projects => {
            res.json(projects);
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to create a new project)', err });
        });
});

module.exports = router;