import "./Video.css";
import FoodVideo from "../assets/foodvideo.mp4";

const Video = () => {
  return (
    <section className="video-section">
      <div className="video-container">
        <video
          className="video-player"
          src={FoodVideo}
          controls
          autoPlay
          muted
          loop
          playsInline
        />
      </div>
    </section>
  );
};

export default Video;