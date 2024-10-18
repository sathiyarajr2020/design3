import './VideoBackgroundSection.css'; // Import CSS file
import bgVideo from '../../public/jc.mp4'; // Import video file

const VideoBackgroundSection = () => {
  return (
    <div className="hero-section">
      <video autoPlay muted loop className="bg-video">
        <source src={bgVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="content">
        <h1>Welcome to Our Event</h1>
        <p>Join us for an unforgettable experience.</p>
      </div>
    </div>
  );
};

export default VideoBackgroundSection;
