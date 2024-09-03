import { FaCheckCircle } from 'react-icons/fa';
import './Video.css';

const Video = ({ thumbnail, title, views, timestamp, channel, channelImage }) => {
  return (
    <div className="col-md-4 col-lg-3 mb-4">
      <div className="card video-card">
        <img src={thumbnail} className="card-img-top" alt={title} />
        <div className="card-body">
          <h5 className="card-title video-title text-truncate">{title}</h5>
          <div className="d-flex align-items-center">
            <img src={channelImage} alt={channel} className="channel-image rounded-circle me-2" />
            <div>
              <p className="card-text channel-name">
                {channel} <FaCheckCircle className="verified-icon" />
              </p>
              <p className="card-text video-info text-muted">
                {views} views • {timestamp}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Video;
