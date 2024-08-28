import React from "react";

interface VideoProps {
  src: string;
  title: string;
}

const Video: React.FC<VideoProps> = ({ src, title }) => {
  return (
    <div className="relative pb-56.25 h-0">
      <iframe
        src={src}
        title={title}
        className="absolute top-0 left-0 w-full h-full"
        allowFullScreen
      />
    </div>
  );
};

export default Video;
