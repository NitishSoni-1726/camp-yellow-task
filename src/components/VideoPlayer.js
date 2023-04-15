import React from "react";
function VideoPlayer() {
  return (
    <>
      <div className="container text-light d-flex flex-column justify-content-center align-items-center video-player">
        <iframe
          className="border"
          title="Demo"
          width="550"
          height="350"
          src="https://www.youtube.com/embed/K4TOrB7at0Y"
        ></iframe>
        <h4 className="mt-4">Check out the Demo here :</h4>
      </div>
    </>
  );
}

export default VideoPlayer;
