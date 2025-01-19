
import Link from "next/link";
import MannequinComponent from "./MannequinComponent";

const AnimationBody = () => {
    return (
        <div>
            <h1>This will be the animation page</h1>
            <div style={{ display: 'flex', justifyContent: 'center', padding: '20px' }}>
                <div style={{ width: '600px', height: '400px', border: '1px solid #ccc', overflow: 'hidden' }}>
                    <MannequinComponent />
                </div>
            </div>
            <Link href=".." className="underline">Click: Back</Link>
        </div>
    );
}

export default AnimationBody;