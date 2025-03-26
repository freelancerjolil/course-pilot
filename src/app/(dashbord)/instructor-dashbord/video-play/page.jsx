'use client'
import React, { useState } from "react";

const VideoPlayer = () => {
    // ভিডিওগুলোর লিস্ট
    const videoList = [
        "https://www.youtube.com/embed/BZeXxwAEw-0",
        "https://www.youtube.com/embed/I0xBb80JbHk",
        "https://www.youtube.com/embed/nLz7AbxtdmY",
    ];

    const [currentVideo, setCurrentVideo] = useState(0);

    // Next Button Function
    const nextVideo = () => {
        if (currentVideo < videoList.length - 1) {
            setCurrentVideo((prev) => prev + 1); // Go to the next video
        }
    };

    // Previous Button Function
    const prevVideo = () => {
        setCurrentVideo((prev) => (prev - 1 + videoList.length) % videoList.length); // Go to the previous video
    };

    // Handle video completion
    const handleComplete = () => {
        alert("All videos completed! Thank you for watching.");
    };

    return (
        <div style={{ textAlign: "center" }}>
            <iframe
                width="640"
                height="360"
                src={videoList[currentVideo]}
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
                key={videoList[currentVideo]}
            ></iframe>
            <br />

            {currentVideo === videoList.length - 1 ? (
                // Show 'Complete' button if it's the last video
                <button
                    onClick={handleComplete}
                    style={{
                        marginTop: "10px",
                        padding: "10px",
                        fontSize: "16px",
                        backgroundColor: "green",
                        color: "white",
                    }}
                >
                    Complete ✔️
                </button>
            ) : (
                <>
                    <button
                        onClick={prevVideo}
                        style={{
                            marginTop: "10px",
                            padding: "10px",
                            fontSize: "16px",
                            marginRight: "10px",
                        }}
                    >
                        ◁ Previous
                    </button>
                    <button
                        onClick={nextVideo}
                        style={{
                            marginTop: "10px",
                            padding: "10px",
                            fontSize: "16px",
                        }}
                    >
                        Next ▶
                    </button>
                </>
            )}
        </div>
    );
};

export default VideoPlayer;