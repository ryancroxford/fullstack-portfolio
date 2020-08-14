// /routes/productRoutes.js
const mongoose = require('mongoose');
const Project = mongoose.model('projects');

module.exports = (app) => {

  app.get(`/api/project`, async (req, res) => {
    let projects = await Project.find();
    return res.status(200).send(projects);
  });

  app.post(`/api/project`, async (req, res) => {
    let project = await Project.create(req.body);
    return res.status(201).send({
      error: false,
      project
    })
  })

  app.put(`/api/project/:id`, async (req, res) => {
    const {id} = req.params;

    let project = await Project.findByIdAndUpdate(id, req.body);

    return res.status(202).send({
      error: false,
      project
    })

  });

  app.delete(`/api/project/:id`, async (req, res) => {
    const {id} = req.params;

    let project = await Project.findByIdAndDelete(id);

    return res.status(202).send({
      error: false,
      project
    })

  })

}
