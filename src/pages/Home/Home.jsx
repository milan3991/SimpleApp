import '../Home/home.style.css';
import SectionOne from './componenets/SectionOne';
import SectionTwo from './componenets/SectionTwo';
import SectionThree from './componenets/SectionThree';
import SectionFour from './componenets/SectionFour';



const Home = () => {

    return (
        <div className='home_wrapper'>
            <SectionOne/>
            <SectionTwo/>
            <SectionThree />
            <SectionFour/>
        </div>
    );
};

export default Home;
