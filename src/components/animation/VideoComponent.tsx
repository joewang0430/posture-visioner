"use client"

import { useEffect, useState } from 'react';

interface VideoComponentProps {
    fileId: string; // Define the type for fileId
}

const VideoComponent: React.FC<VideoComponentProps> = ({ fileId }) => {
    const [videoSrc, setVideoSrc] = useState('');

    useEffect(() => {
        const fetchVideo = async () => {
            const response = await fetch(`/video/${fileId}`);
            if (response.ok) {
                const videoBlob = await response.blob();
                const videoUrl = URL.createObjectURL(videoBlob);
                setVideoSrc(videoUrl);
            } else {
                console.error('Error fetching video:', response.statusText);
            }
        };

        fetchVideo();
    }, [fileId]);

    return (
        <div>
            {videoSrc ? (
                <video controls width="600">
                    <source src={videoSrc} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            ) : (
                <p>Loading video...</p>
            )}
        </div>
    );
};

export default VideoComponent;

