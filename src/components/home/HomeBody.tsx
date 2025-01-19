"use client"

import Link from 'next/link';
import FileUploader from './FileUploader';

export default function HomeBody() {
    return(
    <main className="flex-grow container mx-auto py-8 px-4">
        <h1>Posture Visioner!</h1>
        <div>
            <Link href="/animation" className="underline">to be DELETED later: to Animation Page</Link>
        </div>
        <div className='flex flex-row justify-between'>
            <FileUploader />
        </div>

    </main>
    );
}