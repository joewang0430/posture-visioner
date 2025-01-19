import Link from 'next/link';
import NavBar from '../../components/home/NavBar';
import AnimationBody from '@/components/animation/AnimationBody';
import MannequinComponent from "../../components/animation/MannequinComponent";


export default function AnimationPage() {
    return(
        <div>
            <NavBar />
            <AnimationBody />
        </div>
    );
}