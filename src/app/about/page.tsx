
import Link from 'next/link';
import NavBar from '@/components/home/NavBar';

export default function AboutPage() {

    return (
        <div>
            <NavBar />
            <h1>This will intro about our project</h1>
            <Link href=".." className="underline">Click: Back</Link>
        </div>
    )
}