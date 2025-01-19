"use client"

import FileUploader from './FileUploader';
import figure1 from './figure1.png';
import frame2 from './Frame2.png';


export default function HomeBody() {
    return (
      <div className="flex flex-row w-full h-screen bg-blue-400">
        <div className="flex flex-col justify-center items-center w-1/2 h-full bg-blue-300">
        <div className='flex flex-col justify-left'>
          <h1 className="text-5xl font-bold mb-4">This is</h1>
          <h1 className="text-6xl font-bold mb-4">How We Move.</h1>
          <div className='h-4'></div>
          <div className='text-md'>To start, please share with us your video:</div>
          <div className='h-10'></div>
        </div>
        
          <FileUploader />
        
        </div>
  
        <div className="flex flex-col justify-center items-center w-1/2 h-full bg-blue-200">
        <div className="flex flex-row justify-center items-center space-x-4 py-10">
            <img src={figure1.src} alt="Figure 1" className="w-1/4 h-auto" />
            <img src={frame2.src} alt="Figure 2" className="w-1/4 h-auto" />
        </div>

        <div className="mt-4 text-center">
            <p className="text-lg text-gray-700">Visioner takes care of your movements</p>
            <p className="text-lg text-gray-700">Making 2D to 3D possible</p>
        </div>
        </div>
      </div>
    );
  }