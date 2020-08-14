import React, { useState, useEffect } from 'react';

import projectService from './services/projectService';

function App() {
    const [projects, setprojects] = useState(null);

  useEffect(() => {
    if(!projects) {
      getProjects();
    }
  })

  const getProjects = async () => {
    let res = await projectService.getAll();
    console.log(res);
    setprojects(res);
  }

  const renderProject = project => {
    return (
      <li key={project._id} className="list__item project">
        <h3 className="project__name">{project.name}</h3>
        <p className="project__description">{project.description}</p>
      </li>
    );
  };

  return (
    <div className="App">
      <ul className="list">
        {(projects && projects.length > 0) ? (
          projects.map(project => renderProject(project))
        ) : (
          <p>No projects found</p>
        )}
      </ul>
    </div>
  );
}

export default App;
