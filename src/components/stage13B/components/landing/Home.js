import Navbar from "./assets/Navbar/Navbar";
import Body from "./Body";

const Home = () => {
    return (
        <div className="bg-green w-screen h-screen">
                <Navbar />
            <div className="mt-8 bg-green">
                <Body />
            </div>
        </div>
    );
}
export default Home;