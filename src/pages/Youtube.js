import React, { useState, useEffect } from "react";
import "../styles/Youtube.css";

const YouTube = () => {
    const API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY;
    const CHANNEL_ID = process.env.REACT_APP_YOUTUBE_CHANNEL_ID;
    const MAX_RESULTS = 6;

    const [videos, setVideos] = useState([]);

    useEffect(() => {
        const fetchVideos = async () => {
            try {
                const response = await fetch(
                    `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&part=snippet,id&order=date&maxResults=${MAX_RESULTS}`
                );
                const data = await response.json();

                if (data.items) {
                    setVideos(data.items);
                }
            } catch (error) {
                console.error("Error fetching YouTube videos:", error);
            }
        };

        fetchVideos();
    }, );

    return (
        <section className="youtube-section">
            <h2 className="youtube-heading">LATEST YOUTUBE <span>VIDEOS</span></h2>
            <div className="youtube-videoGrid">
                {videos.map((video) => (
                    video.id.videoId && (
                        <div key={video.id.videoId} className="youtube-videoCard">
                            <iframe
                                width="100%"
                                height="200"
                                src={`https://www.youtube.com/embed/${video.id.videoId}`}
                                frameBorder="0"
                                allowFullScreen
                                title={video.snippet.title}
                            ></iframe>
                            <p className="youtube-videoTitle">{video.snippet.title}</p>
                        </div>
                    )
                ))}
            </div>
        </section>
    );
};

export default YouTube;
