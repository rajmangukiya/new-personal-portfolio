import React from 'react'
import { useHistory } from 'react-router'

interface Project {
  data: any
}

const Project: React.FC<Project> = ({data}) => {

  const history = useHistory();

  const openProject = () => {
    history.push(`/portfolio/${data.id}`);
  }

  return (
    <div onClick={openProject} className="project-block overflow-hidden d-flex justify-content-center align-items-center" style={{ width: '50%', height: '50vh', backgroundColor: `#${data}` }}>
      <img src={`${data.images[0]}`} alt="" />
    </div>
  )
}

export default Project
