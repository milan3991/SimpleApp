import '../Home/home.style.css';
import SectionOne from './componenets/SectionOne';
import SectionTwo from './componenets/SectionTwo';
import SectionThree from './componenets/SectionThree';



const Home = () => {

    return (
        <div className='home_wrapper'>
            <SectionOne/>
            <SectionTwo/>
            <SectionThree />
        </div>
    );
};

export default Home;
