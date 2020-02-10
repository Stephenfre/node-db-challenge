const express = require('express');

const ProjectRouter = require('./projects/projects-router.js');
const TasksRouter = require('./projects/tasks-router.js');
const ResourcesRouter = require('./projects/resources-router.js');

const server = express();

server.use(express.json());
server.use('/api/projects', ProjectRouter);
server.use('/api/tasks', TasksRouter);
server.use('/api/resources', ResourcesRouter);

module.exports = server;
