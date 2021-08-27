import { Link } from 'react-router-dom'
import './Recommended-video.scss'

function RecommendedVideo ({name, url}) {
  return(
    <li className="item">
    <Link to="/video/2" className="video-link"> 
      {/* <span className="video-duration">sdsd</span> */}
      <img src={url} alt="video-img" className="img"/>
        <h4 className="video-title">A Brief History Of Creation</h4>
        <div className="video-info-wrapper">
          <p className="view-times">80k views</p>
          <p className="upload-time">3 days ago</p>
          <p className="username">{name}</p>
        </div>
    </Link>
  </li>
  )}

export default RecommendedVideo