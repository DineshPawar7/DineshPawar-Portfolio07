import React, { useState, useEffect } from "react";
import '../styles/Youtube.css'

const YouTubeRSS = () => {
    const CHANNEL_ID = "UC_S7S1AedqcIV7bcEvXcqRA";
    const RSS_URL = `https://www.youtube.com/feeds/videos.xml?channel_id=${CHANNEL_ID}`;

    const [videos, setVideos] = useState([]);

    useEffect(() => {
        const fetchVideos = async () => {
            try {
                const response = await fetch(`https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(RSS_URL)}`);
                const data = await response.json();

                if (data.items) {
                    setVideos(data.items.slice(0, 4));
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
                {videos.map((video) => {
                    const videoId = video.link.split("v=")[1]?.split("&")[0];

                    return (
                        <div key={videoId} className="youtube-videoCard">
                            <iframe
                                width="100%"
                                height="200"
                                src={`https://www.youtube.com/embed/${videoId}`}
                                frameBorder="0"
                                allowFullScreen
                                title={video.title}
                            ></iframe>
                            <p className="youtube-videoTitle">{video.title}</p>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default YouTubeRSS;
