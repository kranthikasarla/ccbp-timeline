// Write your code her

import {AiFillCalendar} from 'react-icons/ai'

import './index.css'

const ProjectTimelineCard = props => {
  const {projectDetails} = props
  const {
    projectTitle,
    description,
    imageUrl,
    projectUrl,
    duration,
  } = projectDetails

  return (
    <>
      <div className="project-container">
        <img src={imageUrl} alt="project img" className="project-image" />
        <div className="title-duration-container">
          <h1 className="project-title">{projectTitle}</h1>
          <p>
            <AiFillCalendar /> {duration}
          </p>
        </div>
        <p className="project-description">{description}</p>
        <a href={projectUrl}>Visit</a>
      </div>
    </>
  )
}
export default ProjectTimelineCard
