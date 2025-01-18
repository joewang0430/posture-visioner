import Link from 'next/link';

export default function AnimationPage() {
    return(
        <div>
            <h1>This will be the animation page</h1>
            <Link href=".." className="underline">Click: Back</Link>
        </div>
    );
}