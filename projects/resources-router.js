const express = require('express');
const Resources = require('./resources-model.js');

const router = express.Router();

router.get('/', (req, res) => {
    Resources.find()
        .then(resources => {
            res.json(resources);
        })
        .catch(err => {
            res.status(500).json(err);
        })
})

router.get('/:id', (req, res) => {
    const { id } = req.params;

    Resources.findById(id)
        .then(resourceId => {
            if (resourceId) {
                res.json(resourceId);
            } else {
                res.status(404).json({ message: 'Could not find resc with given id.' })
            }
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to get resc' });
        });
});

router.post('/', (req, res) => {
    const resourcesData = req.body;

    Resources.add(resourcesData)
        .then(resource => {
            res.json(resource);
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to create new resource)' });
        });
});

module.exports = router;