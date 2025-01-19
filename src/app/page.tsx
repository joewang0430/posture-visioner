import NavBar from "../components/home/NavBar";
import HomeBody from "../components/home/HomeBody";
import Footer from "../components/home/Footer";

async function HomePage() {
    
    return (
        <div className="flex flex-col min-h-screen">
            <div className="gradient" />
            <div className="app">
                <NavBar />
                <HomeBody />
                <Footer />
            </div>
        </div>
    );
}

export default HomePage;
