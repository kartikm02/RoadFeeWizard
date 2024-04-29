import Hero from "./Hero"
import TollsOnMap from "./TollsOnMap";
import Challenges from "./Challenges";
import QuestionsAndAnswer from "./QuestionsAndAnswer";
import Flags from './Flags';
import LogosBg from "./LogosBg";
import Footer from './Footer';
import Headers from './Headers';



const HomeMain = () => {
    return (
        <>
            <div>
                <Headers />
            </div>
            <div>
                <Hero />
            </div>
            <div className="">
                <TollsOnMap />
            </div>
            <div className="bg-[#F7F8FC]">
                <Challenges />
            </div>
            <div className="">
                <QuestionsAndAnswer />
            </div>
            <div className="bg-blue-600 mb-10">
                <Flags />
            </div>
            <div className="logo-bg mb-10">
                <LogosBg />
            </div>
            <div>
                <Footer />
            </div>
        </>
    )
}

export default HomeMain;