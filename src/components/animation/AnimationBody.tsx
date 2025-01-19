"use client"

import Link from "next/link";
import ThreeJSComponent from "./ThreeJSComponent";
import VideoComponent from "./VideoComponent";
import AnimationLoading from "./AnimationLoading";
import { useState } from 'react';

const AnimationBody = () => {
    const fileId = localStorage.getItem('file_id'); // Retrieve the fileId from local storage
    console.log('File ID:', fileId);
    const [isProcessing, setIsProcessing] = useState(true);

    const videoRef = useRef<HTMLVideoElement | null>(null);

    // move forward 1 second 
    const handleForward = () => {
        if (videoRef.current) {
        videoRef.current.currentTime += 1;
        }
    };

    // move backward 1 second
    const handleBackward = () => {
        if (videoRef.current) {
        videoRef.current.currentTime = Math.max(
            0,
            videoRef.current.currentTime - 10
        ); // make sure doesn't less thant zero
        }
    };

    return (
        <div>
            <h1>This will be the animation page</h1>
            <div className="controls">
                <button onClick={handleBackward}>-10s</button>
                <button onClick={handleForward}>+10s</button>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', padding: '20px', width: '100%' }}>
            <div style={{ flex: '1', maxWidth: '800px', height: 'auto', border: '1px solid #ccc', overflow: 'hidden', padding: '10px' }}>
                    <div style={{ width: '100%', height: '100%', objectFit: 'contain' }}>
                        <VideoComponent fileId={fileId || ''} setIsProcessing={setIsProcessing}  />
                    </div>
                </div>
                <div style={{ flex: '1', maxWidth: '800px', height: 'auto', border: '1px solid #ccc', overflow: 'hidden', padding: '10px' }}>
                    {isProcessing ? <AnimationLoading /> : <ThreeJSComponent/>}
                </div>
            </div>
            <Link href=".." className="underline">Click: Back</Link>
        </div>
    );
}

export default AnimationBody;