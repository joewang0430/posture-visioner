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
        <div className="flex flex-col items-center">
            <div className="flex justify-center gap-8 p-8 w-full max-w-[2000px]">
                <div className="flex-1 flex justify-center h-100 items-center border border-gray-300 rounded-lg p-4" style={{ maxHeight: '600px' }}>
                    <div className="w-full h-full flex justify-center items-center">
                        <VideoComponent 
                            fileId={fileId || ''} 
                            setIsProcessing={setIsProcessing}
                        />
                    </div>
                </div>
                <div className="flex-1 flex justify-center items-center border border-gray-300 rounded-lg p-4" style={{ maxHeight: '600px' }}>
                    {isProcessing ? <AnimationLoading /> : <ThreeJSComponent />}
                </div>
            </div>
        </div>
    );
}

export default AnimationBody;