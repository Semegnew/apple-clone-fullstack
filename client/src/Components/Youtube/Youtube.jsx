import { useState, useEffect } from "react";
import axios from 'axios';
import './youtube.css';
const apiKey = process.env.REACT_APP_YOUTUBE_API_KEY;

const Youtube = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(`https://www.googleapis.com/youtube/v3/search?key=${apiKey}&channelId=UCE_M8A5yxnLfW0KghEeajjw&part=snippet,id&order=date&maxResults=6`);
      setVideos(response.data.items); // Extract the 'items' array and set it as the state.
    } catch (error) {
      console.error(error);
    }
  };

  console.log(videos);
  
  return (
    <div className="allVideosWrapper">
      <div className="container">
        <div className="row h-100 align-items-center justify-content-center text-center">
          <div className="col-12">
            <div className="title-wraper bold video-title-wrapper">
              Latest Videos
            </div>
          </div>

          {videos && videos.map((singleVideo, i) => {
            let vidId = singleVideo.id.videoId;
            let vidLink = `https://www.youtube.com/watch?v=${vidId}`;
            let videoWrapper = (
              <div key={i} className="col-sm-12 col-md-6">
                <div className="singleVideoWrapper">
                  <div className="videoThumbnail">
                    <a href={vidLink} target="_blank">
                      <img src={singleVideo.snippet.thumbnails.high.url} alt={singleVideo.snippet.title} />
                    </a>
                  </div>
                  <div className="videoInfoWrapper">
                    <div className="videoTitle">
                      <a href={vidLink} target="_blank">
                        {singleVideo.snippet.title}
                      </a>
                    </div>
                    <div className="videoDesc">
                      {singleVideo.snippet.description}
                    </div>
                  </div>
                </div>
              </div>
            );

            return videoWrapper; // Don't forget to return the JSX element inside the map function.
          })}
        </div>
      </div>
    </div>
  );
}

export default Youtube;