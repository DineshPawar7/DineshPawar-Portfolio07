import React, { useState, useEffect } from "react";

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
    }, []); // Added dependency array [] to prevent infinite loop

    return (
        <section className="p-5 mt-[50px]">
            {/* Heading logic: 12vw mobile, 8vw at 1100px, 75px desktop */}
            <h2 className="text-white leading-none mb-5 flex flex-col text-[12vw] lg:text-[8vw] xl:text-[75px]">
                LATEST YOUTUBE <span className="text-[var(--primary-color)]">VIDEOS</span>
            </h2>

            {/* Grid logic: repeat(auto-fit, minmax(300px, 1fr)) */}
            <div className="grid gap-[15px] justify-center grid-cols-[repeat(auto-fit,minmax(300px,1fr))] max-w-[95vw] md:max-w-[80%] xl:max-w-full mx-auto">
                {videos.map((video) => {
                    const videoId = video.link.split("v=")[1]?.split("&")[0];

                    return (
                        <div 
                            key={videoId} 
                            className="p-[10px] rounded-[8px] shadow-[0_0_10px_rgba(0,0,0,0.1)] bg-[var(--card-bg-color)] w-[90vw] md:w-full mx-auto"
                        >
                            <iframe
                                width="100%"
                                height="200"
                                src={`https://www.youtube.com/embed/${videoId}`}
                                frameBorder="0"
                                allowFullScreen
                                title={video.title}
                                className="rounded-[4px]"
                            ></iframe>
                            <p className="text-[16px] font-bold mt-[10px] text-white">
                                {video.title}
                            </p>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default YouTubeRSS;