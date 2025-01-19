"use client"

import { useEffect, useState } from 'react';

// Example in a React component
const ThreeJSComponent = () => {

    useEffect(() => {
        const fetchVideo = async () => {
            // Send the video to the server to save it in the specified directory
            const formData = new FormData();

                // Send the video to the upload endpoint
            await fetch('http://127.0.0.1:5000/upload_video', {
                method: 'POST',
                body: formData,
            });
        };

        fetchVideo();
    }, []);
    
    return (
        <iframe
            src="/threejs.html" // Path to the new HTML file
            style={{ width: '100%', height: '100%', border: 'none' }} // Use 100% for responsive width
            title="Three.js Scene"
        />
    );
};

export default ThreeJSComponent;