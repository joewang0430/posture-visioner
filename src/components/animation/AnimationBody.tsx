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
          {/* 主内容容器 */}
          <div className="flex justify-center gap-8 p-8 w-full max-w-[2000px]">
            {/* 左侧视频区域 */}
            <div className="flex-1 flex justify-center items-center border border-gray-300 rounded-lg p-4 max-h-[600px]">
              <VideoComponent 
                fileId={fileId || ''} 
                setIsProcessing={setIsProcessing}
              />
            </div>
            
            {/* 右侧动画或三维模型 */}
            <div className="flex-1 flex justify-center items-center border border-gray-300 rounded-lg p-4 max-h-[600px]">
              {isProcessing ? <AnimationLoading /> : <ThreeJSComponent />}
            </div>
          </div>
        </div>
      );
      
}

export default AnimationBody;