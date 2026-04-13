import React, { useState, useEffect } from "react";

const YouTubeRSS = () => {
    const CHANNEL_ID = "UC_S7S1AedqcIV7bcEvXcqRA";
    // Fixed RSS URL
    const RSS_URL = `https://www.youtube.com/feeds/videos.xml?channel_id=${CHANNEL_ID}`;

    const [videos, setVideos] = useState([]);
    const [loading, setLoading] = useState(true);

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
            } finally {
                setLoading(false);
            }
        };

        fetchVideos();
    }, [RSS_URL]);

    return (
        <section className="w-full mx-auto px-2 text-white">
            {/* Heading - Better Responsive Sizes */}
         
 <h2 className="text-[clamp(2.2rem,8vw,60px)] font-bold mb-6 md:mb-16 text-white leading-tight text-center md:text-left uppercase">
 LATEST YOUTUBE <span className="text-primary">VIDEOS</span>
      </h2>
            {loading ? (
                <div className="flex justify-center items-center py-20">
                    <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-primary"></div>
                </div>
            ) : (
                /* Responsive Grid: 1 column on mobile, 2 columns on tablets/desktop */
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                    {videos.map((video) => {
                        // Extracting Video ID more reliably
                        const videoId = video.link.split("v=")[1]?.split("&")[0];

                        return (
                            <div 
                                key={videoId} 
                                className="group relative bg-[#1a1a1a] border border-white/10 p-3 md:p-5 rounded-2xl md:rounded-3xl transition-all duration-500 ease-in-out hover:border-primary/40 flex flex-col h-full shadow-xl"
                            >
                                {/* Video Iframe - Maintained Aspect Ratio */}
                                <div className="aspect-video w-full overflow-hidden rounded-xl md:rounded-2xl bg-black mb-4">
                                    <iframe
                                        width="100%"
                                        height="100%"
                                        src={`https://www.youtube.com/embed/${videoId}`}
                                        title={video.title}
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                        className="opacity-90 group-hover:opacity-100 transition-opacity duration-500"
                                    ></iframe>
                                </div>

                                {/* Video Info */}
                                <div className="flex flex-col flex-grow px-1">
                                    <h3 className="text-base md:text-lg font-semibold text-white/90 group-hover:text-primary line-clamp-2 transition-colors duration-500 leading-snug min-h-[3rem]">
                                        {video.title}
                                    </h3>
                                    
                                    {/* Action Link */}
                                    <a 
                                        href={video.link} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="mt-4 inline-flex items-center text-[10px] md:text-xs font-bold uppercase tracking-widest text-gray-400 group-hover:text-white transition-all duration-500"
                                    >
                                        Watch on YouTube 
                                        <span className="ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
                                    </a>
                                </div>

                                {/* Subtle background glow - Disabled on mobile for performance, visible on hover */}
                                <div className="hidden md:block absolute -bottom-10 -right-10 w-24 h-24 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-all duration-500"></div>
                            </div>
                        );
                    })}
                </div>
            )}
        </section>
    );
};

export default YouTubeRSS;