import { hightlightsSlides } from "../constants";
const VideoCarousel = () => {
  return (
    <>
      <div className="flex items-center">
        {hightlightsSlides.map((list) => (
          <div key={list.id}>dd</div>
        ))}
      </div>
    </>
  );
};

export default VideoCarousel;
