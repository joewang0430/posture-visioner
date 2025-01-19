"use client"
import { useRouter } from  "next/navigation";
import Link from 'next/link';


export default function NavBar() {

  return (
    <header className="bg-gray-800 text-white py-4">
      <nav className="container mx-auto flex justify-between items-center px-4">
        <div className="text-xl font-bold">Posture Visoner</div>
        <ul className="flex space-x-4">
          <li><Link href="/about" className="hover:text-gray-400">About</Link></li>
          <li><Link href="https://github.com/joewang0430/posture-visioner" className="hover:text-gray-400">GitHub</Link></li>
        </ul>
      </nav>
    </header>
  );
}