import React from 'react';

const ProjectDetails = ({ match }) => {
  // Dummy project data or fetch project details based on ID
  const project = { id: match.params.id, title: 'Project Title', description: 'Project Description' };

  return (
    <div>
      <h2>Project Details</h2>
      <h3>{project.title}</h3>
      <p>{project.description}</p>
    </div>
  );
};

export default ProjectDetails;
