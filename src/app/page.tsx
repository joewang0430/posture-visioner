import NavBar from "../components/home/NavBar";
import HomeBody from "../components/home/HomeBody";
import Footer from "../components/home/Footer";

async function HomePage() {
    return (
        <div className="flex flex-col min-h-screen">
            <NavBar />
            <HomeBody />
            <Footer />
        </div>
    );
}

export default HomePage;
