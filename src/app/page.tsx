import NavBar from "../components/home/NavBar";
import HomeBody from "../components/home/HomeBody";
import Footer from "../components/home/Footer";

async function HomePage() {
    const res = await fetch('http://127.0.0.1:5000');
    const data = await res.json();

    const res2 = await fetch('http://127.0.0.1:5000/data');
    const data2 = await res2.json(); 

    return (
        <div className="flex flex-col min-h-screen">
            <NavBar />
            <HomeBody />
            <h1>{data.message}</h1>
            <h1>{data2.sample_data}</h1>
            <Footer />
        </div>
    );
}

export default HomePage;
