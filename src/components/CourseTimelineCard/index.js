// Write your code here
import {AiFillClockCircle} from 'react-icons/ai'
import './index.css'

const CourseTimelineCard = props => {
  const {courseDetails} = props
  const {courseTitle, description, duration, tagsList} = courseDetails

  return (
    <>
      <div className="course-container">
        <div className="heading-duration-container">
          <h1 className="course-heading">{courseTitle}</h1>
          <p className="course-duration">
            <AiFillClockCircle /> {duration}
          </p>
        </div>
        <p className="course-description">{description}</p>
        <div>
          <ul className="list-items-container">
            {tagsList.map(eachTag => (
              <li key={eachTag.id} className="list-items">
                <p>{eachTag.name}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}
export default CourseTimelineCard
