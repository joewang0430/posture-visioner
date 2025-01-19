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

    return (
        <div>
            <h1>This will be the animation page</h1>
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