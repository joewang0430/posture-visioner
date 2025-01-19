
import Link from 'next/link';
import NavBar from '../../components/home/NavBar';

export default function AboutPage() {

    return (
        <div>
            <NavBar />
            <div className='h-20'></div>
            <a>
            <p></p>
            </a>
            <Link href=".." className="underline hover:font-bold">Back to main</Link>
        </div>
    );
}
