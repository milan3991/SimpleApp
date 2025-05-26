import '../Home/home.style.css';
import SectionOne from './componenets/SectionOne';
import SectionTwo from './componenets/SectionTwo';



const Home = () => {

    return (
        <div className='home_wrapper'>
            <SectionOne/>
            <SectionTwo/>
        </div>
    );
};

export default Home;
