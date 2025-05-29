import '../Home/home.style.css';
import SectionOne from './componenets/SectionOne';
import SectionTwo from './componenets/SectionTwo';
import SectionThree from './componenets/SectionThree';
import SectionFour from './componenets/SectionFour';
import SectionFive from './componenets/SectionFive';



const Home = () => {

    return (
        <div className='home_wrapper'>
            <SectionOne/>
            <SectionTwo/>
            <SectionThree />
            <SectionFour/>
            <SectionFive/>
        </div>
    );
};

export default Home;
