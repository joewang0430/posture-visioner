import Link from 'next/link';
import NavBar from '@/components/home/NavBar';

export default function AnimationPage() {
    return(
        <div>
            <NavBar />
            <h1>This will be the animation page</h1>
            <Link href=".." className="underline">Click: Back</Link>
        </div>
    );
}