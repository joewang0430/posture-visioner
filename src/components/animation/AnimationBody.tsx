"use client"

import Link from "next/link";
import MannequinComponent from "./ThreeJSComponent";
import VideoComponent from "./VideoComponent";

const AnimationBody = () => {
    const fileId = localStorage.getItem('file_id'); // Retrieve the fileId from local storage
    console.log('File ID:', fileId);

    return (
        <div>
            <h1>This will be the animation page</h1>
            <div style={{ display: 'flex', justifyContent: 'center', padding: '20px' }}>
                <div style={{ width: '800px', height: '600px', border: '1px solid #ccc', overflow: 'hidden' }}>
                    <MannequinComponent />
                </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', padding: '20px' }}>
                <div style={{ width: '600px', height: '400px', border: '1px solid #ccc', overflow: 'hidden' }}>
                    <VideoComponent fileId={fileId || ''}/>
                </div>
            </div>
            <Link href=".." className="underline">Click: Back</Link>
        </div>
    );
}

export default AnimationBody;