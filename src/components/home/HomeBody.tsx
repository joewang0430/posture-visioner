
import Link from 'next/link';

export default function HomeBody() {
    return(
    <main className="flex-grow container mx-auto py-8 px-4">
        <h1>Posture Visioner!</h1>
        <Link href="/animation" className="underline">click: to Animation Page</Link>
    </main>
    );
}